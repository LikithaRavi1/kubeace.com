---
title: "External Secrets Integration with Azure Key Vault Using Workload Identity"
meta_title: "Secure Kubernetes Secrets Management with Azure Key Vault and Workload Identity"
description: "Learn how to integrate External Secrets Operator with Azure Key Vault using Workload Identity for secure and efficient secrets management in Kubernetes."
date: 2024-03-24
categories: ["Kubernetes", "Azure"]
author: "kubeace"
tags: ["Kubernetes", "Azure Key Vault", "Secrets Management", "Workload Identity"]
slug: "external-secrets-azure-key-vault-workload-identity"
image: "/images/External-secrets-integration.webp"
---

## Introduction

Managing secrets securely in Kubernetes is crucial for maintaining the security and integrity of your applications. This guide will walk you through integrating External Secrets Operator with Azure Key Vault using Workload Identity for authentication, providing a robust and secure method for managing secrets in your Kubernetes clusters.

## Understanding the Components

Before we dive into the implementation, let's briefly understand the key components:

1. **External Secrets Operator (ESO)**: A Kubernetes operator that integrates external secret management systems with Kubernetes.
2. **Azure Key Vault**: A cloud service for securely storing and accessing secrets.
3. **Workload Identity**: A method to authenticate Azure resources without using explicit credentials.

## Prerequisites

- A Kubernetes cluster with RBAC enabled
- Azure CLI installed and configured
- Helm 3 installed
- An Azure subscription with permissions to create resources

## Step 1: Set Up Azure Key Vault and Workload Identity

First, let's create an Azure Key Vault and set up Workload Identity.

```bash
# Create a resource group
az group create --name myResourceGroup --location eastus

# Create an Azure Key Vault
az keyvault create --name myKeyVault --resource-group myResourceGroup --location eastus

# Create a managed identity
az identity create --name myManagedIdentity --resource-group myResourceGroup

# Get the Client ID of the managed identity
CLIENT_ID=$(az identity show --name myManagedIdentity --resource-group myResourceGroup --query clientId -o tsv)

# Assign Key Vault Secrets User role to the managed identity
az role assignment create --role "Key Vault Secrets User" --assignee $CLIENT_ID --scope /subscriptions/<your-subscription-id>/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/myKeyVault

# Enable Workload Identity on your AKS cluster (if not already enabled)
az aks update -g myResourceGroup -n myAKSCluster --enable-workload-identity
```

## Step 2: Install External Secrets Operator

Now, let's install the External Secrets Operator in your Kubernetes cluster using Helm.

```bash
helm repo add external-secrets https://charts.external-secrets.io
helm install external-secrets external-secrets/external-secrets -n external-secrets --create-namespace
```

## Step 3: Configure SecretStore

Create a SecretStore resource that defines how to connect to Azure Key Vault using Workload Identity.

```yaml
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: azure-secret-store
spec:
  provider:
    azurekv:
      authType: WorkloadIdentity
      vaultUrl: "https://myKeyVault.vault.azure.net"
      serviceAccountRef:
        name: workload-identity-sa
```

Apply this configuration:

```bash
kubectl apply -f secretstore.yaml
```

## Step 4: Create a Kubernetes ServiceAccount

Create a ServiceAccount that will be used by your pods to access secrets.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    azure.workload.identity/client-id: <managed-identity-client-id>
  name: workload-identity-sa
  namespace: default
```

Apply this configuration:

```bash
kubectl apply -f serviceaccount.yaml
```

## Step 5: Define an ExternalSecret

Now, let's define an ExternalSecret that fetches a secret from Azure Key Vault.

```yaml
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: my-secret
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: azure-secret-store
    kind: SecretStore
  target:
    name: my-k8s-secret
  data:
  - secretKey: db-password
    remoteRef:
      key: database-password
```

Apply this configuration:

```bash
kubectl apply -f externalsecret.yaml
```

## Step 6: Use the Secret in Your Application

You can now use the secret in your application by referencing it as a regular Kubernetes secret.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        env:
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: my-k8s-secret
              key: db-password
      serviceAccountName: workload-identity-sa
```

## Best Practices

1. **Rotate Secrets Regularly**: Implement a process to rotate secrets in Azure Key Vault periodically.
2. **Monitor Access**: Use Azure Monitor to track access to your Key Vault.
3. **Least Privilege**: Ensure that managed identities have only the necessary permissions.
4. **Version Your Secrets**: Use versioning in Azure Key Vault to manage different versions of your secrets.

## Conclusion

Integrating External Secrets Operator with Azure Key Vault using Workload Identity provides a secure and efficient way to manage secrets in your Kubernetes environment. This approach eliminates the need for storing sensitive credentials directly in your cluster, enhancing your overall security posture.

Elevate your Kubernetes journey with our expert consulting services. Our team of seasoned engineers offers comprehensive support for every stage of your platform's lifecycle, from migration to ongoing operations. By entrusting us with managing your Kubernetes cluster, you can focus on strategic initiatives while we ensure the reliability, resilience, and efficiency of your infrastructure.

---
