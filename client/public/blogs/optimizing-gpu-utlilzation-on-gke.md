---
title: "Optimizing GPU Utilization for AI/ML Workloads on AWS EKS"
meta_title: "Optimizing GPU Utilization for AI/ML Workloads on AWS EKS"
description: "Modern AI/ML workloads on Kubernetes often underutilize GPUs when each pod gets an entire device. AWS EKS can leverage advanced sharing features to squeeze more work out of each GPU."
date: 2024-02-24T05:00:00Z
image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D"
categories: ["AWS", "EKS", "GPU", "AI/ML"]
author: "Kubeace"
tags: ["AWS", "EKS", "GPU", "AI/ML", "Kubernetes", "MIG", "MPS", "Time-slicing"]
draft: false
slug: "optimizing-gpu-utlilzation-on-gke"
---

# Optimizing GPU Utilization for AI/ML Workloads on AWS EKS

Modern AI/ML workloads on Kubernetes often underutilize GPUs when each pod gets an entire device. AWS EKS can leverage advanced sharing features to squeeze more work out of each GPU. NVIDIA provides several mechanisms – **Multi-Instance GPU (MIG)**, **CUDA Multi-Process Service (MPS)**, and **time-slicing** – that allow multiple pods or processes to share a GPU’s resources. Broadly:

* **MIG** partitions Ampere GPUs (e.g. A100/H100) into isolated mini-GPUs.
* **MPS** runs kernels from different processes in parallel on the same GPU.
* **Time-slicing** interleaves GPU execution among containers.

These options trade off performance isolation, throughput, and complexity.

---

## NVIDIA Multi-Instance GPU (MIG)

**MIG** is a hardware partitioning feature (available on A100/H100) that divides one GPU into up to seven independent instances. Each slice has its own SMs, memory and cache, providing *strict isolation* and predictable performance.

* On AWS, a P4d instance (8×A100) can be labeled so that each GPU creates 7 “1g.5gb” MIG devices – allowing up to 56 pods per node.
* Example: One A100 split into 7 MIGs showed **4.17× higher throughput** (but each pod had \~1.7× higher latency).
* AWS reports **\~2.5× throughput gains** on P4d clusters using MIG.

### Setup on EKS:

1. Use MIG-compatible instances (P4d, G5n, etc.).
2. Deploy the NVIDIA GPU Operator or install drivers/toolkit manually.
3. Label nodes with `nvidia.com/mig.config=all-1g.5gb`.
4. Pod spec requests:

   ```yaml
   resources:
     limits:
       nvidia.com/mig-1g.5gb: 1
   ```

### ✅ Benefits:

* Strict performance **isolation**.
* **Predictable behavior** per slice.
* Tailor slice sizes for different models.

### ❌ Limitations:

* Supported only on A100/H100 (Ampere/Hopper).
* Adds config complexity.
* MIG slices reduce raw performance per job.
* No simultaneous profiling sessions across MIG slices.

---

## CUDA Multi-Process Service (MPS)

**MPS** allows multiple processes (or pods) to share one GPU context and run kernels concurrently via a central MPS daemon.

* Useful for overlapping lightweight inference workloads.
* Newer CUDA versions allow GPU memory and thread % limits per client.

### Setup on EKS:

