---
title: "Mastering Deployment Strategies with Argo Rollouts"
meta_title: "Advanced Kubernetes Deployment Techniques Using Argo Rollouts"
description: "Explore the powerful features of Argo Rollouts for implementing sophisticated deployment strategies in Kubernetes, including blue-green, canary, and more."
date: 2024-03-25
categories: ["Kubernetes", "DevOps"]
author: "kubeace"
tags: ["Kubernetes", "Argo Rollouts", "Deployment Strategies"]
image: "/images/argo-rollouts.webp"
slug: "mastering-deployment-strategies-with-argo-rollouts"
---

## Introduction

In the ever-evolving landscape of Kubernetes deployments, Argo Rollouts stands out as a powerful tool for implementing advanced deployment strategies. This blog post will dive deep into the features of Argo Rollouts, providing examples and explanations for each, to help you master sophisticated deployment techniques in your Kubernetes environment.

## What is Argo Rollouts?

Argo Rollouts is a Kubernetes controller and set of CRDs (Custom Resource Definitions) that provide advanced deployment capabilities such as blue-green, canary, and more. It builds upon the basic Deployment object in Kubernetes, offering more sophisticated release strategies.

## Key Features of Argo Rollouts

### 1. Blue-Green Update Strategy

Blue-Green deployments involve running two identical production environments, with only one serving live traffic at a time.

Example:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: my-app-rollout
spec:
  replicas: 4
  strategy:
    blueGreen:
      activeService: my-app-active
      previewService: my-app-preview
  template:
    spec:
      containers:
      - name: my-app
        image: my-app:v1
```

In this example, Argo Rollouts manages two services: `my-app-active` (serving live traffic) and `my-app-preview` (for the new version). It automatically switches traffic when the new version is ready.

### 2. Canary Update Strategy

Canary deployments gradually roll out changes to a small subset of users before moving to full deployment.

Example:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: my-app-rollout
spec:
  replicas: 10
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: {duration: 1h}
      - setWeight: 40
      - pause: {duration: 1h}
      - setWeight: 60
      - pause: {duration: 1h}
      - setWeight: 80
      - pause: {duration: 1h}
  template:
    spec:
      containers:
      - name: my-app
        image: my-app:v2
```

This configuration gradually increases traffic to the new version in 20% increments, with 1-hour pauses between each step.

### 3. Fine-grained, Weighted Traffic Shifting

Argo Rollouts allows precise control over traffic distribution between versions.

Example:

```yaml
spec:
  strategy:
    canary:
      trafficRouting:
        istio:
          virtualServices:
          - name: my-vsvc
            routes:
            - primary
      steps:
      - setWeight: 5
      - pause: {duration: 10m}
      - setWeight: 20
      - pause: {duration: 10m}
      - setWeight: 50
      - pause: {duration: 10m}
      - setWeight: 80
      - pause: {duration: 10m}
```

This example uses Istio for traffic routing, allowing fine-grained control over the percentage of traffic sent to the new version.

### 4. Automated Rollbacks and Promotions

Argo Rollouts can automatically rollback or promote based on metrics or manual intervention.

Example:

```yaml
spec:
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: {duration: 10m}
      - analysis:
          templates:
          - templateName: success-rate
      - setWeight: 40
      - pause: {duration: 10m}
```

Here, an analysis step is included to check metrics before proceeding with the rollout.

### 5. Manual Judgement

For critical deployments, manual approval can be required before proceeding.

Example:

```yaml
spec:
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: {}  # Pause indefinitely until manual promotion
```

This configuration pauses the rollout indefinitely, requiring manual intervention to continue.

### 6. Customizable Metric Queries and Analysis

Argo Rollouts integrates with various metric providers for sophisticated analysis.

Example using Prometheus:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  metrics:
  - name: success-rate
    interval: 5m
    successCondition: result[0] >= 0.95
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus.example.com:9090
        query: |
          sum(rate(http_requests_total{status=~"2.*"}[5m])) 
          / 
          sum(rate(http_requests_total[5m]))
```

This analysis template checks if the success rate is above 95% using a Prometheus query.

### 7. Ingress Controller Integration

Argo Rollouts integrates with popular ingress controllers for traffic management.

Example with NGINX:

```yaml
spec:
  strategy:
    canary:
      trafficRouting:
        nginx:
          stableIngress: my-app-stable
          annotationPrefix: nginx.ingress.kubernetes.io
```

This configuration uses NGINX ingress for traffic routing during the canary deployment.

### 8. Service Mesh Integration

For environments using service meshes, Argo Rollouts provides seamless integration.

Example with Istio:

```yaml
spec:
  strategy:
    canary:
      trafficRouting:
        istio:
          virtualService:
            name: my-vsvc
            routes:
            - primary
```

This setup uses Istio's VirtualService for traffic routing during the rollout.

### 9. Metric Provider Integration

Argo Rollouts can use various metric providers for analysis.

Example with Wavefront:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: wavefront-query
spec:
  metrics:
  - name: success-rate
    provider:
      wavefront:
        address: https://wavefront.example.com
        query: |
          sum(rate(application.requests.success{env=production}))
          /
          sum(rate(application.requests.total{env=production}))
```

This analysis template uses a Wavefront query to calculate the success rate.

## Conclusion

Argo Rollouts provides a powerful set of tools for implementing advanced deployment strategies in Kubernetes. By leveraging features like blue-green deployments, canary releases, and integrated metric analysis, teams can significantly reduce the risk associated with deploying new versions of their applications.

Elevate your Kubernetes journey with our expert consulting services. Our team of seasoned engineers offers comprehensive support for every stage of your platform's lifecycle, from migration to ongoing operations. By entrusting us with managing your Kubernetes cluster, you can focus on strategic initiatives while we ensure the reliability, resilience, and efficiency of your infrastructure.
