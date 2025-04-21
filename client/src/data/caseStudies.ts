import { type CaseStudy } from '@shared/schema';

export const caseStudies: CaseStudy[] = [
  {
    id: 6,
    title: 'Video Conferencing Agents & AI Integration Using LiveKit',
    industry: 'Telehealth',
    description: 'Designed and built a scalable telehealth platform integrating human agents, AI automation, and real-time video communication to handle thousands of daily consultations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    tags: ['LiveKit', 'WebRTC', 'AI Integration', 'Telehealth', 'Kubernetes'],
    slug: 'video-conferencing-agents-ai-integration',
    content: `
      <h2>Client Background</h2>
      <p>
        A rapidly growing telehealth startup that connects patients with health professionals across regions. They wanted to scale to thousands of consultations per day while integrating AI-driven assistance and automating triage tasks using real-time video conferencing.
      </p>
      
      <h2>Objective</h2>
      <p>
        To build a scalable and interactive video conferencing platform that:
      </p>
      <ul>
        <li>Connects users to live agents (health professionals)</li>
        <li>Integrates AI for pre-consultation triage and live transcription</li>
        <li>Handles 5000+ concurrent sessions and 450,000 sessions per day</li>
        <li>Supports dynamic agent routing, session recording, and metrics tracking</li>
      </ul>
      
      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Video Conferencing:</strong> LiveKit (self-hosted)</li>
        <li><strong>Frontend:</strong> React.js + TailwindCSS</li>
        <li><strong>Backend:</strong> Node.js + Express</li>
        <li><strong>AI Integration:</strong> OpenAI / Vertex AI for NLP & Triage</li>
        <li><strong>Voice-to-Text:</strong> Whisper (OpenAI) or Deepgram</li>
        <li><strong>Authentication:</strong> Auth0 / Firebase Auth</li>
        <li><strong>Monitoring:</strong> Grafana + Prometheus + Loki</li>
        <li><strong>Infrastructure:</strong> Kubernetes (EKS), Redis, PostgreSQL</li>
        <li><strong>CI/CD:</strong> GitHub Actions + ArgoCD</li>
      </ul>
      
      <h2>Architecture Overview</h2>
      
      <h3>1. User Onboarding & Agent Matching</h3>
      <p>
        Users initiate a request via the frontend application. The backend triggers matchmaking to assign the right agent based on availability, specialization, and load.
      </p>
      
      <h3>2. AI-Powered Pre-Session</h3>
      <p>
        Before connecting to an agent, an AI triage bot gathers initial information. The AI summarizes symptoms or queries, which are then passed to the agent for context.
      </p>
      
      <h3>3. LiveKit Room Initialization</h3>
      <p>
        A new LiveKit room is created dynamically. Both agent and user join via unique tokens. Optionally, an AI assistant joins silently to transcribe and summarize in real-time.
      </p>
      
      <h3>4. Session Features</h3>
      <ul>
        <li>Real-time transcription and summarization</li>
        <li>Recording & compliance logging</li>
        <li>On-screen tools for drawing, file sharing, and chat</li>
        <li>AI nudges for the agent ("Suggest asking about past medication," etc.)</li>
      </ul>
      
      <h3>5. Post-Session Automation</h3>
      <ul>
        <li>AI generates a session summary</li>
        <li>Stores data securely in a HIPAA-compliant database</li>
        <li>Feedback forms and follow-up scheduling</li>
      </ul>
      
      <h2>Key Achievements</h2>
      
      <table class="border-collapse border border-gray-300 w-full mb-8">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 p-3 text-left">Metric</th>
            <th class="border border-gray-300 p-3 text-left">Before</th>
            <th class="border border-gray-300 p-3 text-left">After</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Concurrent Sessions</td>
            <td class="border border-gray-300 p-3">500</td>
            <td class="border border-gray-300 p-3"><strong>5,000+</strong></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Daily Sessions</td>
            <td class="border border-gray-300 p-3">~25,000</td>
            <td class="border border-gray-300 p-3"><strong>450,000</strong></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Avg. Wait Time</td>
            <td class="border border-gray-300 p-3">~4 mins</td>
            <td class="border border-gray-300 p-3"><strong>< 30 seconds</strong></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Agent Efficiency</td>
            <td class="border border-gray-300 p-3">—</td>
            <td class="border border-gray-300 p-3"><strong>+37% via AI pre-triage</strong></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Session Logs/Transcripts</td>
            <td class="border border-gray-300 p-3">Manual</td>
            <td class="border border-gray-300 p-3"><strong>Fully Automated</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h2>AI Integration Highlights</h2>
      <ul>
        <li><strong>Pre-session triage</strong> reduced agent time by ~40%</li>
        <li><strong>Live transcription</strong> increased accuracy for records</li>
        <li><strong>AI co-pilot for agents</strong> suggested follow-up questions in real-time</li>
        <li><strong>Smart session summarizer</strong> helped with legal documentation</li>
      </ul>
      
      <h2>Challenges & Solutions</h2>
      
      <table class="border-collapse border border-gray-300 w-full mb-8">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 p-3 text-left">Challenge</th>
            <th class="border border-gray-300 p-3 text-left">Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Session scale-out under heavy load</td>
            <td class="border border-gray-300 p-3">Auto-scaling LiveKit nodes using Karpenter on EKS</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">AI delays during triage</td>
            <td class="border border-gray-300 p-3">Batched processing and caching frequent responses</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Handling low-bandwidth users</td>
            <td class="border border-gray-300 p-3">Dynamic video quality adjustment using LiveKit's simulcast</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Session routing latency</td>
            <td class="border border-gray-300 p-3">Redis-based distributed queue for agent availability</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Outcome</h2>
      <p>
        The platform was able to handle high-volume video calls with minimal latency, reduced operational costs through AI automation, and significantly enhanced the end-user experience with contextual, real-time AI support.
      </p>
      
      <blockquote>
        "KubeAce's telehealth platform implementation has transformed our operations. The seamless integration of AI with human agents allows us to scale in ways we never thought possible, while actually improving the quality of care. Their expertise in both cloud infrastructure and video technology was invaluable."
        <cite>— CTO, Telehealth Startup</cite>
      </blockquote>
      
      <h2>Next Steps</h2>
      <ul>
        <li>Multilingual AI support</li>
        <li>SIP integration for PSTN calls</li>
        <li>Predictive agent routing using ML</li>
        <li>Auto-summarized EHR entries post-session</li>
      </ul>
    `
  },
  {
    id: 1,
    title: 'Building Video Conferencing Application for Music Learning',
    industry: 'Education Technology',
    description: 'Developed a specialized video conferencing platform for a music education company, enabling high-quality audio, instrument visualization, and interactive learning features.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    tags: ['WebRTC', 'LiveKit', 'Real-time Audio', 'Education'],
    slug: 'music-learning-videoconferencing',
    content: `
      <h2>Challenge</h2>
      <p>
        A leading online music education platform approached KubeAce with a critical challenge: their existing third-party video conferencing solution was inadequate for music instruction due to:
      </p>
      <ul>
        <li>Poor audio quality that distorted musical tones and instrument sounds</li>
        <li>Latency issues that made real-time instruction nearly impossible</li>
        <li>Lack of specialized features for music visualization and annotation</li>
        <li>Limited scalability during peak class times</li>
        <li>High licensing costs that threatened the company's unit economics</li>
      </ul>
      
      <h2>Solution</h2>
      <p>
        KubeAce designed and developed a custom WebRTC-based video conferencing platform specifically optimized for music education:
      </p>
      <ol>
        <li>
          <strong>High-fidelity Audio:</strong> Implemented specialized audio processing with configurable noise cancellation that preserved instrument tones while eliminating background noise.
        </li>
        <li>
          <strong>Low-latency Architecture:</strong> Built on LiveKit with a globally distributed server infrastructure to minimize latency between instructors and students.
        </li>
        <li>
          <strong>Music-specific Features:</strong> Developed custom components for sheet music sharing, notation overlay, virtual piano visualization, and real-time feedback tools.
        </li>
        <li>
          <strong>Recording & Playback:</strong> Created high-quality lesson recording with multi-track capabilities for separate audio channels (voice, instrument).
        </li>
        <li>
          <strong>Kubernetes Deployment:</strong> Implemented an auto-scaling Kubernetes infrastructure that efficiently handled varying loads throughout the day.
        </li>
      </ol>
      
      <h2>Results</h2>
      <p>
        The custom video conferencing solution transformed the client's online music education experience:
      </p>
      <ul>
        <li>Audio quality rated <strong>95% better</strong> than previous solution in blind tests</li>
        <li>Average lesson latency reduced from 500ms to <strong>under 100ms</strong></li>
        <li>Instructor satisfaction increased by <strong>87%</strong> due to specialized teaching tools</li>
        <li><strong>32% increase</strong> in student retention attributed to improved lesson quality</li>
        <li><strong>60% reduction</strong> in infrastructure costs compared to previous commercial solution</li>
        <li>Platform successfully scaled to support <strong>3,000+ concurrent lessons</strong> during peak hours</li>
      </ul>
      
      <blockquote>
        "KubeAce's custom video conferencing platform has completely transformed our online music instruction. For the first time, we can offer a truly immersive learning experience that preserves the subtle nuances of musical performance. The technical expertise they brought to this project was exceptional."
        <cite>— Director of Technology, Music Education Platform</cite>
      </blockquote>
    `
  },
  {
    id: 2,
    title: 'SOC Audit Successful Completion for a Global Payment Interface',
    industry: 'Financial Services',
    description: 'Successfully guided a global payment interface provider through SOC 2 Type II compliance, implementing robust security controls and automated compliance monitoring for handling sensitive financial transactions.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    tags: ['Security', 'Compliance', 'SOC 2', 'Fintech', 'Payments'],
    slug: 'soc-audit-global-payment',
    content: `
      <h2>Challenge</h2>
      <p>
        A rapidly growing global payment interface provider needed to achieve SOC 2 Type II compliance to secure enterprise clients and protect sensitive financial transaction data. They faced several critical challenges:
      </p>
      <ul>
        <li>Complex infrastructure spread across multiple cloud environments</li>
        <li>Lack of standardized security controls and documentation</li>
        <li>Manual processes for security monitoring and incident response</li>
        <li>Insufficient evidence collection for compliance verification</li>
        <li>Limited internal expertise in SOC 2 requirements</li>
        <li>Tight timeline of six months to complete the audit</li>
      </ul>
      
      <h2>Solution</h2>
      <p>
        KubeAce implemented a comprehensive security and compliance program:
      </p>
      <ol>
        <li>
          <strong>Gap Analysis:</strong> Conducted a thorough assessment against SOC 2 controls, identifying key areas for remediation.
        </li>
        <li>
          <strong>Security Infrastructure:</strong> Implemented a Kubernetes-based security architecture with centralized authentication, encryption, and network segmentation.
        </li>
        <li>
          <strong>Automated Compliance:</strong> Deployed infrastructure-as-code with built-in compliance checks and continuous validation through Open Policy Agent.
        </li>
        <li>
          <strong>Monitoring & Alerting:</strong> Implemented comprehensive security monitoring with automated alerting and response procedures.
        </li>
        <li>
          <strong>Evidence Collection:</strong> Created automated systems for gathering compliance evidence, generating audit trails, and producing documentation.
        </li>
        <li>
          <strong>Process Development:</strong> Established formal security policies, procedures, and training programs for all employees.
        </li>
      </ol>
      
      <h2>Results</h2>
      <p>
        The engagement delivered exceptional results for the client:
      </p>
      <ul>
        <li>Successfully achieved SOC 2 Type II certification <strong>two months ahead of schedule</strong></li>
        <li>Passed the audit with <strong>zero exceptions</strong> across all trust service criteria</li>
        <li><strong>90% reduction</strong> in time spent on compliance-related activities through automation</li>
        <li>Secured <strong>three enterprise clients</strong> worth $4.2M in annual recurring revenue immediately following certification</li>
        <li>Enhanced security posture led to <strong>zero security incidents</strong> during the observation period</li>
        <li>Created a sustainable compliance program that easily adapts to evolving requirements</li>
      </ul>
      
      <blockquote>
        "KubeAce didn't just help us check boxes for compliance; they transformed our entire approach to security. Their expertise in both financial regulatory requirements and cloud-native technologies allowed us to build security and compliance into our DNA, giving our customers absolute confidence in our payment processing platform."
        <cite>— CISO, Global Payment Interface Provider</cite>
      </blockquote>
    `
  },
  {
    id: 3,
    title: 'Cost Optimization on Azure Cloud',
    industry: 'Financial Services',
    description: 'Reduced a fintech company\'s Azure cloud spend by 42% while improving performance through architecture optimization, right-sizing, and implementing FinOps practices.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    tags: ['Cost Optimization', 'Azure', 'FinOps', 'Cloud Architecture'],
    slug: 'azure-cost-optimization',
    content: `
      <h2>Challenge</h2>
      <p>
        A fast-growing fintech company had rapidly migrated to Azure to support their expansion, but was facing significant challenges with their cloud spend:
      </p>
      <ul>
        <li>Monthly Azure costs had increased by 300% in just one year</li>
        <li>No clear visibility into which resources were driving cost increases</li>
        <li>Over-provisioned resources that were severely underutilized</li>
        <li>Lack of governance around resource creation and scaling</li>
        <li>Development environments running 24/7 unnecessarily</li>
        <li>Inefficient database usage patterns causing excessive I/O costs</li>
      </ul>
      
      <h2>Solution</h2>
      <p>
        KubeAce implemented a comprehensive Azure cost optimization program:
      </p>
      <ol>
        <li>
          <strong>Cost Analysis:</strong> Performed detailed analysis of the Azure environment using Azure Cost Management, Azure Advisor, and custom tooling to identify optimization opportunities.
        </li>
        <li>
          <strong>Resource Right-sizing:</strong> Analyzed VM and database utilization patterns to right-size resources based on actual usage.
        </li>
        <li>
          <strong>Architectural Improvements:</strong> Refactored key workloads to use PaaS services instead of IaaS where appropriate, and implemented serverless architectures for suitable workloads.
        </li>
        <li>
          <strong>Reserved Instances & Savings Plans:</strong> Implemented a strategic mix of reserved instances and savings plans for predictable workloads.
        </li>
        <li>
          <strong>Environment Management:</strong> Automated the shutdown of non-production environments during off-hours.
        </li>
        <li>
          <strong>FinOps Practice:</strong> Established a FinOps practice with tagging policies, budget alerts, and cost allocation to business units.
        </li>
      </ol>
      
      <h2>Results</h2>
      <p>
        The cost optimization initiative delivered significant financial and operational benefits:
      </p>
      <ul>
        <li><strong>42% reduction</strong> in overall Azure cloud spend within three months</li>
        <li>Annual savings of <strong>over $870,000</strong> without sacrificing performance or reliability</li>
        <li><strong>67% improvement</strong> in application performance through architecture optimization</li>
        <li>Development environment costs reduced by <strong>78%</strong> through automated scheduling</li>
        <li>Implementation of a sustainable FinOps culture with <strong>98% resource tagging compliance</strong></li>
        <li>Improved forecasting accuracy with cloud spend predictions within <strong>3% of actual costs</strong></li>
      </ul>
      
      <blockquote>
        "KubeAce's Azure cost optimization engagement paid for itself in the first month. More impressively, they managed to substantially reduce our cloud spend while actually improving our system performance. Their FinOps implementation has given us complete visibility and control over our cloud costs for the first time."
        <cite>— CFO, Fintech Company</cite>
      </blockquote>
    `
  },
  {
    id: 4,
    title: 'Kubernetes Cost Optimization',
    industry: 'SaaS',
    description: 'Optimized a SaaS provider\'s Kubernetes infrastructure, reducing cluster costs by 58% while improving reliability and performance.',
    image: 'https://devtron.ai/blog/content/images/size/w1750/2024/12/Group-3183944.png',
    tags: ['Kubernetes', 'Cost Optimization', 'Resource Management', 'Cloud Native'],
    slug: 'kubernetes-cost-optimization',
    content: `
      <h2>Challenge</h2>
      <p>
        A B2B SaaS provider with a large-scale Kubernetes deployment was experiencing rapidly escalating infrastructure costs that were eroding their margins:
      </p>
      <ul>
        <li>Kubernetes clusters were significantly overprovisioned, with average node utilization below 30%</li>
        <li>Resource requests substantially exceeded actual usage across most workloads</li>
        <li>No implementation of autoscaling at either the cluster or pod level</li>
        <li>Storage costs increasing exponentially due to improper PVC management</li>
        <li>Premium node types being used for non-critical workloads</li>
        <li>Test and development environments configured identically to production</li>
      </ul>
      
      <h2>Solution</h2>
      <p>
        KubeAce implemented a comprehensive Kubernetes cost optimization strategy:
      </p>
      <ol>
        <li>
          <strong>Workload Analysis:</strong> Used Prometheus and custom tooling to gather detailed metrics on actual resource usage patterns across all deployments.
        </li>
        <li>
          <strong>Right-sizing Workloads:</strong> Adjusted CPU and memory requests/limits based on actual usage data, implementing Vertical Pod Autoscaler where appropriate.
        </li>
        <li>
          <strong>Cluster Optimization:</strong> Implemented node auto-provisioning and Cluster Autoscaler to dynamically adjust cluster size based on demand.
        </li>
        <li>
          <strong>Node Optimization:</strong> Created node pools with diverse instance types optimized for specific workload profiles (compute-optimized, memory-optimized, etc.).
        </li>
        <li>
          <strong>Storage Optimization:</strong> Implemented lifecycle policies for PVCs, moved appropriate data to lower-cost storage classes, and implemented compression.
        </li>
        <li>
          <strong>Environment Standardization:</strong> Created right-sized templates for different environment types with appropriate resource constraints.
        </li>
      </ol>
      
      <h2>Results</h2>
      <p>
        The Kubernetes optimization project delivered exceptional value:
      </p>
      <ul>
        <li><strong>58% reduction</strong> in monthly Kubernetes infrastructure costs</li>
        <li>Average node utilization improved from 30% to <strong>76%</strong></li>
        <li><strong>40% improvement</strong> in application start-up times due to more efficient resource allocation</li>
        <li>Storage costs reduced by <strong>64%</strong> through proper PVC management and storage class optimization</li>
        <li>Autoscaling implementation resulted in <strong>zero downtime events</strong> during traffic spikes</li>
        <li>Established a sustainable cost monitoring system with automated reporting and forecasting</li>
      </ul>
      
      <blockquote>
        "The KubeAce team demonstrated remarkable expertise in Kubernetes cost optimization. They not only dramatically reduced our infrastructure spend but created a sustainable system that continues to optimize costs automatically as our workloads evolve. Most impressively, they achieved this while improving our platform's performance and reliability."
        <cite>— VP of Engineering, SaaS Provider</cite>
      </blockquote>
    `
  },
  {
    id: 5,
    title: 'Migration from Lambda Functions to Kubernetes (GKE)',
    industry: 'E-commerce',
    description: 'Successfully migrated a complex serverless architecture from AWS Lambda to Google Kubernetes Engine, improving performance and reducing operational costs by 47%.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    tags: ['Kubernetes', 'Migration', 'GKE', 'Serverless', 'AWS Lambda'],
    slug: 'lambda-to-kubernetes-migration',
    content: `
      <h2>Challenge</h2>
      <p>
        A growing e-commerce platform had initially built their backend on AWS Lambda but was facing significant challenges with their serverless architecture:
      </p>
      <ul>
        <li>Unpredictable and escalating costs during traffic spikes</li>
        <li>Cold start latency issues impacting customer experience</li>
        <li>Limitations in processing larger transactions due to Lambda timeout constraints</li>
        <li>Complex orchestration of numerous Lambda functions leading to maintenance difficulties</li>
        <li>Data transfer costs between Lambda functions and other AWS services</li>
        <li>Difficulty implementing certain architectural patterns within Lambda's constraints</li>
      </ul>
      
      <h2>Solution</h2>
      <p>
        KubeAce designed and executed a strategic migration from AWS Lambda to Google Kubernetes Engine (GKE):
      </p>
      <ol>
        <li>
          <strong>Architecture Assessment:</strong> Mapped all Lambda functions and their interactions, identifying service boundaries and dependencies.
        </li>
        <li>
          <strong>Containerization Strategy:</strong> Converted Lambda functions into containerized microservices, grouping related functions where appropriate.
        </li>
        <li>
          <strong>GKE Infrastructure:</strong> Implemented a production-ready GKE environment with regional clusters, node auto-provisioning, and preemptible instances.
        </li>
        <li>
          <strong>Knative Implementation:</strong> Used Knative for serverless-like capabilities within Kubernetes, enabling scale-to-zero and request-based scaling.
        </li>
        <li>
          <strong>Phased Migration:</strong> Executed a staged migration approach with parallel running systems and traffic shifting to minimize risk.
        </li>
        <li>
          <strong>Monitoring & Optimization:</strong> Implemented comprehensive observability with Prometheus, Grafana, and Google Cloud Monitoring.
        </li>
      </ol>
      
      <h2>Results</h2>
      <p>
        The migration delivered significant technical and business benefits:
      </p>
      <ul>
        <li><strong>47% reduction</strong> in monthly infrastructure costs</li>
        <li>Average API latency reduced by <strong>62%</strong>, eliminating cold start issues</li>
        <li><strong>Zero downtime</strong> achieved during the migration process</li>
        <li>Processing capacity increased by <strong>300%</strong> for complex transactions</li>
        <li>Development velocity improved with <strong>35% faster</strong> feature delivery</li>
        <li>Enhanced architectural flexibility enabled new capabilities that weren't possible with Lambda</li>
        <li>Simplified operational model with a unified Kubernetes platform</li>
      </ul>
      
      <blockquote>
        "Moving from Lambda to GKE was a strategic decision that transformed our business. KubeAce's methodical approach to the migration gave us confidence throughout the process, and the results have exceeded our expectations. We now have a platform that gives us both the elasticity we need and the cost control our business requires."
        <cite>— CTO, E-commerce Platform</cite>
      </blockquote>
    `
  }
];