1. Use supported GPUs (e.g. T4, A100).
2. Start MPS control daemon on node.
3. Use plugins (e.g., [Nebuly’s NOS plugin](https://github.com/nebuly-ai/nebuly)) to expose `sharing.mps` mode.
4. Pod resource example:

   ```yaml
   resources:
     limits:
       nvidia.com/gpu-memory: 4Gi
   ```

### ✅ Benefits:

* **Concurrent kernel execution**.
* Works on most NVIDIA GPUs.
* High **aggregate throughput** for inference/batch jobs.

### ❌ Limitations:

* Poor **isolation**: a misbehaving pod can crash all.
* Shared memory: prone to contention.
* Manual MPS daemon management.
* Not compatible with MIG on the same device.

---

## GPU Time-Slicing (Fractional GPUs)

Time-slicing configures the NVIDIA device plugin to treat one physical GPU as multiple vGPUs. Internally, it uses context switching.

* E.g., with 10× time-slice, one GPU is sliced into 10 parts.
* Allows 10 pods to run on a single GPU with `nvidia.com/gpu: 1`.

### Setup on EKS:

1. Patch the device plugin ConfigMap:

   ```yaml
   sharing:
     timeSlicing:
       resources:
         - name: nvidia.com/gpu
   ```
2. Restart the `nvidia-device-plugin-daemonset`.

### ✅ Benefits:

* Easy to configure.
* Higher pod density on single GPU.
* Great for dev/test, low-usage inference.

### ❌ Limitations:

* No **performance isolation**.
* Shared memory; one pod can crash the GPU.
* Overhead from GPU context switching.
* Not suitable for latency-sensitive jobs.

---

## Implementing GPU Sharing on AWS EKS

### ✅ Cluster Design Best Practices:

* Use GPU instances that match sharing strategy:

  * **MIG** → A100/H100 (P4d, G5n).
  * **MPS/Time-slice** → T4, G4, A10G.
* Use Bottlerocket or GPU-optimized AMIs.
* Auto-scale GPU nodes with **Karpenter**.

### ✅ Install GPU Operator:

* Handles driver installation, NVIDIA Container Toolkit, device plugin.
* Includes **DCGM** exporter for monitoring.

### ✅ Configure Device Plugin:

* **Time-slicing**:

  ```yaml
  migStrategy: none
  sharing:
    timeSlicing:
      resources:
        - name: nvidia.com/gpu
  ```
* **MIG**:

  ```yaml
  migStrategy: single
  ```

  Label node:

  ```bash
  kubectl label node <node> nvidia.com/mig.config=all-1g.5gb
  ```

### ✅ Scheduling & Resources:

* Label and taint GPU nodes.
* Match pod requests to available slice type:

  ```yaml
  resources:
    limits:
      nvidia.com/mig-1g.5gb: 1
  ```
* For time-slice or MPS, request GPU memory limits if supported.

---

## Monitoring and Observability Tools

| Tool                      | Use Case                               |
| ------------------------- | -------------------------------------- |
| **NVIDIA DCGM Exporter**  | GPU metrics to Prometheus/Grafana      |
| **GPU Feature Discovery** | Labels GPU nodes with capabilities     |
| **Karpenter**             | Auto-scaling GPU nodes based on demand |
| **Nebuly Nos Plugin**     | Advanced sharing with MPS support      |

---

## Summary: When to Use What?

| Sharing Method   | Best For                              | Isolation | Hardware Support | Complexity |
| ---------------- | ------------------------------------- | --------- | ---------------- | ---------- |
| **MIG**          | Multi-tenant inference                | ✅ High    | A100, H100 only  | ⚠️ Medium  |
| **MPS**          | Throughput-heavy batch jobs           | ❌ Low     | Most NVIDIA GPUs | ⚠️ Medium  |
| **Time-slicing** | Lightweight, cost-sensitive workloads | ❌ None    | Most NVIDIA GPUs | ✅ Low      |

Here’s a tailored **conclusion and KubeAce support section** for your GPU workload optimization blog on **GKE (Google Kubernetes Engine)**:

---

## Conclusion

Efficient GPU utilization is no longer a luxury—it's a necessity for scaling AI/ML workloads cost-effectively. Techniques like MIG, CUDA MPS, and time-slicing unlock hidden performance and dramatically improve ROI, especially in Kubernetes environments like GKE.

By combining these strategies with robust observability and auto-scaling, organizations can minimize idle resources while maintaining performance for critical inference or training pipelines.

Whether you're just beginning to explore GPU sharing or you're optimizing large-scale ML pipelines, mastering these techniques gives your team a competitive edge.

## KubeAce Support

At **KubeAce**, we help organizations design, deploy, and optimize AI/ML infrastructure on Kubernetes—especially on **Google Kubernetes Engine (GKE)**. Our engineers bring deep expertise in GPU workload management, including:

* Configuring MIG on NVIDIA A100s in GKE Autopilot or Standard clusters
* Tuning MPS and time-slicing for cost-effective inference at scale
* Integrating monitoring and observability with Prometheus, DCGM, and Grafana
* Ensuring workloads auto-scale efficiently without waste

If you're struggling with GPU underutilization or want to make the most of your ML infrastructure investment, we’re here to help.

📩 **Contact us at [info@kubeace.com](mailto:info@kubeace.com)**
🌐 **Visit [kubeace.com](https://kubeace.com)**

Let’s build intelligent, efficient, and scalable AI platforms—together.
