import { type BlogPost } from '@shared/schema';

export const blogPosts: BlogPost[] = [
  {
    id: 3,
    title: 'The Future of GitOps and Kubernetes',
    description: 'Explore how GitOps is changing the way teams deploy and manage applications on Kubernetes.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    date: '2023-04-12',
    author: 'KubeAce',
    content: `
      <h2>Introduction</h2>
      <p>
        GitOps has emerged as a powerful paradigm for managing Kubernetes infrastructure and applications. 
        By using Git as the single source of truth for declarative infrastructure and applications, 
        GitOps provides a streamlined approach to deployment, management, and operations.
      </p>
      <p>
        In this article, we'll explore the current state of GitOps, its benefits for Kubernetes environments, 
        and where this approach is headed in the future.
      </p>
      
      <h2>What is GitOps?</h2>
      <p>
        GitOps is an operational framework that applies DevOps best practices used for application development such as 
        version control, collaboration, compliance, and CI/CD to infrastructure automation.
      </p>
      <p>
        Core principles of GitOps include:
      </p>
      <ul>
        <li>The entire system is described declaratively</li>
        <li>The canonical desired system state is versioned in Git</li>
        <li>Approved changes to the desired state are automatically applied</li>
        <li>Software agents ensure correctness and alert on divergence</li>
      </ul>
      
      <h2>Benefits of GitOps for Kubernetes</h2>
      <p>
        GitOps offers numerous advantages for managing Kubernetes environments:
      </p>
      <h3>1. Improved Developer Experience</h3>
      <p>
        Developers can use familiar tools and workflows to manage both application code and infrastructure. 
        This reduces the learning curve and increases productivity.
      </p>
      
      <h3>2. Enhanced Security and Audit Capabilities</h3>
      <p>
        With Git as the source of truth, you get:
      </p>
      <ul>
        <li>Built-in audit trail through commit history</li>
        <li>Simplified rollbacks to previous states</li>
        <li>Stronger security through pull request reviews and approvals</li>
        <li>Reduced credentials management complexity</li>
      </ul>
      
      <h3>3. Increased Reliability and Consistency</h3>
      <p>
        GitOps promotes:
      </p>
      <ul>
        <li>Consistent deployment processes across environments</li>
        <li>Self-healing infrastructure through continuous reconciliation</li>
        <li>Reduced configuration drift</li>
        <li>Simplified disaster recovery</li>
      </ul>
      
      <h3>4. Improved Collaboration</h3>
      <p>
        GitOps facilitates collaboration by:
      </p>
      <ul>
        <li>Providing visibility into infrastructure changes</li>
        <li>Enabling code reviews for infrastructure changes</li>
        <li>Creating a unified workflow for development and operations teams</li>
        <li>Documenting changes through commit messages and pull requests</li>
      </ul>
      
      <h2>Current GitOps Tools and Practices</h2>
      <p>
        Several tools have emerged to support GitOps workflows:
      </p>
      <h3>1. Flux</h3>
      <p>
        Flux is a CNCF Incubating project that automatically ensures that the state of your Kubernetes cluster matches the configuration stored in Git.
      </p>
      
      <h3>2. Argo CD</h3>
      <p>
        Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes that follows the GitOps pattern of using Git repositories as the source of truth for defining the desired application state.
      </p>
      
      <h3>3. Jenkins X</h3>
      <p>
        Jenkins X is designed to automate CI/CD in Kubernetes using a GitOps approach.
      </p>
      
      <h2>The Future of GitOps</h2>
      <p>
        As GitOps continues to mature, we see several key trends emerging:
      </p>
      
      <h3>1. Enhanced Multi-Cluster Management</h3>
      <p>
        Future GitOps tools will provide better support for managing multiple Kubernetes clusters across different environments and cloud providers.
      </p>
      
      <h3>2. GitOps as a Foundation for Platform Engineering</h3>
      <p>
        GitOps principles are becoming central to platform engineering efforts, providing the foundation for self-service developer platforms.
      </p>
      
      <h3>3. Advanced Policy Enforcement</h3>
      <p>
        Integration of policy-as-code frameworks like OPA Gatekeeper with GitOps workflows will enable advanced governance and compliance automation.
      </p>
      
      <h3>4. AI/ML Integration</h3>
      <p>
        We anticipate AI/ML capabilities being integrated into GitOps workflows for:
      </p>
      <ul>
        <li>Predictive analysis of deployment impacts</li>
        <li>Automated rollback decisions</li>
        <li>Optimization of deployment strategies</li>
        <li>Anomaly detection in configuration and performance</li>
      </ul>
      
      <h3>5. Extended Ecosystem Integration</h3>
      <p>
        GitOps will extend beyond Kubernetes to manage:
      </p>
      <ul>
        <li>Database schemas and migrations</li>
        <li>Network configuration</li>
        <li>Edge computing environments</li>
        <li>Machine learning models and pipelines</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        GitOps represents a fundamental shift in how we manage infrastructure and deploy applications. 
        By leveraging Git as the source of truth and implementing automated reconciliation, 
        organizations can achieve more reliable, secure, and efficient operations.
      </p>
      <p>
        As the GitOps ecosystem continues to evolve, we expect to see even greater adoption and innovation, 
        particularly in enterprise environments managing complex Kubernetes deployments.
      </p>
      <p>
        At KubeAce, we help organizations implement GitOps practices and tools to streamline their 
        Kubernetes operations. Contact us to learn how we can help you adopt GitOps in your environment.
      </p>
    `,
    slug: 'future-of-gitops-and-kubernetes',
    tags: ['GitOps', 'Kubernetes', 'DevOps', 'Continuous Deployment']
  },
  {
    id: 4,
    title: 'Implementing Service Mesh in Production Kubernetes Clusters',
    description: 'A comprehensive guide to implementing and managing service mesh technologies like Istio and Linkerd in production Kubernetes environments.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    date: '2023-03-30',
    author: 'KubeAce',
    content: `
      <h2>Introduction</h2>
      <p>
        As microservice architectures grow in complexity, service meshes have emerged as a critical component for managing service-to-service communication. 
        In this article, we'll explore the practical aspects of implementing a service mesh in production Kubernetes environments, 
        focusing on real-world challenges and solutions.
      </p>
      
      <h2>What is a Service Mesh?</h2>
      <p>
        A service mesh is a dedicated infrastructure layer that controls service-to-service communication over a network. 
        It provides features such as:
      </p>
      <ul>
        <li>Traffic management and routing</li>
        <li>Service discovery</li>
        <li>Load balancing</li>
        <li>Encryption (mTLS)</li>
        <li>Authentication and authorization</li>
        <li>Observability and monitoring</li>
        <li>Circuit breaking and fault injection</li>
      </ul>
      
      <h2>Popular Service Mesh Options</h2>
      <p>
        There are several service mesh implementations available, each with its own strengths:
      </p>
      
      <h3>Istio</h3>
      <p>
        Istio is a comprehensive service mesh solution with rich features and extensive configuration options. 
        It's backed by Google, IBM, and Lyft, and offers the most complete feature set.
      </p>
      <p>
        <strong>Pros:</strong> Feature-rich, mature ecosystem, strong community, powerful traffic management capabilities
      </p>
      <p>
        <strong>Cons:</strong> Relatively complex, higher resource overhead, steeper learning curve
      </p>
      
      <h3>Linkerd</h3>
      <p>
        Linkerd is a lightweight, CNCF-hosted service mesh focused on simplicity and ease of use.
      </p>
      <p>
        <strong>Pros:</strong> Lightweight, easy to install and use, lower resource overhead, Rust-based proxy for performance
      </p>
      <p>
        <strong>Cons:</strong> Fewer advanced features compared to Istio, smaller ecosystem
      </p>
      
      <h3>Consul Connect</h3>
      <p>
        HashiCorp's Consul Connect provides service mesh capabilities built on their service discovery platform.
      </p>
      <p>
        <strong>Pros:</strong> Integrates well with other HashiCorp products, works across multiple platforms (not just Kubernetes)
      </p>
      <p>
        <strong>Cons:</strong> Less Kubernetes-native than alternatives, requires Consul as a dependency
      </p>
      
      <h2>Implementation Strategy</h2>
      <p>
        Successfully implementing a service mesh in production requires careful planning. Here's a step-by-step approach:
      </p>
      
      <h3>1. Assessment and Planning</h3>
      <ul>
        <li>Identify your specific requirements (traffic management, security, observability, etc.)</li>
        <li>Evaluate service mesh options based on your needs</li>
        <li>Determine resource requirements and capacity planning</li>
        <li>Define success metrics and monitoring strategy</li>
        <li>Plan for gradual adoption rather than all-at-once implementation</li>
      </ul>
      
      <h3>2. Development and Testing Environment</h3>
      <ul>
        <li>Start with a replica of your production environment</li>
        <li>Install the service mesh following recommended practices</li>
        <li>Test with a subset of your microservices</li>
        <li>Validate that observability tools are working correctly</li>
        <li>Document configuration and troubleshooting procedures</li>
      </ul>
      
      <h3>3. Gradual Production Rollout</h3>
      <ul>
        <li>Start with non-critical services</li>
        <li>Implement a canary deployment approach</li>
        <li>Monitor performance impact closely</li>
        <li>Have a rollback strategy ready</li>
        <li>Gradually expand to more services as confidence builds</li>
      </ul>
      
      <h2>Best Practices for Production Deployments</h2>
      <p>
        Based on our experience implementing service meshes for enterprise clients, we recommend the following best practices:
      </p>
      
      <h3>1. Resource Management</h3>
      <ul>
        <li>Properly size control plane components with appropriate resource requests and limits</li>
        <li>Monitor proxy resource usage and tune accordingly</li>
        <li>Consider using a dedicated node pool for the service mesh control plane</li>
        <li>Implement horizontal pod autoscaling for service mesh components</li>
      </ul>
      
      <h3>2. Security Configuration</h3>
      <ul>
        <li>Enable mutual TLS (mTLS) for service-to-service communication</li>
        <li>Implement network policies in conjunction with the service mesh</li>
        <li>Set up proper access controls for the service mesh control plane</li>
        <li>Regularly update the service mesh to address security vulnerabilities</li>
      </ul>
      
      <h3>3. Observability</h3>
      <ul>
        <li>Integrate service mesh metrics with your existing monitoring platform</li>
        <li>Set up appropriate alerts for service mesh health and performance</li>
        <li>Implement distributed tracing to understand service dependencies</li>
        <li>Create custom dashboards for service mesh visibility</li>
      </ul>
      
      <h2>Common Challenges and Solutions</h2>
      <p>
        Implementing a service mesh in production often comes with challenges. Here are some common issues and solutions:
      </p>
      
      <h3>Challenge: Performance Overhead</h3>
      <p>
        <strong>Solution:</strong> Start with lightweight proxies, tune resource allocation, and consider enabling CNI for Istio to avoid init containers.
      </p>
      
      <h3>Challenge: Complexity in Troubleshooting</h3>
      <p>
        <strong>Solution:</strong> Invest in robust logging and tracing, create troubleshooting playbooks, and ensure teams are properly trained on service mesh concepts.
      </p>
      
      <h3>Challenge: Upgrade Management</h3>
      <p>
        <strong>Solution:</strong> Thoroughly test upgrades in non-production environments, perform canary upgrades, and maintain detailed rollback procedures.
      </p>
      
      <h2>Conclusion</h2>
      <p>
        A service mesh can significantly enhance your Kubernetes platform's capabilities, but successful implementation requires careful planning, gradual adoption, and ongoing operational discipline.
      </p>
      <p>
        At KubeAce, we've helped numerous organizations successfully implement service mesh technologies in their production Kubernetes environments. Our approach focuses on incremental adoption, operational excellence, and aligning the service mesh capabilities with business requirements.
      </p>
      <p>
        If you're considering implementing a service mesh or facing challenges with your current implementation, contact us to learn how we can help.
      </p>
    `,
    slug: 'implementing-service-mesh-in-production-kubernetes',
    tags: ['Service Mesh', 'Kubernetes', 'Istio', 'Linkerd', 'Microservices']
  },
  {
    id: 5,
    title: 'Multi-Cluster Kubernetes Management Strategies',
    description: 'Learn effective approaches for managing multiple Kubernetes clusters across different environments and cloud providers.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    date: '2023-03-15',
    author: 'KubeAce',
    content: `
      <h2>Introduction</h2>
      <p>
        As organizations scale their Kubernetes adoption, managing multiple clusters becomes inevitable. 
        Whether driven by geographic distribution, multi-cloud strategies, or separation of environments, 
        multi-cluster Kubernetes presents unique challenges and opportunities.
      </p>
      <p>
        In this article, we'll explore proven strategies for effectively managing multiple Kubernetes clusters 
        while maintaining operational efficiency.
      </p>
      
      <h2>Why Multiple Kubernetes Clusters?</h2>
      <p>
        Before diving into management strategies, it's worth understanding the common reasons organizations operate multiple clusters:
      </p>
      <ul>
        <li><strong>Environment Separation:</strong> Isolating development, staging, and production environments</li>
        <li><strong>Geographic Distribution:</strong> Placing workloads closer to users in different regions</li>
        <li><strong>Multi-Cloud Strategy:</strong> Avoiding vendor lock-in and optimizing for cloud-specific services</li>
        <li><strong>Tenant Isolation:</strong> Separating workloads for different clients or business units</li>
        <li><strong>Compliance Requirements:</strong> Meeting data residency or industry-specific regulations</li>
        <li><strong>Risk Mitigation:</strong> Limiting the blast radius of potential failures</li>
        <li><strong>Resource Constraints:</strong> Working within the scalability limits of a single cluster</li>
      </ul>
      
      <h2>Key Challenges in Multi-Cluster Management</h2>
      <p>
        Managing multiple Kubernetes clusters introduces several challenges:
      </p>
      <h3>1. Configuration Consistency</h3>
      <p>
        Maintaining consistent configurations across clusters becomes increasingly difficult as the number of clusters grows.
      </p>
      
      <h3>2. Workload Placement</h3>
      <p>
        Deciding which workloads should run on which clusters and ensuring proper distribution.
      </p>
      
      <h3>3. Identity and Access Management</h3>
      <p>
        Managing authentication and authorization across multiple clusters with potentially different providers.
      </p>
      
      <h3>4. Service Discovery and Networking</h3>
      <p>
        Enabling services to discover and communicate with each other across cluster boundaries.
      </p>
      
      <h3>5. Observability and Monitoring</h3>
      <p>
        Aggregating logs, metrics, and traces from multiple clusters into a unified view.
      </p>
      
      <h3>6. Operational Overhead</h3>
      <p>
        Managing the increased complexity of operations, including upgrades, security patching, and troubleshooting.
      </p>
      
      <h2>Multi-Cluster Management Strategies</h2>
      <p>
        Let's explore effective strategies for addressing these challenges:
      </p>
      
      <h3>1. GitOps for Configuration Management</h3>
      <p>
        GitOps provides a solid foundation for managing multiple clusters by:
      </p>
      <ul>
        <li>Storing cluster configurations in Git repositories</li>
        <li>Using a declarative approach to define desired state</li>
        <li>Automating configuration deployment across clusters</li>
        <li>Providing audit trails and simplified rollbacks</li>
      </ul>
      <p>
        Tools like Flux and Argo CD can sync configurations from Git repositories to multiple clusters, 
        ensuring consistency and enabling configuration reuse.
      </p>
      
      <h3>2. Configuration Templates and Overlays</h3>
      <p>
        To handle environment-specific variations while maintaining a common base configuration:
      </p>
      <ul>
        <li>Use Kustomize overlays to manage environment-specific configurations</li>
        <li>Implement Helm charts with values files for different clusters</li>
        <li>Consider tools like Jsonnet or CUELANG for more complex templating needs</li>
      </ul>
      <p>
        This approach allows you to maintain core configuration in one place while accommodating cluster-specific differences.
      </p>
      
      <h3>3. Multi-Cluster Control Planes</h3>
      <p>
        Several tools provide centralized control planes for managing multiple Kubernetes clusters:
      </p>
      <ul>
        <li><strong>Cluster API:</strong> Kubernetes-native way to provision and manage clusters</li>
        <li><strong>Google Anthos:</strong> Multi-cloud Kubernetes platform with centralized management</li>
        <li><strong>Red Hat Advanced Cluster Management:</strong> Provides lifecycle, application, and policy management</li>
        <li><strong>Rancher:</strong> Open-source platform for managing Kubernetes clusters</li>
      </ul>
      <p>
        These platforms provide unified interfaces for managing cluster lifecycles, applying policies, 
        and deploying applications across your fleet.
      </p>
      
      <h3>4. Service Mesh for Cross-Cluster Connectivity</h3>
      <p>
        Service meshes like Istio, Linkerd, and Cilium can be extended to provide cross-cluster service discovery and communication:
      </p>
      <ul>
        <li>Enable service discovery across cluster boundaries</li>
        <li>Provide consistent traffic routing and load balancing</li>
        <li>Implement mTLS for secure cross-cluster communication</li>
        <li>Collect metrics and traces spanning multiple clusters</li>
      </ul>
      
      <h3>5. Unified Observability</h3>
      <p>
        Implementing a unified observability strategy is crucial for multi-cluster environments:
      </p>
      <ul>
        <li>Centralize log collection from all clusters (e.g., using the ELK stack or Loki)</li>
        <li>Aggregate metrics into a unified monitoring system (e.g., Prometheus with Thanos or Cortex)</li>
        <li>Implement distributed tracing with cluster metadata (e.g., Jaeger or Zipkin)</li>
        <li>Use cluster identifiers in all telemetry data</li>
        <li>Create cross-cluster dashboards and alerts</li>
      </ul>
      
      <h3>6. Policy Management</h3>
      <p>
        Enforce consistent policies across all clusters:
      </p>
      <ul>
        <li>Use Open Policy Agent (OPA) or Kyverno for policy enforcement</li>
        <li>Implement policy-as-code practices with version control</li>
        <li>Regularly audit policy compliance across clusters</li>
        <li>Consider policy controllers that work across clusters</li>
      </ul>
      
      <h2>Implementation Patterns</h2>
      <p>
        Based on our experience working with enterprise clients, here are some effective patterns for multi-cluster implementations:
      </p>
      
      <h3>1. Hub and Spoke Model</h3>
      <p>
        In this model, a central "hub" cluster manages multiple "spoke" clusters:
      </p>
      <ul>
        <li>Hub cluster runs management tools and control planes</li>
        <li>Spoke clusters run workloads and report back to the hub</li>
        <li>Centralized management with distributed execution</li>
      </ul>
      
      <h3>2. Federation Model</h3>
      <p>
        In the federation model, clusters maintain more autonomy but share resources and configurations:
      </p>
      <ul>
        <li>Configurations are propagated to member clusters</li>
        <li>Each cluster maintains its own control plane</li>
        <li>Workloads can span multiple clusters when needed</li>
      </ul>
      
      <h3>3. Hybrid Approach</h3>
      <p>
        Many organizations adopt hybrid approaches based on their specific needs:
      </p>
      <ul>
        <li>Centralized management tooling</li>
        <li>Decentralized execution and responsibility</li>
        <li>Standardized baseline with controlled variations</li>
      </ul>
      
      <h2>Case Study: Global Financial Institution</h2>
      <p>
        One of our clients, a global financial institution, successfully implemented a multi-cluster strategy using:
      </p>
      <ul>
        <li>12 regional Kubernetes clusters across 4 cloud providers</li>
        <li>GitOps with Argo CD for configuration management</li>
        <li>Cluster API for cluster lifecycle management</li>
        <li>Istio service mesh for cross-cluster communication</li>
        <li>Thanos for unified metrics collection</li>
        <li>OPA Gatekeeper for policy enforcement</li>
      </ul>
      <p>
        This architecture allowed them to meet regional compliance requirements while maintaining operational efficiency.
      </p>
      
      <h2>Conclusion</h2>
      <p>
        Managing multiple Kubernetes clusters is complex but addressable with the right strategies and tools. 
        By implementing GitOps practices, using configuration templates, leveraging multi-cluster control planes, 
        and ensuring unified observability, organizations can manage Kubernetes at scale effectively.
      </p>
      <p>
        At KubeAce, we help organizations design and implement multi-cluster Kubernetes architectures that balance 
        flexibility, operational efficiency, and security. Contact us to learn more about how we can help with your 
        multi-cluster strategy.
      </p>
    `,
    slug: 'multi-cluster-kubernetes-management-strategies',
    tags: ['Kubernetes', 'Multi-Cluster', 'GitOps', 'Cloud Native']
  },
  {
    id: 9,
    title: 'livekit-deployment-on-vm',
    description: 'Step-by-step guide to install and deploy LiveKit on a virtual machine with TURN server, firewall rules, domain configuration, SSL setup, and debugging tips.',
    image: 'https://plus.unsplash.com/premium_photo-1682129700163-840d28b593c5?q=80&w=3485&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2025-05-20',
    author: 'KubeAce',
    content: `
      <h2>Introduction</h2>
      <p>
        LiveKit provides a scalable, open-source WebRTC stack for building real-time audio/video applications. This guide walks you through setting up a production-ready LiveKit installation on any cloud-agnostic virtual machine. Whether you're on AWS, Azure, GCP, or bare-metal, this tutorial applies universally.
      </p>
  
      <h2>1. Prerequisites</h2>
      <ul>
        <li>A Linux VM (Ubuntu 22.04 recommended)</li>
        <li>Root/sudo access</li>
        <li>DNS and domain name</li>
      </ul>
  
      <h2>2. Firewall Configuration</h2>
      <p>
        Open the following ports to allow WebRTC and API traffic:
      </p>
      <ul>
        <li><code>80</code> – HTTP (for Let's Encrypt challenge)</li>
        <li><code>443</code> – HTTPS (API + TURN TLS)</li>
        <li><code>5349</code> – TURN over TLS (recommended)</li>
        <li><code>50000-60000/UDP</code> – Media traffic (configurable)</li>
      </ul>
      <pre><code>
  sudo ufw allow 80,443,5349/tcp
  sudo ufw allow 50000:60000/udp
  sudo ufw enable
      </code></pre>
  
      <h2>3. Domain Setup & SSL</h2>
      <p>
        Point a domain (e.g., <code>livekit.yourdomain.com</code>) to your VM’s public IP. Use Let's Encrypt for SSL:
      </p>
      <pre><code>
  sudo apt install certbot
  sudo certbot certonly --standalone -d livekit.yourdomain.com
      </code></pre>
      <p>This generates certificates in <code>/etc/letsencrypt/live/livekit.yourdomain.com/</code>.</p>
  
      <h2>4. TURN Server Deployment</h2>
      <p>
        TURN is required for NAT traversal. You can install Coturn:
      </p>
      <pre><code>
  sudo apt install coturn
  sudo nano /etc/turnserver.conf
      </code></pre>
      <p>Basic config:</p>
      <pre><code>
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
      </code></pre>
      <pre><code>
  sudo systemctl enable coturn
  sudo systemctl start coturn
      </code></pre>
  
      <h2>5. LiveKit Installation</h2>
      <p>
        Download and install the LiveKit server:
      </p>
      <pre><code>
  curl -L https://github.com/livekit/livekit/releases/latest/download/livekit-server-linux-amd64 \
    -o livekit-server && chmod +x livekit-server
      </code></pre>
  
      <h3>Configuration</h3>
      <p>Create <code>livekit.yaml</code>:</p>
      <pre><code>
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
      </code></pre>
  
      <p>Run the server:</p>
      <pre><code>
  ./livekit-server --config livekit.yaml
      </code></pre>
  
      <h2>6. Sample Management Commands</h2>
      <p>
        Once deployed, you can use the <code>lk</code> CLI to manage LiveKit.
      </p>
      <pre><code>
  curl -sSL https://get.livekit.io/cli | bash
  
  lk room list --api-key your_api_key --api-secret your_api_secret --url https://livekit.yourdomain.com
  
  lk room delete myroom
  lk egress list
      </code></pre>
  
      <h2>7. Debugging and Logs</h2>
      <ul>
        <li>LiveKit server logs to stdout – run it via <code>tmux</code> or a service manager.</li>
        <li>To view logs:</li>
      </ul>
      <pre><code>
  journalctl -u livekit.service -f
      </code></pre>
      <p>
        If using systemd, create a unit file <code>/etc/systemd/system/livekit.service</code>:
      </p>
      <pre><code>
  [Unit]
  Description=LiveKit Server
  After=network.target
  
  [Service]
  ExecStart=/usr/local/bin/livekit-server --config /etc/livekit.yaml
  Restart=on-failure
  
  [Install]
  WantedBy=multi-user.target
      </code></pre>
  
      <h2>Conclusion</h2>
      <p>
        With this setup, you now have a robust, production-ready LiveKit server running on any cloud or bare-metal VM. You've configured SSL, TURN, firewall, and a management interface. LiveKit empowers developers to create low-latency, real-time communication platforms — fully under their control.
      </p>
  
      <h3>KubeAce Support</h3>
      <p>
        At <strong>KubeAce</strong>, we help businesses build scalable video infrastructure using LiveKit, WebRTC, and Kubernetes. Need assistance setting up monitoring, autoscaling, or integrating LiveKit into your application? Reach out to us!
      </p>
      <p>
        Contact us at <a href="mailto:info@kubeace.com">info@kubeace.com</a> or visit <a href="https://kubeace.com">kubeace.com</a>.
      </p>
    `,
    slug: 'livekit-deployment-on-vm',
    tags: ['LiveKit', 'WebRTC', 'Deployment', 'TURN', 'SSL', 'Cloud Agnostic', 'Media Infrastructure']
  },
  {
    id: 10,
    title: 'livekit-kubernetes-helm-deployment',
    description: 'Comprehensive guide to deploying LiveKit on Kubernetes using the official Helm chart with TURN, ingress, domain and SSL configuration.',
    image: 'https://media.istockphoto.com/id/1190454345/photo/board-meeting-in-conference-room.jpg?s=1024x1024&w=is&k=20&c=KWcKKHHq1ZFGUWUqnOli80AzfHX1c26MNMU5QG9Luxs=',
    date: '2025-05-20',
    author: 'KubeAce',
    content: `
      <h2>Introduction</h2>
      <p>
        Deploying LiveKit on Kubernetes provides a scalable and production-grade infrastructure for real-time audio/video communications. This tutorial walks through installing LiveKit using the official Helm chart on any cloud or bare-metal Kubernetes cluster, including TURN server setup, domain and SSL configuration, ingress, autoscaling, and monitoring basics.
      </p>
  
      <h2>1. Prerequisites</h2>
      <ul>
        <li>A working Kubernetes cluster (k8s v1.24+ recommended)</li>
        <li>kubectl and Helm installed</li>
        <li>A domain name pointing to your cluster (via LoadBalancer or Ingress)</li>
        <li>Cert-Manager for automatic SSL</li>
      </ul>
  
      <h2>2. Install Cert-Manager (for SSL)</h2>
      <pre><code>
  kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml
      </code></pre>
  
      <h2>3. Clone the LiveKit Helm Chart</h2>
      <pre><code>
  git clone https://github.com/livekit/livekit-helm.git
  cd livekit-helm
      </code></pre>
  
      <h2>4. Set up Namespace</h2>
      <pre><code>
  kubectl create namespace livekit
      </code></pre>
  
      <h2>5. Configure values.yaml</h2>
      <p>Edit <code>values.yaml</code> with your production configuration. Key sections:</p>
  
      <h3>⚙️ App Configuration</h3>
      <pre><code>
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
      </code></pre>
  
      <h3>🌐 Ingress Setup (Optional)</h3>
      <p>Enable ingress to expose LiveKit securely with a domain:</p>
      <pre><code>
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
      </code></pre>
  
      <h2>6. Deploy the Chart</h2>
      <pre><code>
  helm install livekit . -n livekit -f values.yaml
      </code></pre>
  
      <h2>7. TURN Server Options</h2>
      <p>The Helm chart supports bundling TURN via coturn. If you'd like a standalone TURN, deploy it separately and point LiveKit’s <code>turn</code> section to it.</p>
  
      <h2>8. Expose via LoadBalancer (if not using Ingress)</h2>
      <p>
        For non-ingress-based setups, you can expose the service with a LoadBalancer:
      </p>
      <pre><code>
  kubectl edit svc livekit -n livekit
  # Change service type to LoadBalancer
      </code></pre>
      <p>Update your DNS A record to point to the LoadBalancer's IP.</p>
  
      <h2>9. TLS with Let's Encrypt</h2>
      <p>
        Ensure your Cert-Manager is set up with an issuer. Example issuer:
      </p>
      <pre><code>
  apiVersion: cert-manager.io/v1
  kind: ClusterIssuer
  metadata:
    name: letsencrypt-prod
  spec:
    acme:
      server: https://acme-v02.api.letsencrypt.org/directory
      email: your@email.com
      privateKeySecretRef:
        name: letsencrypt-prod
      solvers:
        - http01:
            ingress:
              class: nginx
      </code></pre>
  
      <h2>10. Autoscaling and Resource Management</h2>
      <pre><code>
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
      </code></pre>
  
      <h2>11. Monitoring (Optional)</h2>
      <ul>
        <li>Enable Prometheus metrics by setting <code>enable_metrics: true</code>.</li>
        <li>Install a Prometheus/Grafana stack.</li>
        <li>Scrape <code>/metrics</code> endpoint exposed by LiveKit pods.</li>
      </ul>
  
      <h2>12. LiveKit CLI (for remote access)</h2>
      <pre><code>
  curl -sSL https://get.livekit.io/cli | bash
  
  lk room list --api-key your_api_key --api-secret your_api_secret --url https://livekit.yourdomain.com
  
  lk egress list
      </code></pre>
  
      <h2>13. Cleanup</h2>
      <pre><code>
  helm uninstall livekit -n livekit
  kubectl delete ns livekit
      </code></pre>
  
      <h2>Conclusion</h2>
      <p>
        Deploying LiveKit using the official Helm chart gives you powerful, scalable infrastructure for real-time applications with minimal manual overhead. This setup supports autoscaling, TLS, TURN, and observability—production ready out of the box.
      </p>
  
      <h3>KubeAce Can Help</h3>
      <p>
        KubeAce helps companies build high-performance WebRTC infrastructures with LiveKit, Kubernetes, and DevOps best practices. We provide full-stack support from installation to autoscaling, CI/CD, TURN hardening, observability, and HA deployment.
      </p>
      <p>
        Contact us at <a href="mailto:info@kubeace.com">info@kubeace.com</a> or visit <a href="https://kubeace.com">kubeace.com</a>.
      </p>
    `,
    slug: 'livekit-kubernetes-deployment',
    tags: ['LiveKit', 'Kubernetes', 'Helm', 'TURN', 'SSL', 'WebRTC', 'Ingress', 'Production Deployment']
  }
];
