---
id: 9
title: "livekit-deployment-on-vm"
description: "Step-by-step guide to install and deploy LiveKit on a virtual machine with TURN server, firewall rules, domain configuration, SSL setup, and debugging tips."
image: "/images/livekit-deployment-on-vm.webp"
date: 2025-05-20T00:00:00Z
author: "KubeAce"
tags: ["LiveKit", "WebRTC", "Deployment", "TURN", "SSL", "Cloud Agnostic", "Media Infrastructure"]
draft: false
slug: "livekit-deployment-on-vm"
---

## Introduction

LiveKit provides a scalable, open-source WebRTC stack for building real-time audio/video applications. This guide walks you through setting up a production-ready LiveKit installation on any cloud-agnostic virtual machine. Whether you're on AWS, Azure, GCP, or bare-metal, this tutorial applies universally.

## 1. Prerequisites

- A Linux VM (Ubuntu 22.04 recommended)
- Root/sudo access
- DNS and domain name

## 2. Firewall Configuration

Open the following ports to allow WebRTC and API traffic:

- `80` – HTTP (for Let's Encrypt challenge)
- `443` – HTTPS (API + TURN TLS)
- `5349` – TURN over TLS (recommended)
- `50000-60000/UDP` – Media traffic (configurable)

```bash
sudo ufw allow 80,443,5349/tcp
sudo ufw allow 50000:60000/udp
sudo ufw enable
````

## 3. Domain Setup & SSL

Point a domain (e.g., `livekit.yourdomain.com`) to your VM’s public IP. Use Let's Encrypt for SSL:

```bash
sudo apt install certbot
sudo certbot certonly --standalone -d livekit.yourdomain.com
```

This generates certificates in `/etc/letsencrypt/live/livekit.yourdomain.com/`.

## 4. TURN Server Deployment

TURN is required for NAT traversal. You can install Coturn:

```bash
sudo apt install coturn
sudo nano /etc/turnserver.conf
```

Basic config:

```ini
listening-port=5349
tls-listening-port=5349
cert=/etc/letsencrypt/live/livekit.yourdomain.com/fullchain.pem
pkey=/etc/letsencrypt/live/livekit.yourdomain.com/privkey.pem
realm=livekit.yourdomain.com
user=test:password
lt-cred-mech
fingerprint
min-port=50000
max-port=60000
```

```bash
sudo systemctl enable coturn
sudo systemctl start coturn
```

## 5. LiveKit Installation

Download and install the LiveKit server:

```bash
curl -L https://github.com/livekit/livekit/releases/latest/download/livekit-server-linux-amd64 \
  -o livekit-server && chmod +x livekit-server
```

### Configuration

Create `livekit.yaml`:

```yaml
port: 7880
rtc:
  udp_port_range_start: 50000
  udp_port_range_end: 60000
  tcp_port: 7881
  use_external_ip: true

keys:
  your_api_key: your_api_secret

turn:
  enabled: true
  domain: livekit.yourdomain.com
  tls_port: 5349
  credential: password
```

Run the server:

```bash
./livekit-server --config livekit.yaml
```

## 6. Sample Management Commands

Once deployed, you can use the `lk` CLI to manage LiveKit.

```bash
curl -sSL https://get.livekit.io/cli | bash

lk room list --api-key your_api_key --api-secret your_api_secret --url https://livekit.yourdomain.com

lk room delete myroom
lk egress list
```

## 7. Debugging and Logs

* LiveKit server logs to stdout – run it via `tmux` or a service manager.
* To view logs:

```bash
journalctl -u livekit.service -f
```

If using systemd, create a unit file `/etc/systemd/system/livekit.service`:

```ini
[Unit]
Description=LiveKit Server
After=network.target

[Service]
ExecStart=/usr/local/bin/livekit-server --config /etc/livekit.yaml
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

## Conclusion

With this setup, you now have a robust, production-ready LiveKit server running on any cloud or bare-metal VM. You've configured SSL, TURN, firewall, and a management interface. LiveKit empowers developers to create low-latency, real-time communication platforms — fully under their control.

### KubeAce Support

At **KubeAce**, we help businesses build scalable video infrastructure using LiveKit, WebRTC, and Kubernetes. Need assistance setting up monitoring, autoscaling, or integrating LiveKit into your application? Reach out to us!

Contact us at [info@kubeace.com](mailto:info@kubeace.com) or visit [kubeace.com](https://kubeace.com).
