---
title: "livekit-kubernetes-helm-deployment"
description: "Comprehensive guide to deploying LiveKit on Kubernetes using the official Helm chart with TURN, ingress, domain and SSL configuration."
image: "/images/livekit-deployment-on-kubernetes.webp"
date: 2025-05-20T05:00:00Z
author: "KubeAce"
tags: ["LiveKit", "Kubernetes", "Helm", "TURN", "SSL", "WebRTC", "Ingress", "Production Deployment"]
draft: false
slug: "livekit-deployment-on-kubernetes"
---

## Introduction

Deploying **LiveKit** on **Kubernetes** provides a scalable and production-grade infrastructure for real-time audio/video communications. This tutorial walks through installing LiveKit using the official Helm chart on any cloud or bare-metal Kubernetes cluster, including **TURN server setup**, **domain and SSL configuration**, **ingress**, **autoscaling**, and **monitoring basics**.

---

## 1. Prerequisites

* A working **Kubernetes cluster** (k8s v1.24+ recommended)
* **kubectl** and **Helm** installed
* A **domain name** pointing to your cluster (via LoadBalancer or Ingress)
* **Cert-Manager** for automatic SSL

---

## 2. Install Cert-Manager (for SSL)

```bash
kubectl apply -f [https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml](https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml)
```

---

## 3. Clone the LiveKit Helm Chart

```bash
git clone [https://github.com/livekit/livekit-helm.git](https://github.com/livekit/livekit-helm.git)
cd livekit-helm
```

---

## 4. Set up Namespace

```bash
kubectl create namespace livekit
```

---

## 5. Configure values.yaml

Edit `values.yaml` with your production configuration. Key sections:

### ⚙️ App Configuration

```yaml
livekit:
  config:
    port: 7880
    rtc:
      use_external_ip: true
      udp_port_range_start: 50000
      udp_port_range_end: 60000
      tcp_port: 7881
    keys:
      your_api_key: your_api_secret
    turn:
      enabled: true
      tls_port: 5349
      domain: livekit.yourdomain.com
      credential: your_turn_password
    redis:
      address: redis://livekit-redis-master:6379
    region: your-region
    node_ip: ""
    log_level: info
    enable_metrics: true
    enable_pprof: false
    health_port: 7888
    websocket_port: 7880
    api_key_file: ""
    api_key: your_api_key
    api_secret: your_api_secret
```

### 🌐 Ingress Setup (Optional)

Enable ingress to expose LiveKit securely with a domain:

```yaml
ingress:
  enabled: true
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
  hosts:
    - host: livekit.yourdomain.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: livekit-tls
      hosts:
        - livekit.yourdomain.com
```

---

## 6. Deploy the Chart

```bash
helm install livekit . -n livekit -f values.yaml
```

---

## 7. TURN Server Options

The Helm chart supports bundling **TURN** via coturn. If you'd like a standalone TURN, deploy it separately and point LiveKit’s `turn` section to it.

---

## 8. Expose via LoadBalancer (if not using Ingress)

For non-ingress-based setups, you can expose the service with a **LoadBalancer**:

```bash
kubectl edit svc livekit -n livekit
# Change service type to LoadBalancer
```

Update your DNS A record to point to the LoadBalancer's IP.

---

## 9. TLS with Let's Encrypt

Ensure your Cert-Manager is set up with an issuer. Example issuer:

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: [https://acme-v02.api.letsencrypt.org/directory](https://acme-v02.api.letsencrypt.org/directory)
    email: your@email.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - http01:
          ingress:
            class: nginx
```

---

## 10. Autoscaling and Resource Management

```yaml
resources:
  requests:
    cpu: "500m"
    memory: "512Mi"
  limits:
    cpu: "1000m"
    memory: "1Gi"

autoscaling:
  enabled: true
  minReplicas: 1
  maxReplicas: 5
  targetCPUUtilizationPercentage: 70
```

---

## 11. Monitoring (Optional)

* Enable **Prometheus** metrics by setting `enable_metrics: true`.
* Install a Prometheus/Grafana stack.
* Scrape `/metrics` endpoint exposed by LiveKit pods.

---

## 12. LiveKit CLI (for remote access)

```bash
curl -sSL [https://get.livekit.io/cli](https://get.livekit.io/cli) | bash

lk room list --api-key your_api_key --api-secret your_api_secret --url [https://livekit.yourdomain.com](https://livekit.yourdomain.com)

lk egress list
```

---

## 13. Cleanup

```bash
helm uninstall livekit -n livekit
kubectl delete ns livekit
```

---

## Conclusion

Deploying **LiveKit** using the official **Helm chart** gives you powerful, scalable infrastructure for real-time applications with minimal manual overhead. This setup supports **autoscaling**, **TLS**, **TURN**, and **observability**—production ready out of the box.

### KubeAce Can Help

**KubeAce** helps companies build high-performance WebRTC infrastructures with **LiveKit**, **Kubernetes**, and **DevOps** best practices. We provide full-stack support from installation to autoscaling, CI/CD, TURN hardening, observability, and HA deployment.

Contact us at [info@kubeace.com](mailto:info@kubeace.com) or visit [kubeace.com](https://kubeace.com).
```