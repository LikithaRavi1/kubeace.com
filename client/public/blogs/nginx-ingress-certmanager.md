---
title: "Set Up an Nginx Ingress with Cert-Manager in Kubernetes"
meta_title: "Secure Kubernetes Ingress: Implementing Nginx and Cert-Manager"
description: "Learn how to set up and configure Nginx Ingress with Cert-Manager for automatic SSL/TLS certificate management in any Kubernetes cluster."
date: 2024-03-26
categories: ["Kubernetes", "DevOps"]
author: "kubeace"
tags: ["Kubernetes", "Nginx Ingress", "Cert-Manager", "SSL/TLS"]
slug: "nginx-ingress-certmanager"
image: "/images/nginx-certmanager.webp"
---

## Introduction

In the world of Kubernetes, managing ingress traffic and securing it with SSL/TLS certificates is crucial for production-grade applications. This guide will walk you through setting up Nginx Ingress Controller with Cert-Manager in a Kubernetes cluster, providing automatic SSL/TLS certificate management for your services, regardless of your cloud provider or on-premises setup.

## Prerequisites

- A Kubernetes cluster (cloud-managed or self-hosted)
- `kubectl` configured to interact with your cluster
- Helm 3 installed
- A domain name that you can configure DNS records for

## Step 1: Install Nginx Ingress Controller

First, let's install the Nginx Ingress Controller using Helm.

```bash
# Add the ingress-nginx repository
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

# Install the Nginx ingress controller
helm install nginx-ingress ingress-nginx/ingress-nginx \
    --namespace ingress-basic \
    --create-namespace
```

This will create a LoadBalancer service that exposes the Nginx Ingress Controller to the internet. Depending on your Kubernetes setup, you might need to configure additional parameters or use a NodePort service instead.

## Step 2: Install Cert-Manager

Cert-Manager is a Kubernetes add-on that automates the management and issuance of TLS certificates from various issuing sources.

```bash
# Add the Jetstack Helm repository
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Install Cert-Manager
helm install cert-manager jetstack/cert-manager \
    --namespace cert-manager \
    --create-namespace \
    --version v1.8.0 \
    --set installCRDs=true
```

## Step 3: Configure Let's Encrypt Issuer

Create a ClusterIssuer to use Let's Encrypt for certificate issuance.

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
```

Apply this configuration:

```bash
kubectl apply -f clusterissuer.yaml
```

## Step 4: Create an Ingress Resource

Now, let's create an Ingress resource that uses our Nginx Ingress Controller and requests a certificate from Let's Encrypt.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app-service
            port: 
              number: 80
```

Apply this configuration:

```bash
kubectl apply -f ingress.yaml
```

## Step 5: Configure DNS

Get the external IP or hostname of the Ingress Controller:

```bash
kubectl get services -n ingress-basic
```

Create an A record (for IP) or CNAME record (for hostname) in your DNS provider pointing your domain (e.g., myapp.example.com) to this address.

## Step 6: Verify the Setup

After a few minutes, Cert-Manager should have obtained a certificate from Let's Encrypt. You can verify this by checking the certificate status:

```bash
kubectl get certificate -A
```

You should see your certificate listed as "Ready: True".

## Best Practices

1. **Use Production Issuer Carefully**: The production Let's Encrypt issuer has rate limits. Use a staging issuer for testing.
2. **Monitor Certificate Expiration**: Set up alerts for upcoming certificate expirations.
3. **Implement Rate Limiting**: Configure Nginx Ingress Controller's rate limiting to protect your services from abuse.
4. **Keep Everything Updated**: Regularly update Nginx Ingress Controller, Cert-Manager, and your cluster to benefit from the latest features and security patches.

## Troubleshooting

1. **Certificate Issuance Failures**: Check Cert-Manager logs for detailed error messages.
2. **Ingress Not Working**: Ensure your DNS is correctly configured and propagated.
3. **TLS Errors**: Verify that the hostname in your Ingress resource matches your DNS configuration.

## Conclusion

Setting up Nginx Ingress Controller with Cert-Manager in your Kubernetes cluster provides a robust, secure, and automated way to manage ingress traffic and SSL/TLS certificates for your services. This setup ensures that your applications are accessible over HTTPS with valid, auto-renewing certificates, enhancing both security and user trust, regardless of your underlying infrastructure.

Elevate your Kubernetes journey with our expert consulting services. Our team of seasoned engineers offers comprehensive support for every stage of your platform's lifecycle, from migration to ongoing operations. By entrusting us with managing your Kubernetes cluster, you can focus on strategic initiatives while we ensure the reliability, resilience, and efficiency of your infrastructure.

---