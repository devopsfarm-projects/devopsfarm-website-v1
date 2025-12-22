import { GitBranch, Activity, Cloud, ShieldCheck, Cpu, DollarSign } from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'devops-engineering',
    title: 'Platform Engineering & IDP',
    description: 'Stop building tickets. Start building products. We engineer Internal Developer Platforms (IDP) that pave the road to production.',
    icon: GitBranch,
    details: [
      "Backstage & IDP Implementation",
      "Enterprise GitOps (ArgoCD)",
      "Infrastructure as Code Governance",
      "Progressive Delivery Pipelines"
    ],
    fullContent: {
      longDescription: `In high-performing organizations, "DevOps" isn't a job title—it's a platform capability. We help you transition from traditional ops teams drowning in tickets to a Platform Engineering model.
      
      We build Internal Developer Platforms (IDPs) that abstract the complexity of Kubernetes and cloud infrastructure, offering developers a self-service "Golden Path" to ship code. By treating your infrastructure as a product, we reduce cognitive load, enforce governance automatically, and unlock true developer velocity.`,
      secondaryHeadline: "The Platform as a Product",
      secondaryDescription: `We don't just script pipelines; we architect ecosystems. Your developers shouldn't need a PhD in Kubernetes to deploy a microservice.
      
      Our IDP solutions integrate everything—scaffolding, docs, catalog, and deployment—into a single pane of glass, powered by robust GitOps workflows under the hood.`,
      subServices: [
        {
          id: "idp-implementation",
          title: "Internal Developer Platforms (IDP)",
          description: "Build a self-service portal using Backstage or Port that treats developers as customers.",
          features: ["Service Catalog", "Scaffolding Templates", "TechDocs", "Scorecards"],
          fullContent: {
            longDescription: `The cognitive load on modern developers is too high. We implement Internal Developer Platforms (IDPs) that serve as the interface to your infrastructure. Using Backstage or Port, we create a unified portal where developers can scaffold new services from approved templates, view documentation, check service health, and manage deployments—all without sending a Jira ticket to Ops.`,
            kpis: [
                { value: "90%", label: "Reduction in Onboarding Time" },
                { value: "0", label: "Tickets to Provision Infra" },
                { value: "100%", label: "Service Catalog Coverage" }
            ],
            process: [
                { title: "Developer Experience Audit", desc: "We interview your product teams to identify friction points in the current SDLC." },
                { title: "Golden Path Design", desc: "We define standardized templates for your most common workloads (e.g., Spring Boot Service, React App)." },
                { title: "Portal Implementation", desc: "We deploy and configure Backstage/Port, integrating it with your CI/CD, K8s, and Cloud." },
                { title: "Plugin Development", desc: "We build custom plugins to visualize your specific business logic or metrics within the portal." }
            ],
            deliverables: [
                "Production-ready Backstage/Port Instance",
                "Library of Software Templates",
                "Service Catalog Population",
                "TechDocs Implementation"
            ],
            techStack: ["Backstage", "Port", "Roadie", "React", "TypeScript", "Kubernetes"],
            benefits: [
              { title: "Standardization by Default", desc: "Every new service starts with best-practices baked in (logging, linting, security)." },
              { title: "Discoverability", desc: "A searchable catalog of all software assets, ownership, and dependencies." },
              { title: "Self-Service Velocity", desc: "Developers provision resources instantly within guardrails you define." }
            ],
            faqs: [
              { question: "Why Backstage?", answer: "It's the open-source standard for IDPs, highly extensible, and backed by Spotify/CNCF." },
              { question: "Do small teams need this?", answer: "Once you cross ~20 developers or ~50 microservices, an IDP becomes critical for maintaining velocity." }
            ]
          }
        },
        {
          id: "enterprise-gitops",
          title: "Enterprise GitOps",
          description: "Declarative continuous delivery at scale using ArgoCD or Flux for multi-cluster management.",
          features: ["Drift Detection", "Multi-Cluster Sync", "AppSets/Generators", "RBAC Integration"],
          fullContent: {
            longDescription: `GitOps is the operating model for cloud-native. We implement ArgoCD or Flux to make Git the single source of truth for your entire infrastructure state. This enables "ClickOps"-free management where changes are auditable Pull Requests, and the cluster automatically syncs to the desired state. We architect for scale, using ApplicationSets to manage deployments across hundreds of clusters and environments.`,
            kpis: [
                { value: "< 1m", label: "Time to Sync" },
                { value: "100%", label: "Configuration Auditability" },
                { value: "0", label: "Manual Cluster Edits" }
            ],
            process: [
                { title: "Repo Strategy", desc: "Designing a scalable Git repository structure (monorepo vs polyrepo) for manifests." },
                { title: "Controller Deployment", desc: "Installing and tuning ArgoCD/Flux in a control plane configuration." },
                { title: "Secret Management", desc: "Integrating Sealed Secrets, SOPS, or External Secrets Operator for safe Git storage." },
                { title: "Promotion Workflow", desc: "Building CI automation to promote image tags from Dev -> Staging -> Prod via PRs." }
            ],
            deliverables: [
                "GitOps Controller Architecture",
                "Helm/Kustomize Pattern Library",
                "Automated Drift Correction",
                "RBAC Configuration"
            ],
            techStack: ["ArgoCD", "Flux v2", "Helm", "Kustomize", "GitHub Actions", "GitLab CI"],
            benefits: [
              { title: "Disaster Recovery", desc: "Restore an entire cluster in minutes by simply pointing a new cluster to the Git repo." },
              { title: "Security", desc: "No developer needs `kubectl write` access to production. The CI/CD system handles it." },
              { title: "Visibility", desc: "A clear visual dashboard (ArgoCD) showing exactly what is running where and its health." }
            ]
          }
        },
        {
          id: "infrastructure-as-code",
          title: "Infrastructure as Code (IaC)",
          description: "Modular, testable, and idempotent infrastructure definitions using Terraform or OpenTofu.",
          features: ["Module Ecosystem", "Policy as Code", "State Management", "Drift Remediation"],
          fullContent: {
            longDescription: `We treat infrastructure code with the same rigor as application code. We build composable, versioned Terraform/OpenTofu modules that allow you to spin up compliant environments in minutes. We integrate tools like Terragrunt for DRY configurations and OPA/Sentinel for policy enforcement, ensuring that no non-compliant resource (like a public S3 bucket) can ever be provisioned.`,
            kpis: [
                { value: "100%", label: "Infra in Code" },
                { value: "5 min", label: "Env Provisioning Time" },
                { value: "0", label: "Configuration Drift" }
            ],
            process: [
                { title: "State Architecture", desc: "Designing a remote state locking strategy using S3/DynamoDB or Terraform Cloud." },
                { title: "Module Development", desc: "Writing reusable, opinionated modules for your core resources (VPC, EKS, RDS)." },
                { title: "Testing Framework", desc: "Implementing `terratest` to validate infrastructure logic before it merges." },
                { title: "Automated Apply", desc: "Setting up Atlantis or GitHub Actions to run `plan` and `apply` on PRs." }
            ],
            deliverables: [
                "Library of Verified Terraform Modules",
                "Automated IaC Pipelines (Atlantis)",
                "Policy-as-Code Guardrails",
                "Environment Tearing/Rebuilding Docs"
            ],
            techStack: ["Terraform", "OpenTofu", "Terragrunt", "Atlantis", "Crossplane", "Pulumi"],
            benefits: [
              { title: "Reproducibility", desc: "Eliminate 'it works on my machine'. Dev, Stage, and Prod are identical." },
              { title: "Cost Control", desc: "Integrate Infracost to see the dollar impact of a PR before merging." },
              { title: "Velocity", desc: "Developers provision their own databases using your pre-approved modules." }
            ]
          }
        },
        {
          id: "ci-cd-modernization",
          title: "Advanced CI/CD Pipelines",
          description: "High-velocity pipelines with ephemeral environments, DORA metrics tracking, and intelligent caching.",
          features: ["Ephemeral Previews", "Test Parallelization", "Container Optimization", "DORA Dashboards"],
          fullContent: {
            longDescription: `A slow build pipeline is a productivity killer. We modernize your CI/CD to be fast, reliable, and informative. We implement ephemeral preview environments that spin up for every Pull Request, allowing product owners to test changes in isolation. We instrument pipelines to track DORA metrics (Deployment Frequency, Lead Time, etc.) so you can measure engineering velocity scientifically.`,
            kpis: [
                { value: "< 10m", label: "Build & Test Time" },
                { value: "Daily", label: "Deployment Freq" },
                { value: "< 5%", label: "Change Failure Rate" }
            ],
            process: [
                { title: "Pipeline Profiling", desc: "Identifying slow steps and bottlenecks in your current build process." },
                { title: "Caching Strategy", desc: "Implementing distributed caching (Docker layers, dependencies) to speed up builds." },
                { title: "Preview Envs", desc: "Automating the creation of full-stack environments per PR using vCluster or Namespaces." },
                { title: "DORA Instrumentation", desc: "Pushing build/deploy events to a metrics backend to visualize engineering health." }
            ],
            deliverables: [
                "Optimized CI/CD YAML Configs",
                "Ephemeral Environment Automation",
                "DORA Metrics Dashboard",
                "Test Parallelization Setup"
            ],
            techStack: ["GitHub Actions", "GitLab CI", "CircleCI", "Harness", "Buildkite", "Dagger"],
            benefits: [
              { title: "Faster Feedback Loops", desc: "Developers know if they broke the build in minutes, not hours." },
              { title: "Higher Quality", desc: "Automated preview environments allow for better manual and automated QA." },
              { title: "Data-Driven Engineering", desc: "Make decisions based on actual deployment metrics, not gut feel." }
            ]
          }
        }
      ],
      benefits: [
        { title: "Developer Autonomy", desc: "Engineers self-serve infrastructure, removing Ops as a bottleneck." },
        { title: "Standardized Governance", desc: "Security and compliance are baked into the platform templates." },
        { title: "Reduced Cognitive Load", desc: "Developers focus on business logic, not Kubernetes YAML." },
        { title: "Accelerated Onboarding", desc: "New hires deploy their first service on Day 1 via the IDP." }
      ],
      process: [
        { title: "Platform Assessment", desc: "Evaluating your current toolchain and developer friction points." },
        { title: "MVP Design", desc: "Building the 'Thinnest Viable Platform' (TVP) to prove value quickly." },
        { title: "Adoption & Scale", desc: "Iterating on the platform based on developer feedback and internal marketing." }
      ],
      faqs: [
        { question: "How is this different from traditional DevOps?", answer: "DevOps is a culture; Platform Engineering is the concrete implementation of that culture through product-thinking." },
        { question: "Do we need a dedicated Platform Team?", answer: "Ideally, yes. Even a small 'virtual' team of senior engineers is needed to treat the platform as a product." }
      ]
    }
  },
  {
    id: 'sre-observability',
    title: 'SRE & Observability',
    description: 'Engineer reliability with SLI/SLO governance, distributed tracing, and error budget management.',
    icon: Activity,
    details: [
      "SLO/SLI Governance Frameworks",
      "OpenTelemetry (OTEL) Implementation",
      "Chaos Engineering & Resilience",
      "Automated Incident Response"
    ],
    fullContent: {
      longDescription: "Reliability is a feature, but 100% uptime is a fallacy. Our Site Reliability Engineering (SRE) practice helps you define and manage Error Budgets that align technical performance with business KPIs. We implement full-stack observability using OpenTelemetry to transform 'unknown unknowns' into actionable insights. By shifting from reactive monitoring to proactive observability, we reduce MTTR and prevent revenue-impacting outages before they cascade.",
      secondaryHeadline: "From Monitoring to Observability",
      secondaryDescription: "Monitoring tells you a server is down. Observability tells you why the checkout button is slow for iOS users in France. We bridge the gap between infrastructure health and user experience.",
      subServices: [
        {
          id: "service-reliability-engineering",
          title: "Service Reliability Engineering (SRE Core)",
          description: "Build the cultural and technical foundation for high reliability using Google-style SRE practices.",
          features: ["SLO/SLI Design", "Error Budget Policy", "SRE Maturity Model", "Toil Reduction"],
          fullContent: {
            longDescription: `True SRE is about more than just hiring engineers who know Linux. It’s about aligning incentives between product and engineering. We help you define Service Level Objectives (SLOs) that map to real user happiness, and implement Error Budgets to govern the release velocity. 
            
            If you are within budget, you ship fast. If you burn it, you stabilize. We codify this process, ensuring your team spends less time fighting fires and more time engineering reliability. We help organizations move from "Reactive Ops" to "Reliability Engineering" by measuring Toil and capping it at 50% of engineering time.`,
            kpis: [
                { value: "50%", label: "Reduction in Alert Noise" },
                { value: "4x", label: "Faster Incident Recovery" },
                { value: "99.99%", label: "Target Availability" }
            ],
            process: [
                { title: "Reliability Maturity Assessment", desc: "We evaluate your current incident management, monitoring, and on-call culture against industry baselines." },
                { title: "SLI/SLO Workshops", desc: "We facilitate workshops with Product & Engineering to define SLIs (indicators) and SLOs (objectives) for critical user journeys." },
                { title: "Error Budget Policy", desc: "We draft and ratify the policy that dictates what happens when the error budget is exhausted (e.g., feature freeze)." },
                { title: "Toil Elimination", desc: "We identify top manual operational tasks and implement automation (self-healing, auto-scaling) to eliminate them." }
            ],
            deliverables: [
                "SLO/SLI Dashboards in Grafana",
                "Error Budget Policy Document",
                "Production Readiness Checklist (PRR)",
                "On-Call Rotation Schedule & Escalation Policy"
            ],
            techStack: ["Prometheus", "Grafana", "PagerDuty", "Terraform", "Slack/Teams", "Jira Service Desk"],
            benefits: [
              { title: "Data-Driven Velocity", desc: "Release decisions are no longer emotional. They are based on the remaining error budget." },
              { title: "Cultural Shift", desc: "Move from a blame culture to a learning culture with blameless post-incident reviews." },
              { title: "Toil Reduction", desc: "We identify and automate repetitive operational work, capping toil at 50% of engineering time." },
              { title: "Operational Excellence", desc: "Standardized production readiness reviews ensure no service goes live without observability and runbooks." }
            ],
            faqs: [
              { question: "How do we define good SLIs?", answer: "We start with the user journey. What does 'working' mean to them? (e.g., 'Can add to cart' vs 'Server responds 200')." },
              { question: "Do we need a dedicated SRE team?", answer: "Not always. We can help you implement 'SRE as a culture' within your existing product teams (Embedded SRE)." }
            ]
          }
        },
        {
          id: "observability-engineering",
          title: "Observability Engineering",
          description: "Move beyond 'is it up?' to 'why is it slow?' with full-stack cardinality and correlation.",
          features: ["Log Aggregation (Loki/ELK)", "Distributed Tracing", "Metrics (Prometheus)", "RUM (Real User Monitoring)"],
          fullContent: {
            longDescription: `Monitoring tells you when you're broken. Observability tells you *why*. We engineer unified telemetry stacks that correlate metrics, logs, and traces. 
            
            When an alert fires, your engineers shouldn't be grep-ing through text files. They should have a direct link to a trace showing exactly which microservice, database query, or third-party API caused the latency. We build this context-rich environment for you, handling high-cardinality data without breaking the bank.`,
            kpis: [
                { value: "< 1m", label: "Metric Resolution" },
                { value: "100%", label: "System Visibility" },
                { value: "-30%", label: "Storage Cost" }
            ],
            process: [
                { title: "Telemetry Audit", desc: "We audit existing logs, metrics, and tracing to identify gaps and high-cost/low-value data." },
                { title: "Unified Schema Design", desc: "We define standard labels (env, service, team) and structured log formats (JSON) across all services." },
                { title: "Pipeline Architecture", desc: "We design scalable ingestion pipelines using Vector or Fluentd to buffer and process telemetry." },
                { title: "Dashboard Engineering", desc: "We build 'Golden Signal' dashboards (Latency, Traffic, Errors, Saturation) for every service." }
            ],
            deliverables: [
                "Centralized Logging Stack (Loki/ELK)",
                "Golden Signal Dashboards",
                "Alerting Rules Repository (PrometheusRules)",
                "Log Retention & Lifecycle Policy"
            ],
            techStack: ["Prometheus", "Thanos", "Grafana Loki", "Vector", "Elasticsearch", "Fluentd"],
            benefits: [
              { title: "Drastically Reduced MTTR", desc: "Pinpoint the root cause in minutes, not hours, by following the request trace across boundaries." },
              { title: "Single Pane of Glass", desc: "Unified dashboards that show infrastructure health alongside business metrics." },
              { title: "High-Cardinality Analysis", desc: "Slice and dice data by customerID, buildID, or region to find 'needle in the haystack' issues." },
              { title: "Proactive Optimization", desc: "Identify slow queries and inefficient code paths before they cause an outage." }
            ],
            faqs: [
              { question: "Loki vs ELK?", answer: "Loki is cheaper and better for Kubernetes logs (metadata-based indexing). ELK is better for full-text search analytics. We advise based on use case." },
              { question: "How do we correlate logs and traces?", answer: "We inject trace IDs into log context automatically, allowing you to jump from a log line directly to the full distributed trace." }
            ]
          }
        },
        {
          id: "opentelemetry",
          title: "OpenTelemetry Implementation",
          description: "Future-proof your telemetry with the industry-standard, vendor-neutral collection framework.",
          features: ["OTEL Collectors", "Auto-Instrumentation", "Sampling Strategies", "Pipeline Design"],
          fullContent: {
            longDescription: `Proprietary agents are a trap. OpenTelemetry (OTEL) is the future. We migrate your observability pipeline to OTEL, allowing you to collect data once and send it to any backend (Datadog, Splunk, Prometheus, Honeycomb) without changing a line of code.
            
            We design robust collector architectures that handle buffering, sensitive data redaction, and tail-based sampling, ensuring you get high-fidelity data without vendor lock-in. We handle the complex configuration of sidecars vs daemonsets to minimize overhead.`,
            kpis: [
                { value: "0", label: "Vendor Lock-in" },
                { value: "100%", label: "Trace Coverage" },
                { value: "Std", label: "Data Format" }
            ],
            process: [
                { title: "Instrumentation Strategy", desc: "We decide between auto-instrumentation agents (Java/Python/Node) and manual instrumentation for critical paths." },
                { title: "Collector Deployment", desc: "We deploy OTEL Collectors as Agents (DaemonSet) and Gateways (Deployment) to aggregate data." },
                { title: "Sampling Configuration", desc: "We implement head-based and tail-based sampling to manage data volume without losing error traces." },
                { title: "Backend Integration", desc: "We configure exporters to route metrics to Prometheus, logs to Loki, and traces to Tempo/Jaeger." }
            ],
            deliverables: [
                "OTEL Collector Helm Charts",
                "Standardized Tracing Libraries",
                "Sampling Policy Configuration",
                "Backend Exporter Configs"
            ],
            techStack: ["OpenTelemetry", "Jaeger", "Tempo", "SigNoz", "Honeycomb", "Datadog"],
            benefits: [
              { title: "No Vendor Lock-in", desc: "Switch observability backends (e.g., Datadog to Grafana Cloud) just by changing config in the collector." },
              { title: "Standardized Data", desc: "Consistent semantic conventions across all languages (Go, Java, Python, Node)." },
              { title: "Control & Governance", desc: "Filter, sample, and redact data *before* it leaves your infrastructure, improving security and cost." },
              { title: "Auto-Instrumentation", desc: "Get deep visibility into libraries and frameworks without manual coding." }
            ],
            faqs: [
              { question: "Does OTEL add latency?", answer: "Minimal. The collector runs as a sidecar or daemonset, offloading processing from the application." },
              { question: "Can OTEL replace our Datadog agent?", answer: "Yes, fully. It can even send data to Datadog if you want to keep using their UI but control the data pipeline." }
            ]
          }
        },
        {
          id: "incident-management",
          title: "Incident Management & MTTR",
          description: "Turn chaos into process. Streamline on-call, alerting, and post-incident reviews.",
          features: ["PagerDuty/OpsGenie Config", "Automated Runbooks", "Blameless Postmortems", "Alert Fatigue Reduction"],
          fullContent: {
            longDescription: `Pager fatigue kills teams. We help you design a humane and effective incident response process. This involves tuning alerts to ensure every page is actionable, creating runbooks that auto-execute context gathering, and establishing a clear Incident Commander structure.
            
            We also facilitate Blameless Postmortems to ensure that every incident makes your system stronger, rather than just stressing your team out. We integrate chatops (Slack/Teams) to manage incidents where the team already communicates.`,
            kpis: [
                { value: "-60%", label: "Alert Volume" },
                { value: "100%", label: "Actionable Alerts" },
                { value: "15m", label: "Target MTTA" }
            ],
            process: [
                { title: "Alert Audit", desc: "We analyze historical alert data to identify 'flapping' alerts and non-actionable noise to silence." },
                { title: "On-Call Schedule Design", desc: "We set up sustainable rotations (Follow-the-Sun if possible) and escalation policies in PagerDuty." },
                { title: "Runbook Automation", desc: "We link alerts to specific runbooks and automated diagnostic scripts (e.g., 'Check DB Connections')." },
                { title: "Post-Incident Process", desc: "We implement a structured 'Correction of Error' (COE) process to ensure root causes are fixed." }
            ],
            deliverables: [
                "PagerDuty/OpsGenie Configuration",
                "Incident Response Playbook",
                "Automated Escalation Policies",
                "Post-Mortem Template & Process"
            ],
            techStack: ["PagerDuty", "OpsGenie", "Slack", "Jira", "StatusPage", "Rootly"],
            benefits: [
              { title: "Reduced Burnout", desc: "Stop waking people up for non-critical CPU spikes. We implement 'Sleep-Friendly' alerting policies." },
              { title: "Faster Recovery", desc: "Runbooks attached to alerts mean responders don't have to think; they just execute." },
              { title: "Continuous Improvement", desc: "Structured post-incident reviews (COE) that generate engineering work items to prevent recurrence." },
              { title: "Role Clarity", desc: "Defined roles for Incident Commander, Scribe, and Comms Lead avoid the 'too many cooks' problem." }
            ],
            faqs: [
              { question: "How do you reduce alert noise?", answer: "We implement grouped alerts, suppression windows, and ensure every alert maps to a specific symptom, not a cause." },
              { question: "Do you provide 24/7 support?", answer: "We can augment your on-call rotation or provide Level 1 triage services." }
            ]
          }
        },
        {
          id: "chaos-engineering",
          title: "Chaos Engineering",
          description: "Proactively inject failure to verify resilience before production incidents happen.",
          features: ["Fault Injection", "Game Days", "Litmus/Gremlin", "Resilience Scoring"],
          fullContent: {
            longDescription: `Hope is not a strategy. You need to know how your system fails. We implement Chaos Engineering practices to safely inject failure (latency, pod kills, zone outages) into your environment. 
            
            We start with Game Days in staging and graduate to automated chaos in production. This validates your self-healing mechanisms and proves that your redundancy actually works. We verify assumptions about timeouts, retries, and circuit breakers.`,
            kpis: [
                { value: "100%", label: "Verified Failover" },
                { value: "0", label: "Downtime Drills" },
                { value: "A+", label: "Resilience Score" }
            ],
            process: [
                { title: "Hypothesis Definition", desc: "We define steady states and hypotheses (e.g., 'If the primary DB fails, the replica takes over in 30s')." },
                { title: "Experiment Design", desc: "We design safe experiments with limited blast radius (e.g., impact only 1% of traffic)." },
                { title: "Execution (Game Day)", desc: "We run the experiment with the team, verifying monitoring detection and system recovery." },
                { title: "Fix & Automate", desc: "We fix discovered issues and automate the experiment to run continuously in the CI pipeline." }
            ],
            deliverables: [
                "Chaos Experiment Library",
                "Resilience Report Card",
                "Game Day Runbooks",
                "Automated Chaos Pipeline Steps"
            ],
            techStack: ["LitmusChaos", "Chaos Mesh", "Gremlin", "AWS FIS", "Istio"],
            benefits: [
              { title: "Verified Resilience", desc: "Know for a fact that your database failover works, rather than just hoping it does." },
              { title: "Confident Deployments", desc: "Teams ship faster knowing the platform can withstand component failures." },
              { title: "Hidden Bug Discovery", desc: "Find race conditions and timeouts that only appear under degradation, before they hit customers." },
              { title: "Training Ground", desc: "Game Days train your team on how to respond to incidents in a controlled environment." }
            ],
            faqs: [
              { question: "Is this dangerous?", answer: "We start with small 'blast radius' experiments in non-prod. We never run a chaos experiment without a stop-button." },
              { question: "What tools do you use?", answer: "We use CNCF tools like LitmusChaos and Chaos Mesh, or commercial tools like Gremlin." }
            ]
          }
        },
        {
          id: "cost-optimized-observability",
          title: "Cost-Optimized Observability",
          description: "Control exploding data costs without losing visibility using smart sampling and aggregation.",
          features: ["Metric Cardinality Analysis", "Log Retention Tiering", "Sampling Policies", "Vendor Bill Reduction"],
          fullContent: {
            longDescription: `Observability is often the second largest cloud bill after compute. It doesn't have to be. We help you take control of your telemetry volume. 
            
            By implementing smart head-based and tail-based sampling, dropping high-cardinality unused metrics, and tiering logs to cheaper storage (S3) while keeping them queryable, we drastically reduce costs while maintaining the signal needed for debugging. We treat telemetry data as a supply chain problem.`,
            kpis: [
                { value: "-40%", label: "Vendor Bill" },
                { value: "90%", label: "Noise Reduction" },
                { value: "1y+", label: "Log Retention" }
            ],
            process: [
                { title: "Cost Analysis", desc: "We analyze your Datadog/Splunk/CloudWatch bill to identify the top 10% of metrics driving 90% of the cost." },
                { title: "Cardinality Pruning", desc: "We drop unused high-cardinality labels (e.g., pod_id, IP) from metrics that don't need them." },
                { title: "Sampling Implementation", desc: "We implement dynamic sampling rules to keep 100% of errors but sample success paths." },
                { title: "Storage Tiering", desc: "We re-route high-volume debug logs to S3/Athena instead of expensive hot indexing." }
            ],
            deliverables: [
                "Telemetry Cost Reduction Report",
                "Metric Aggregation Rules",
                "Sampling Config",
                "Log Archival Architecture"
            ],
            techStack: ["Grafana Mimir", "VictoriaMetrics", "Cribl", "Vector", "S3"],
            benefits: [
              { title: "Lower Vendor Bills", desc: "Reduce Datadog/Splunk/NewRelic bills by 30-50% by filtering noise at the source." },
              { title: "High Signal-to-Noise", desc: "Developers see only the data that matters, not gigabytes of debug spam." },
              { title: "Longer Retention", desc: "Store logs for years for compliance at S3 prices, rehydrating them only when needed." },
              { title: "Predictable Spend", desc: "Implement quotas and rate limits per team to prevent accidental bill spikes." }
            ],
            faqs: [
              { question: "Will we miss errors?", answer: "No. We implement tail-sampling to ensure 100% of error traces are kept, while sampling down successful 'happy path' requests." },
              { question: "How do you identify unused metrics?", answer: "We analyze query logs to see which metrics are actually used in dashboards and alerts, and safely drop the rest." }
            ]
          }
        }
      ],
      benefits: [
        { title: "Business-Aligned Reliability", desc: "Stop over-engineering. We set reliability targets (SLOs) based on actual user impact and business needs (e.g., checkout success rate vs CPU usage)." },
        { title: "Drastically Reduced MTTR", desc: "Distributed tracing with OpenTelemetry pinpoints the exact microservice and database query causing latency in seconds, not hours." },
        { title: "Operational Maturity", desc: "Move from 'hero culture' fighting fires to automated runbooks and self-healing systems that resolve incidents without human intervention." },
        { title: "Cost-Efficient Telemetry", desc: "Smart sampling strategies and metric aggregation to keep observability costs under control without losing fidelity on errors." }
      ],
      process: [
        { title: "SLO Workshops", desc: "Defining Service Level Indicators (SLIs) and Objectives (SLOs) with product stakeholders." },
        { title: "Instrumentation", desc: "Deploying OpenTelemetry agents to capture metrics, logs, and traces in a unified backend." },
        { title: "Chaos Gamedays", desc: "Intentionally injecting failure to validate system resilience and team response." }
      ],
      faqs: [
        { question: "What is the overhead of OpenTelemetry sidecars?", answer: "We tune collectors to consume <5% of pod resources. We implement tail-based sampling to capture 100% of error traces while sampling down successful requests to minimize storage." },
        { question: "How do we define error budgets for internal services?", answer: "We tier services (Tier 0 critical vs Tier 3 internal). Tier 0 gets tighter budgets. We use historical data to set realistic initial targets, then tighten them quarterly." },
        { question: "Can you help us build an on-call rotation?", answer: "Yes, we help implement PagerDuty/OpsGenie rotations, define escalation policies, and most importantly, work to reduce 'alert fatigue' by deleting noisy, non-actionable alerts." }
      ]
    }
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud-Native Architecture',
    description: 'Design resilient, event-driven systems on AWS, Azure, and GCP that scale infinitely.',
    icon: Cloud,
    details: [
      "Production-Grade Kubernetes (EKS/AKS)",
      "Serverless & Event-Driven Patterns",
      "Legacy Modernization (Strangler Fig)",
      "Multi-Region Resilience (DR)"
    ],
    fullContent: {
      longDescription: "Transitioning to the cloud is not just about 'lift and shift'; it's about re-architecting for elasticity and fault tolerance. We design event-driven, serverless, and containerized architectures that decouple components and handle massive scale. Whether it's a greenfield build or a complex refactor of a legacy monolith using the Strangler Fig pattern, our blueprints ensure operational excellence and cost-efficiency from Day 0.",
      secondaryHeadline: "Architecting for Infinity",
      secondaryDescription: "Scalability isn't accidental. It's engineered. We build systems that can scale to zero when idle and scale to millions during peak, all while maintaining strict consistency and security boundaries.",
      subServices: [
        {
          id: "production-kubernetes",
          title: "Managed Kubernetes",
          description: "Enterprise-grade container orchestration across AWS EKS, Google GKE, and Azure AKS.",
          features: ["Multi-Tenancy", "Service Mesh", "Autoscaling", "Policy Enforcement"],
          fullContent: {
            longDescription: `Running Kubernetes in production requires more than ` + "`kubectl apply`" + `. We engineer robust clusters that are secure, observable, and automated. We implement advanced features like autoscaling for just-in-time node scaling, service mesh networking, and policy governance. We handle upgrades, networking (CNI), and storage (CSI) so you don't have to.`,
            kpis: [
                { value: "99.99%", label: "Cluster Uptime" },
                { value: "< 2m", label: "Node Scaling Time" },
                { value: "100%", label: "mTLS Coverage" }
            ],
            process: [
                { title: "Cluster Design", desc: "Defining node pools, networking architecture (VPC CNI), and security groups." },
                { title: "Add-on Management", desc: "Automating the deployment of core add-ons (CoreDNS, metrics-server, ingress) via GitOps." },
                { title: "Security Hardening", desc: "Implementing CIS Benchmarks, restricting privileged containers, and setting up RBAC." },
                { title: "Autoscaling Tuning", desc: "Configuring HPA/VPA and Cluster Autoscaler/Karpenter for optimal bin-packing." }
            ],
            deliverables: [
                "Production EKS/AKS Terraform Code",
                "Service Mesh Configuration (Istio)",
                "Cluster Upgrade Playbooks",
                "Network Policy Implementation"
            ],
            techStack: ["Kubernetes", "EKS", "AKS", "Istio", "Karpenter", "Helm"],
            benefits: [
              { title: "Cost Efficiency", desc: "Aggressive bin-packing and spot instance usage reduces compute bills by 40-60%." },
              { title: "Security", desc: "Zero Trust networking within the cluster ensures compromised pods can't attack neighbors." },
              { title: "Portability", desc: "Standardized K8s APIs allow you to move workloads between clouds or on-prem." }
            ]
          }
        },
        {
          id: "serverless-architecture",
          title: "Serverless & Event-Driven",
          description: "Build infinitely scalable applications using Lambda, Cloud Run, and Kafka/EventBridge.",
          features: ["EDA Patterns", "Cold Start Opt", "Idempotency", "Async Processing"],
          fullContent: {
            longDescription: `Serverless is the ultimate operational efficiency. We architect systems using AWS Lambda, Google Cloud Run, and Azure Functions that scale to zero and handle bursty traffic without pre-provisioning. We design event-driven backbones using EventBridge, Kafka, or SNS/SQS to decouple services, ensuring your system is resilient to individual component failures.`,
            kpis: [
                { value: "0", label: "Idle Cost" },
                { value: "ms", label: "Scaling Latency" },
                { value: "∞", label: "Theoretical Scale" }
            ],
            process: [
                { title: "Event Modeling", desc: "Mapping domain events and defining schemas using CloudEvents standards." },
                { title: "Function Design", desc: "Writing granular, single-purpose functions with optimized cold start times (Rust/Go/Node)." },
                { title: "Pattern Implementation", desc: "Deploying patterns like Sagas for distributed transactions and CQRS." },
                { title: "Observability Setup", desc: "Implementing distributed tracing (X-Ray) to visualize async flows." }
            ],
            deliverables: [
                "Serverless Application Architecture",
                "Event Schema Registry",
                "Idempotency Libraries",
                "Async Failure Handling (DLQs)"
            ],
            techStack: ["AWS Lambda", "Cloud Run", "EventBridge", "Kafka", "DynamoDB", "Step Functions"],
            benefits: [
              { title: "No Ops Overhead", desc: "No servers to patch, manage, or upgrade. AWS handles the heavy lifting." },
              { title: "Cost per Transaction", desc: "Pay only for the compute you actually use, down to the millisecond." },
              { title: "Agility", desc: "Developers ship functions independently, enabling rapid feature iteration." }
            ]
          }
        },
        {
          id: "legacy-modernization",
          title: "Legacy Modernization",
          description: "Strangling the monolith. We help you migrate legacy apps to the cloud without the 'Big Bang' risk.",
          features: ["Strangler Fig Pattern", "Containerization", "Database Migration", "API Gateways"],
          fullContent: {
            longDescription: `Rewriting a monolith from scratch is a trap. We use the Strangler Fig pattern to incrementally migrate functionality from legacy systems to modern cloud-native microservices. We containerize legacy apps to extend their life, implement API Gateways to abstract the underlying architecture, and use Change Data Capture (CDC) to sync data to modern cloud databases in real-time.`,
            kpis: [
                { value: "0", label: "Downtime Migration" },
                { value: "100%", label: "Data Integrity" },
                { value: "2x", label: "Feature Velocity" }
            ],
            process: [
                { title: "Assessment", desc: "Analyzing code dependencies and data coupling in the legacy system." },
                { title: "Containerization", desc: "Wrapping the legacy app in Docker to run on modern orchestration platforms." },
                { title: "Strangling", desc: "Building new features in microservices and routing traffic via an API Gateway." },
                { title: "Data Sync", desc: "Setting up DMS or Kafka Connect to replicate data from legacy DBs to cloud stores." }
            ],
            deliverables: [
                "Migration Roadmap & Strategy",
                "Containerized Legacy Artifacts",
                "API Gateway Routing Rules",
                "Data Replication Pipeline"
            ],
            techStack: ["Docker", "Kong/Apigee", "AWS DMS", "Kafka Connect", "PostgreSQL"],
            benefits: [
              { title: "Risk Mitigation", desc: "Incremental migration means we can roll back individual features instantly if issues arise." },
              { title: "Immediate Value", desc: "Start shipping new features on the modern stack Day 1, rather than waiting for a full rewrite." },
              { title: "Talent Retention", desc: "Developers get to work on modern tech stacks instead of maintaining legacy code." }
            ]
          }
        },
        {
          id: "multi-region-disaster-recovery",
          title: "Multi-Region DR & Resilience",
          description: "Achieve RPO=0 and RTO<15min with Active-Active or Warm Pool architectures.",
          features: ["Global Traffic Routing", "Data Replication", "Failover Automation", "Chaos Testing"],
          fullContent: {
            longDescription: `Cloud regions fail. Cables get cut. We architect your system to survive catastrophic failures. Whether you need a warm standby (Active-Passive) or a fully distributed Active-Active architecture, we implement the data replication, traffic routing, and failover automation required to keep your business online no matter what.`,
            kpis: [
                { value: "~0", label: "Recovery Point (RPO)" },
                { value: "< 15m", label: "Recovery Time (RTO)" },
                { value: "100%", label: "Drill Success Rate" }
            ],
            process: [
                { title: "BIA Analysis", desc: "Conducting a Business Impact Analysis to define necessary RPO/RTO targets per service." },
                { title: "Data Layer Design", desc: "Implementing Global Tables (DynamoDB) or Cross-Region Replication (Aurora/S3)." },
                { title: "Traffic Management", desc: "Configuring DNS (Route53/Cloudflare) for latency-based routing and health checks." },
                { title: "Game Days", desc: "Simulating region failures to validate that failover automation works as expected." }
            ],
            deliverables: [
                "Disaster Recovery Playbook",
                "Automated Failover Scripts",
                "Global Data Replication Setup",
                "Chaos Engineering Report"
            ],
            techStack: ["Route53", "Aurora Global", "DynamoDB Global Tables", "S3 CRR", "CloudFront"],
            benefits: [
              { title: "Business Continuity", desc: "Survive outages that take your competitors offline." },
              { title: "Performance", desc: "Active-Active designs allow you to serve users from the region closest to them." },
              { title: "Compliance", desc: "Meet strict banking and healthcare availability mandates." }
            ]
          }
        },
        {
          id: "managed-aws-services",
          title: "Managed Amazon Web Services",
          description: "AWS-native Kubernetes orchestration leveraging IRSA, Karpenter, and Fargate for enterprise agility.",
          fullContent: {
            longDescription: `
              <p class="mb-6 text-xl text-gray-600 leading-relaxed font-light">
                Amazon EKS is the backbone of modern enterprise cloud. We optimize it for performance, cost, and absolute security.
              </p>
              <h3 class="text-2xl font-extrabold text-navy-900 mt-12 mb-6">Advanced AWS Patterns</h3>
              <p class="mb-6 text-gray-600 leading-relaxed">
                We implement <strong>IAM Roles for Service Accounts (IRSA)</strong> to ensure least-privilege security at the pod level. By leveraging <strong>Karpenter</strong>, we bypass traditional Auto Scaling Groups to provision instances in seconds.
              </p>
            `,
            benefits: [
              { title: "IRSA Security", desc: "Fine-grained AWS permission control for pods." },
              { title: "Fargate Support", desc: "Serverless compute for sporadic workloads." },
              { title: "Graviton ROI", desc: "ARM-based nodes for 40% better performance." }
            ],
            kpis: [
                { value: "< 30s", label: "Node Spin-up Time" },
                { value: "100%", label: "IAM Isolation" },
                { value: "40%", label: "Graviton Savings" }
            ],
            process: [
                { title: "EKS Blueprinting", desc: "Defining Terraform modules for multi-cluster rollout." },
                { title: "Add-on Hardening", desc: "Configuring CoreDNS, Kube-Proxy, and VPC CNI." },
                { title: "IAM Integration", desc: "Mapping OIDC providers for secure service access." }
            ],
            techStack: ["AWS EKS", "Karpenter", "AWS CLI", "CloudWatch", "Terraform"]
          }
        },
        {
          id: "managed-gcp-services",
          title: "Managed Google Cloud Platform",
          description: "The gold standard for Kubernetes. GKE Autopilot and Binary Authorization for data-heavy workloads.",
          fullContent: {
            longDescription: `
              <p class="mb-6 text-xl text-gray-600 leading-relaxed font-light">
                Google Cloud invented Kubernetes. GKE remains the most mature and automated managed service in the market.
              </p>
              <h3 class="text-2xl font-extrabold text-navy-900 mt-12 mb-6">Autopilot & Operations</h3>
              <p class="mb-6 text-gray-600 leading-relaxed">
                We utilize <strong>GKE Autopilot</strong> to offload node management entirely to Google, ensuring your clusters are always patched and secured.
              </p>
            `,
            benefits: [
              { title: "Autopilot Ease", desc: "No node pools to manage, Google handles everything." },
              { title: "Anthos Ready", desc: "Manage multi-cloud and hybrid clusters easily." },
              { title: "Cost Insights", desc: "Deep GKE-native billing breakdown per namespace." }
            ],
            kpis: [
                { value: "0", label: "Nodes Managed" },
                { value: "100%", label: "Image Trust Score" },
                { value: "60%", label: "Faster Ingestion" }
            ],
            process: [
                { title: "GCP Org Setup", desc: "Configuring Shared VPCs and Folders for clusters." },
                { title: "Fleet Management", desc: "Registering clusters to Hub/Anthos fleets." },
                { title: "WAF Integration", desc: "Protecting Ingress with Google Cloud Armor." }
            ],
            techStack: ["GKE", "Anthos", "Google Cloud Armor", "Cloud Build", "BigQuery"]
          }
        },
        {
          id: "managed-azure-services",
          title: "Managed Microsoft Azure",
          description: "Enterprise-grade hybrid Kubernetes integration with Azure DevOps, Sentinel, and Entra ID.",
          fullContent: {
            longDescription: `
              <p class="mb-6 text-xl text-gray-600 leading-relaxed font-light">
                Azure AKS provides the most seamless integration for enterprises already committed to the Microsoft ecosystem.
              </p>
              <h3 class="text-2xl font-extrabold text-navy-900 mt-12 mb-6">Enterprise Hybrid Scale</h3>
              <p class="mb-6 text-gray-600 leading-relaxed">
                We leverage <strong>Microsoft Entra ID</strong> for unified identity management. Using <strong>Azure Policy for Kubernetes</strong>, we enforce compliance guardrails at the cluster API level.
              </p>
            `,
            benefits: [
              { title: "Entra ID Auth", desc: "RBAC mapping directly to Azure Active Directory." },
              { title: "Bicep Mastery", desc: "Native Azure-as-Code for fast cluster delivery." },
              { title: "Cilium CNI", desc: "High-performance eBPF-based Azure networking." }
            ],
            kpis: [
                { value: "SOC2", label: "Governance Ready" },
                { value: "100%", label: "AD/Entra Coverage" },
                { value: "15m", label: "Security SLA" }
            ],
            process: [
                { title: "VNET Hub Setup", desc: "Architecting the network foundation for AKS." },
                { title: "Policy Build", desc: "Defining Azure Policies for cluster compliance." },
                { title: "SIEM Sync", desc: "Routing AKS logs to Microsoft Sentinel." }
            ],
            techStack: ["AKS", "Azure DevOps", "Microsoft Sentinel", "Entra ID", "Bicep"]
          }
        }
      ],
      benefits: [
        { title: "Global Resilience", desc: "Architectures designed to survive entire region failures with zero data loss using active-active replication patterns." },
        { title: "Vendor Agnostic Design", desc: "Strategic abstraction layers (e.g., Dapr, Kubernetes) that leverage best-in-class services while minimizing hard lock-in risks." },
        { title: "Elastic Scalability", desc: "Systems that auto-scale precisely to demand, handling Black Friday traffic spikes without manual intervention or over-provisioning." },
        { title: "Event-Driven Decoupling", desc: "Asynchronous communication using Kafka or EventBridge to ensure services are loosely coupled and highly available." }
      ],
      process: [
        { title: "Well-Architected Review", desc: "Auditing existing infrastructure against the pillars of operational excellence and security." },
        { title: "Target Architecture Design", desc: "Blueprinting the future state with detailed diagrams for networking, compute, and data." },
        { title: "Migration Execution", desc: "Iterative migration waves that prioritize low-risk, high-value workloads." }
      ],
      faqs: [
        { question: "How do you prevent vendor lock-in with serverless?", answer: "We use hexagonal architecture. Business logic is pure code, isolated from cloud triggers. We also favor portable standards like Knative where appropriate." },
        { question: "What is the RTO/RPO for multi-region setups?", answer: "For Active-Active designs, RPO is near-zero (ms latency replication). RTO is seconds (DNS failover). We validate this via automated region evacuation drills." },
        { question: "How do you handle data consistency in microservices?", answer: "We implement patterns like Sagas and CQRS (Command Query Responsibility Segregation) to ensure eventual consistency across distributed systems without distributed transactions." }
      ]
    }
  },
  {
    id: 'cloud-security',
    title: 'DevSecOps & Zero Trust',
    description: 'Embed security into the software supply chain with automated compliance and policy-as-code.',
    icon: ShieldCheck,
    details: [
      "Compliance as Code (OPA)",
      "Zero Trust Networking",
      "Software Supply Chain Security",
      "Cloud Security Posture (CSPM)"
    ],
    fullContent: {
      longDescription: "Security cannot be a bottleneck at the end of the SDLC. We implement 'Shift Left' methodologies, embedding vulnerability scanning, secret management, and policy enforcement directly into your CI/CD pipelines. Our Zero Trust architectures assume breach, utilizing identity-aware proxies and micro-segmentation to strictly limit blast radius. We automate the evidence collection for compliance standards, turning audits from a nightmare into a non-event.",
      secondaryHeadline: "Security at the Speed of Code",
      secondaryDescription: "Traditional security gates slow you down. We build guardrails. By automating security checks and policy enforcement, we allow developers to deploy securely without waiting for manual reviews.",
      subServices: [
        {
          id: "compliance-as-code",
          title: "Automated Compliance",
          description: "Codify regulatory requirements (SOC2, HIPAA, PCI) into automated checks using OPA and CSPM tools.",
          features: ["Policy as Code", "Automated Audits", "Real-time Drift Alerts", "Reporting Dashboards"],
          fullContent: {
            longDescription: `Manual compliance audits are expensive and error-prone. We implement "Compliance as Code" using Open Policy Agent (OPA) and cloud-native CSPM tools. This means your infrastructure is continuously scanned against frameworks like SOC2, HIPAA, or PCI-DSS. If a developer tries to create a non-compliant resource (e.g., an unencrypted volume), the deployment is blocked instantly, providing immediate feedback.`,
            kpis: [
                { value: "100%", label: "Auto-Remediation" },
                { value: "24/7", label: "Compliance Monitoring" },
                { value: "-90%", label: "Audit Prep Time" }
            ],
            process: [
                { title: "Gap Analysis", desc: "Mapping your current infrastructure against desired compliance frameworks." },
                { title: "Policy Definition", desc: "Writing Rego (OPA) policies to enforce constraints (e.g., tags, regions, encryption)." },
                { title: "Guardrail Deployment", desc: "Enforcing policies at the CI/CD level (check) and Admission Controller level (block)." },
                { title: "Evidence Automation", desc: "Configuring AWS Audit Manager or Vanta to auto-collect evidence." }
            ],
            deliverables: [
                "OPA/Kyverno Policy Library",
                "Automated Compliance Dashboard",
                "Audit Readiness Report",
                "Remediation Playbooks"
            ],
            techStack: ["Open Policy Agent (OPA)", "Kyverno", "Cloud Custodian", "Vanta", "Drata", "AWS Config"],
            benefits: [
              { title: "Continuous Compliance", desc: "You are audit-ready every single day, not just once a year." },
              { title: "Developer Velocity", desc: "Developers get instant feedback on security violations, rather than finding out days later." },
              { title: "Reduced Liability", desc: "Provable security controls reduce legal and financial risk." }
            ]
          }
        },
        {
          id: "zero-trust-architecture",
          title: "Zero Trust Architecture",
          description: "Eliminate implicit trust. Authenticate and authorize every request, regardless of origin.",
          features: ["Identity-Aware Proxy", "Micro-segmentation", "mTLS Encryption", "Least Privilege IAM"],
          fullContent: {
            longDescription: `The perimeter is dead. Zero Trust assumes the network is compromised. We implement robust identity-based security using tools like SPIFFE/SPIRE and Service Meshes. Every service-to-service call is authenticated via mTLS, and user access is governed by Identity-Aware Proxies, replacing clunky VPNs. We enforce strict Least Privilege on IAM roles, ensuring compromised credentials have minimal blast radius.`,
            kpis: [
                { value: "100%", label: "mTLS Coverage" },
                { value: "0", label: "Implicit Trust Zones" },
                { value: "JIT", label: "Access Provisioning" }
            ],
            process: [
                { title: "Identity Foundation", desc: "Establishing a robust IdP integration (Okta/AzureAD) and Workload Identity." },
                { title: "Mesh Implementation", desc: "Deploying Istio or Linkerd to handle mTLS certificate rotation and authorization policies." },
                { title: "Network Segmentation", desc: "Defining strict NetworkPolicies in K8s to allow only whitelisted traffic." },
                { title: "Access Modernization", desc: "Replacing VPNs with Zero Trust Network Access (ZTNA) solutions." }
            ],
            deliverables: [
                "Zero Trust Roadmap",
                "Service Mesh Implementation",
                "IAM Least Privilege Audit",
                "Identity-Aware Access Portal"
            ],
            techStack: ["Istio", "Linkerd", "HashiCorp Vault", "Teleport", "BeyondCorp", "SPIFFE"],
            benefits: [
              { title: "Lateral Movement Protection", desc: "If an attacker breaches one container, they cannot move to others." },
              { title: "Simplified Access", desc: "Developers access internal tools securely over the internet without VPN clients." },
              { title: "Granular Auditing", desc: "Every single request is logged with identity context, making forensics easy." }
            ]
          }
        },
        {
          id: "supply-chain-security",
          title: "Software Supply Chain Security",
          description: "Secure your code from commit to production with signing, scanning, and SBOMs.",
          features: ["Image Signing (Cosign)", "SBOM Generation", "Dependency Scanning", "Build Provenance"],
          fullContent: {
            longDescription: `Modern attacks target the build pipeline, not just the runtime. We implement the SLSA framework to secure your software supply chain. We ensure every container image is signed (Cosign), generates a Software Bill of Materials (SBOM), and is scanned for vulnerabilities before it ever touches production. We verify provenance to ensure the code running in prod is exactly what was built in CI.`,
            kpis: [
                { value: "100%", label: "Signed Artifacts" },
                { value: "0", label: "Critical CVEs in Prod" },
                { value: "SLSA 3", label: "Compliance Level" }
            ],
            process: [
                { title: "Pipeline Hardening", desc: "Locking down CI/CD runners and ensuring ephemeral build environments." },
                { title: "Signing Setup", desc: "Implementing Keyless signing with Sigstore/Cosign for all build artifacts." },
                { title: "Scanner Integration", desc: "Adding Trivy/Grype steps to block builds with critical CVEs." },
                { title: "Admission Control", desc: "Configuring K8s to reject any image that isn't signed by your trusted key." }
            ],
            deliverables: [
                "Secure Build Pipeline",
                "Image Signing Infrastructure",
                "Vulnerability Management Process",
                "Admission Controller Config"
            ],
            techStack: ["Sigstore", "Cosign", "Trivy", "Snyk", "Kyverno", "Tekton"],
            benefits: [
              { title: "Tamper Proofing", desc: "Guarantee that your software hasn't been modified between build and deploy." },
              { title: "Visibility", desc: "Know exactly what open-source libraries are running in your environment (Log4j protection)." },
              { title: "Trust", desc: "Provide customers with cryptographic proof of your security practices." }
            ]
          }
        },
        {
          id: "cloud-security-posture",
          title: "Cloud Security Posture (CSPM)",
          description: "Continuous visibility and remediation of misconfigurations across AWS, Azure, and GCP.",
          features: ["Asset Inventory", "Misconfiguration Detection", "Threat Detection", "IAM Analysis"],
          fullContent: {
            longDescription: `You can't secure what you can't see. We deploy CSPM solutions that give you a real-time inventory of your cloud estate. We automatically detect open S3 buckets, permissive security groups, and unencrypted databases. We go beyond detection to "Auto-Remediation," automatically fixing common issues (like closing a security group) seconds after they are created.`,
            kpis: [
                { value: "100%", label: "Asset Visibility" },
                { value: "< 1m", label: "Detection Time" },
                { value: "Auto", label: "Remediation" }
            ],
            process: [
                { title: "Baseline Scan", desc: "Scanning entire org accounts to establish a security baseline score." },
                { title: "Rule Tuning", desc: "Customizing detection rules to reduce false positives for your environment." },
                { title: "Remediation Workflows", desc: "Building Lambda functions to auto-correct specific critical misconfigurations." },
                { title: "Reporting", desc: "Setting up executive dashboards for risk posture tracking." }
            ],
            deliverables: [
                "CSPM Tool Implementation",
                "Remediation Bot Framework",
                "Security Hub Aggregation",
                "Risk Scorecard"
            ],
            techStack: ["Wiz", "Orca Security", "Prowler", "AWS Security Hub", "CloudGuard"],
            benefits: [
              { title: "Hygiene at Scale", desc: "Manage security across hundreds of accounts without adding headcount." },
              { title: "Threat Detection", desc: "Identify anomalous behavior (like crypto-mining) instantly." },
              { title: "Contextual Risk", desc: "Understand attack paths (e.g., 'Internet exposed VM with Admin permissions')." }
            ]
          }
        }
      ],
      benefits: [
        { title: "Continuous Compliance", desc: "Real-time auditing for SOC2, HIPAA, and PCI-DSS using automated tools (Cloud Custodian, Drata) rather than annual manual panic drills." },
        { title: "Reduced Attack Surface", desc: "Minimalist container builds (Distroless), least-privilege networking (NetworkPolicies), and ephemeral credentials." },
        { title: "Secure Supply Chain", desc: "Cryptographic signing of artifacts (Cosign) and SBOM generation to prevent tampering and ensure software provenance." },
        { title: "Guardrails, Not Gates", desc: "Automated policy enforcement that guides developers to secure configurations rather than blocking them with manual reviews." }
      ],
      process: [
        { title: "Threat Modeling", desc: "Identifying potential attack vectors and prioritizing risks based on impact." },
        { title: "Guardrail Implementation", desc: "Blocking non-compliant deployments automatically using Policy-as-Code controllers." },
        { title: "Secret Rotation", desc: "Implementing Vault solutions to eliminate long-lived static credentials." }
      ],
      faqs: [
        { question: "How does Policy-as-Code impact deployment speed?", answer: "OPA/Kyverno checks happen in milliseconds at the admission controller level. It adds negligible latency but prevents hours of remediation work by blocking misconfigurations early." },
        { question: "Can you integrate with existing SIEMs?", answer: "Yes, we forward structured audit logs from the platform (Kubernetes audit logs, CloudTrail) to Splunk, Datadog, or Azure Sentinel for correlation." },
        { question: "Do you help with remediation?", answer: "Absolutely. We don't just hand you a PDF report. We write the Terraform and application code updates to fix vulnerabilities permanently." }
      ]
    }
  },
  {
    id: 'aiops-mlops',
    title: 'Production MLOps & AIOps',
    description: 'Industrialize machine learning and automate IT operations with scalable pipelines, LLM infrastructure, and intelligent observability.',
    icon: Cpu,
    details: [
      "LLM Training Infrastructure",
      "AIOps & Intelligent Automation",
      "Scalable Inference (KServe)",
      "ML Platforms (Kubeflow/Ray)"
    ],
    fullContent: {
      longDescription: "The gap between a Jupyter notebook and a production inference API is vast—and the gap between reactive monitoring and proactive AIOps is even wider. We engineer the complete MLOps and AIOps substrate required to operationalize AI at scale. From automated retraining pipelines triggered by data drift to using AI for self-healing infrastructure, we ensure your models deliver business value reliably. We help you manage the full lifecycle—data versioning, model registry, serving, and governance—treating AI assets with the same rigor as production code.",
      secondaryHeadline: "AI at Enterprise Scale",
      secondaryDescription: "Models are only as good as the infrastructure they run on. We build the plumbing that allows Data Scientists to ship models to production autonomously, while leveraging AI itself to keep your operations running smoothly.",
      subServices: [
        {
          id: "llm-ops-infrastructure",
          title: "LLM & GenAI Infrastructure",
          description: "High-performance clusters for training and fine-tuning Large Language Models.",
          features: ["GPU Orchestration", "Checkpointing", "Distributed Training", "Model Quantization"],
          fullContent: {
            longDescription: `Training and fine-tuning LLMs requires specialized infrastructure. We design high-throughput GPU clusters using Kubernetes and Ray, optimized for distributed training frameworks (DeepSpeed, FSDP). We handle the complexity of checkpointing, fault tolerance, and spot instance orchestration to reduce training costs by up to 60%. We also build RAG (Retrieval Augmented Generation) pipelines for enterprise context.`,
            kpis: [
                { value: "95%", label: "GPU Utilization" },
                { value: "No", label: "Training Interruption" },
                { value: "-50%", label: "Compute Cost" }
            ],
            process: [
                { title: "Hardware Selection", desc: "Selecting the right instance types (A100 vs H100) based on model size and budget." },
                { title: "Cluster Tuning", desc: "Optimizing NCCL parameters and network topology for maximum interconnect bandwidth." },
                { title: "Job Orchestration", desc: "Setting up Ray or Slurm on Kubernetes to manage distributed training jobs." },
                { title: "RAG Pipeline", desc: "Deploying Vector Databases (Pinecone/Milvus) and ingestion pipelines for context." }
            ],
            deliverables: [
                "Optimized GPU Cluster (EKS/GKE)",
                "Fine-tuning Pipeline Code",
                "RAG Architecture Implementation",
                "Cost Monitoring Dashboard"
            ],
            techStack: ["Ray.io", "PyTorch", "DeepSpeed", "HuggingFace", "NVIDIA Triton", "Milvus"],
            benefits: [
              { title: "Cost Efficiency", desc: "Use Spot instances for training with automated checkpoint recovery." },
              { title: "Speed", desc: "Parallelize data processing and training to iterate on models faster." },
              { title: "Ownership", desc: "Train on your own VPC data without sending sensitive info to public APIs." }
            ]
          }
        },
        {
          id: "model-serving-at-scale",
          title: "Scalable Model Serving",
          description: "Production inference APIs with low latency, auto-scaling, and A/B testing capabilities.",
          features: ["KServe/Triton", "Canary Rollouts", "Auto-scaling (KEDA)", "Model Mesh"],
          fullContent: {
            longDescription: `Serving a model is harder than training it. We build robust inference platforms using KServe or NVIDIA Triton that can handle thousands of requests per second with single-digit millisecond latency. We implement advanced features like Scale-to-Zero (for cost savings), Model Mesh (for packing multiple models), and Canary deployments to test new model versions safely against live traffic.`,
            kpis: [
                { value: "< 10ms", label: "p99 Latency" },
                { value: "Auto", label: "Scaling" },
                { value: "0", label: "Downtime Deploy" }
            ],
            process: [
                { title: "Engine Selection", desc: "Choosing the right serving runtime (Triton for GPU, ONNX for CPU) for your model." },
                { title: "Optimization", desc: "Quantizing models (INT8) and compiling with TensorRT for maximum throughput." },
                { title: "Autoscaling Config", desc: "Configuring KEDA to scale pods based on request queue depth or GPU saturation." },
                { title: "Gateway Setup", desc: "Implementing Istio for traffic splitting (A/B testing) and rate limiting." }
            ],
            deliverables: [
                "KServe/Triton Inference Stack",
                "Model Optimization Pipeline",
                "Load Testing Report",
                "Autoscaling Configuration"
            ],
            techStack: ["KServe", "NVIDIA Triton", "Seldon Core", "Istio", "Prometheus", "Grafana"],
            benefits: [
              { title: "User Experience", desc: "Consistent low latency ensures your AI-powered features feel snappy." },
              { title: "Cost Savings", desc: "Scale to zero when no one is using the model, paying only for idle storage." },
              { title: "Reliability", desc: "Graceful handling of traffic spikes and failed model pods." }
            ]
          }
        },
        {
          id: "ml-platform-engineering",
          title: "ML Platform Engineering",
          description: "End-to-end MLOps platforms using Kubeflow or Ray for the full model lifecycle.",
          features: ["Experiment Tracking", "Pipeline Orchestration", "Model Registry", "Metadata Store"],
          fullContent: {
            longDescription: `Stop passing model files around via S3. We build centralized ML Platforms that standardize the entire lifecycle. Data Scientists get self-service environments (JupyterHub) connected to scalable compute. Pipelines (Kubeflow/Airflow) automate retraining. A Model Registry ensures you always know which version of a model is running in production and its lineage (data + code + hyperparams).`,
            kpis: [
                { value: "100%", label: "Reproducibility" },
                { value: "1 click", label: "Deploy to Prod" },
                { value: "Full", label: "Lineage Tracking" }
            ],
            process: [
                { title: "Architecture Design", desc: "Selecting the right MLOps stack (Kubeflow vs lightweight alternatives) for your team size." },
                { title: "Pipeline Automation", desc: "Converting notebook code into reusable, containerized pipeline steps." },
                { title: "Registry Setup", desc: "Implementing MLflow or similar to track experiments and register production models." },
                { title: "CI/CD Integration", desc: "Connecting model registry events to GitOps deployment workflows." }
            ],
            deliverables: [
                "Internal ML Platform",
                "Standardized Project Templates",
                "CI/CD for ML (CT/CD)",
                "Model Governance Policy"
            ],
            techStack: ["Kubeflow", "MLflow", "Airflow", "Ray", "Weights & Biases"],
            benefits: [
              { title: "Governance", desc: "Audit trail of exactly how every model in production was trained." },
              { title: "Efficiency", desc: "Data scientists spend time on science, not fighting with Docker and Kubernetes." },
              { title: "Collaboration", desc: "Shared experiment tracking allows teams to learn from each other's runs." }
            ]
          }
        },
        {
          id: "feature-stores-data-pipelines",
          title: "Feature Stores & Data",
          description: "Unified feature engineering for training and serving consistency.",
          features: ["Online/Offline Sync", "Feature Registry", "Point-in-time Correctness", "Low Latency Serving"],
          fullContent: {
            longDescription: `The "Training-Serving Skew" is a silent killer of ML performance. We implement Feature Stores (like Feast or Tecton) to ensure that the features used to train the model are calculated exactly the same way during inference. We build robust data pipelines that compute features in batch (for training) and real-time (for serving), handling the complex "time-travel" logic required for accurate historical datasets.`,
            kpis: [
                { value: "0", label: "Training-Serving Skew" },
                { value: "< 5ms", label: "Feature Retrieval" },
                { value: "100%", label: "Feature Reuse" }
            ],
            process: [
                { title: "Data Audit", desc: "Analyzing data sources and feature engineering logic across teams." },
                { title: "Store Implementation", desc: "Deploying Feast backed by Redis (Online) and Snowflake/S3 (Offline)." },
                { title: "Pipeline Engineering", desc: "Building Spark/Flink jobs to compute and materialize features continuously." },
                { title: "SDK Integration", desc: "Integrating feature retrieval into training scripts and inference services." }
            ],
            deliverables: [
                "Feature Store Infrastructure",
                "Feature Engineering Pipelines",
                "Feature Catalog",
                "Data Quality Tests"
            ],
            techStack: ["Feast", "Tecton", "Redis", "Spark", "Kafka", "Snowflake"],
            benefits: [
              { title: "Reusability", desc: "Define a feature once (e.g., 'user_avg_spend') and reuse it across multiple models." },
              { title: "Accuracy", desc: "Eliminate skew and leakage, leading to better model performance in the wild." },
              { title: "Velocity", desc: "Data Scientists don't need to rebuild data pipelines for every new model." }
            ]
          }
        },
        {
          id: "aiops-intelligent-operations",
          title: "AIOps & Intelligent Operations",
          description: "Move from reactive monitoring to predictive AIOps. Use ML to correlate alerts, detect anomalies, and auto-remediate.",
          features: ["Anomaly Detection", "Event Correlation", "Self-Healing Scripts", "Predictive Scaling"],
          fullContent: {
            longDescription: `Traditional monitoring creates too much noise. AIOps applies Machine Learning to your IT operations data (logs, metrics, traces) to identify significant events and patterns that humans miss. We implement intelligent systems that correlate thousands of alerts into a single incident, predict disk/capacity failures before they happen, and trigger automated self-healing runbooks to restart services or clear caches without human intervention.`,
            kpis: [
                { value: "-50%", label: "MTTR Reduction" },
                { value: "90%", label: "Noise Reduction" },
                { value: "30%", label: "Auto-Remediation" }
            ],
            process: [
                { title: "Data Aggregation", desc: "Ingesting diverse operational data streams into an AIOps platform (Elastic/Moogsoft)." },
                { title: "Model Training", desc: "Training anomaly detection models on historical baseline performance data." },
                { title: "Correlation Rules", desc: "Defining logic to group related alerts (e.g., 'DB CPU High' + 'API Latency High') into single incidents." },
                { title: "Automation Binding", desc: "Connecting specific root causes to Ansible/Lambda remediation scripts." }
            ],
            deliverables: [
                "AIOps Correlation Engine",
                "Automated Remediation Workflows",
                "Anomaly Detection Alerts",
                "Incident Prediction Dashboard"
            ],
            techStack: ["Elastic AIOps", "Moogsoft", "BigPanda", "Dynatrace", "Ansible", "PagerDuty"],
            benefits: [
              { title: "Proactive Ops", desc: "Fix issues before customers even notice they exist." },
              { title: "Reduced Fatigue", desc: "Engineers only get woken up for real problems, not false positives." },
              { title: "Root Cause Speed", desc: "AI instantly highlights the probable root cause from millions of log lines." }
            ]
          }
        },
        {
          id: "responsible-ai-governance",
          title: "Responsible AI & Governance",
          description: "Implement guardrails for LLMs, bias detection pipelines, and explainability frameworks to ensure safe AI.",
          features: ["Bias Detection", "Model Explainability (XAI)", "LLM Guardrails", "Compliance Monitoring"],
          fullContent: {
            longDescription: `As AI scales, governance becomes critical. You cannot deploy black boxes to production. We implement robust Responsible AI frameworks that monitor models for bias, drift, and fairness. For Generative AI, we deploy guardrails to prevent hallucinations and toxic output. We ensure your AI initiatives comply with emerging regulations like the EU AI Act, providing full auditability and lineage for every inference decision.`,
            kpis: [
                { value: "100%", label: "Auditability" },
                { value: "< 1%", label: "Hallucination Rate" },
                { value: "Pass", label: "Compliance Checks" }
            ],
            process: [
                { title: "Risk Assessment", desc: "Evaluating models for potential bias, security vulnerabilities, and regulatory gaps." },
                { title: "Guardrail Deployment", desc: "Implementing input/output filters (e.g., NeMo Guardrails, LangSmith) to block toxic content." },
                { title: "Explainability Setup", desc: "Integrating SHAP/LIME tools to explain individual model predictions to stakeholders." },
                { title: "Continuous Auditing", desc: "Setting up automated pipelines to generate compliance reports for every model version." }
            ],
            deliverables: [
                "AI Governance Framework",
                "LLM Guardrails Configuration",
                "Bias & Fairness Reports",
                "Model Lineage Dashboard"
            ],
            techStack: ["Fiddler", "Arthur AI", "TruEra", "LangSmith", "Guardrails AI", "SHAP"],
            benefits: [
              { title: "Trust & Safety", desc: "Ensure your AI brand reputation isn't damaged by rogue model outputs." },
              { title: "Regulatory Compliance", desc: "Stay ahead of the EU AI Act and other legal frameworks." },
              { title: "Transparency", desc: "Understand exactly why a model made a specific decision, critical for finance and healthcare." }
            ]
          }
        }
      ],
      benefits: [
        { title: "Reproducibility", desc: "Full lineage tracking for data, code, and model hyperparameters ensures every result can be recreated and audited." },
        { title: "Inference Latency", desc: "Optimized model serving on GPUs/TPUs to meet strict real-time latency requirements, using quantization and model distillation where needed." },
        { title: "Intelligent Operations", desc: "AI-driven root cause analysis and auto-remediation reduce MTTR and operational toil." },
        { title: "Safe & Compliant AI", desc: "Built-in governance and guardrails ensure your AI models are fair, explainable, and compliant with regulations." }
      ],
      process: [
        { title: "Pipeline Orchestration", desc: "Building DAGs in Airflow or Kubeflow to automate data prep and training." },
        { title: "Serving Infrastructure", desc: "Setting up scalable endpoints with A/B testing and canary rollout capabilities." },
        { title: "AIOps Integration", desc: "Feeding operational metrics into ML models to predict and prevent infrastructure failures." }
      ],
      faqs: [
        { question: "How do you handle model drift in production?", answer: "We implement statistical distance checks (KS-test) on input data distributions. Significant deviation triggers alerts or automated retraining pipelines." },
        { question: "What is AIOps?", answer: "AIOps stands for Artificial Intelligence for IT Operations. It uses ML to automate incident detection, correlation, and response." },
        { question: "Do you support LLM fine-tuning?", answer: "Yes, we architect efficient parameter-efficient fine-tuning (PEFT/LoRA) pipelines and RAG systems for enterprise LLM adoption." }
      ]
    }
  },
  {
    id: 'cloud-finops',
    title: 'Cloud FinOps & Cost Intelligence',
    description: 'Maximize cloud unit economics through granular allocation, anomaly detection, and rate optimization.',
    icon: DollarSign,
    details: [
      "Unit Economic Analysis",
      "Spot Instance Orchestration",
      "RI/Savings Plan Strategy",
      "Kubernetes Cost Allocation"
    ],
    fullContent: {
      longDescription: "Cloud spend should track with business value, not operational inefficiency. Our FinOps practice brings financial rigor to variable cloud opex. We implement granular cost allocation strategies that create visibility into unit economics, enabling engineering teams to take ownership of their spend. We don't just cut costs; we optimize the efficiency of every dollar spent, balancing performance requirements with budget constraints through advanced rate optimization and architectural tuning.",
      secondaryHeadline: "Financial Accountability for Engineering",
      secondaryDescription: "We shift cloud cost left. By giving engineers visibility into the cost of their architecture decisions, we turn optimization from a monthly chore into a continuous engineering discipline.",
      subServices: [
        {
          id: "cost-visibility-allocation",
          title: "Visibility & Unit Economics",
          description: "Complete cost allocation tags and dashboards to understand Cost Per Tenant/Transaction.",
          features: ["Tagging Strategy", "Cost Dashboards", "Unit Metrics", "Budget Alerts"],
          fullContent: {
            longDescription: `You can't manage what you can't measure. We solve the "Black Box" billing problem by implementing a comprehensive tagging strategy and cost allocation framework. We move beyond aggregate monthly bills to precise Unit Economics: knowing exactly how much it costs to serve a specific customer, API call, or feature. This data empowers engineering to make trade-off decisions and finance to forecast accurately.`,
            kpis: [
                { value: "98%", label: "Cost Allocation Tagging" },
                { value: "Real-time", label: "Spend Visibility" },
                { value: "100%", label: "Budget Coverage" }
            ],
            process: [
                { title: "Tagging Architecture", desc: "Defining a mandatory tagging schema (CostCenter, Env, Service, Owner) and enforcing it via Policy-as-Code." },
                { title: "Dashboarding", desc: "Building custom visualizations in QuickSight/Looker showing trends and anomalies." },
                { title: "Unit Metric Modeling", desc: "Correlating billing data with business metrics (e.g., DAU) to derive unit costs." },
                { title: "Anomaly Detection", desc: "Setting up alerts for sudden spend spikes to catch runaway resources early." }
            ],
            deliverables: [
                "Tagging Governance Policy",
                "Executive Cost Dashboards",
                "Unit Economics Report",
                "Anomaly Alerting System"
            ],
            techStack: ["AWS Cost Explorer", "Kubecost", "CloudHealth", "Vantage", "Datadog"],
            benefits: [
              { title: "Accountability", desc: "Showback/Chargeback models make teams responsible for their own cloud usage." },
              { title: "Forecasting", desc: "Predict future spend based on business growth metrics rather than guessing." },
              { title: "Margin Protection", desc: "Ensure your SaaS pricing actually covers your infrastructure COGS." }
            ]
          }
        },
        {
          id: "rate-optimization-strategy",
          title: "Rate Optimization",
          description: "Strategic management of Reserved Instances (RIs) and Savings Plans to minimize base rates.",
          features: ["Commitment Planning", "Coverage Analysis", "Marketplace Arbitrage", "Renewal Strategy"],
          fullContent: {
            longDescription: `Paying on-demand prices is a tax on lack of planning. We analyze your usage patterns to construct a layered commitment strategy. We mix Compute Savings Plans for flexibility with specific Reserved Instances for deep discounts, targeting 80-90% coverage without locking you into obsolete technology. We manage the lifecycle of these commitments to ensure you never waste a dollar on unused reservations.`,
            kpis: [
                { value: "> 90%", label: "Effective Savings Rate" },
                { value: "95%", label: "Commitment Utilization" },
                { value: "-30%", label: "Compute Unit Cost" }
            ],
            process: [
                { title: "Usage Analysis", desc: "Analyzing historical compute, database, and cache usage to identify baselines." },
                { title: "Strategy Modeling", desc: "Simulating different SP/RI combinations to find the optimal break-even point." },
                { title: "Execution", desc: "Purchasing commitments incrementally to layer expirations and reduce risk." },
                { title: "Review Cadence", desc: "Quarterly reviews to adjust strategy based on roadmap changes (e.g., migration to Graviton)." }
            ],
            deliverables: [
                "Commitment Strategy Plan",
                "Purchase Recommendations",
                "Savings Analysis Report",
                "Utilization Alerts"
            ],
            techStack: ["AWS Cost Explorer", "ProsperOps", "Eco", "Spot.io"],
            benefits: [
              { title: "Immediate ROI", desc: "Instant reduction in monthly bills with zero architectural changes." },
              { title: "Flexibility", desc: "Strategies designed to allow for architectural shifts (e.g., moving to serverless) without penalty." },
              { title: "Risk Management", desc: "Avoiding over-commitment that leads to wasted shelfware." }
            ]
          }
        },
        {
          id: "spot-instance-orchestration",
          title: "Spot Instance Orchestration",
          description: "Run production workloads on 90% cheaper Spot instances with zero downtime.",
          features: ["Fault Tolerance", "Automated Fallback", "Container Packing", "Diversified Pools"],
          fullContent: {
            longDescription: `Spot instances offer massive savings but come with the risk of interruption. We engineer your workloads to be "Spot Ready." Using tools like Karpenter or Spot.io, we orchestrate stateless containers and batch jobs to run on Spot, handling interruptions gracefully. If Spot capacity dries up, our systems automatically fall back to On-Demand, ensuring reliability is never compromised for cost.`,
            kpis: [
                { value: "-70%", label: "Compute Savings" },
                { value: "99.99%", label: "Service Uptime" },
                { value: "Auto", label: "Recovery" }
            ],
            process: [
                { title: "Workload Qualification", desc: "Identifying stateless services and batch jobs suitable for Spot (e.g., CI runners, API servers)." },
                { title: "Node Provisioning", desc: "Configuring Karpenter/AutoScaling Groups to use diversified instance families." },
                { title: "Handling Interruption", desc: "Implementing graceful shutdown handlers to drain connections when a Spot termination notice arrives." },
                { title: "Fallback Logic", desc: "Ensuring immediate failover to On-Demand if Spot pools are exhausted." }
            ],
            deliverables: [
                "Spot Orchestration Architecture",
                "Karpenter Configuration",
                "Resilience Test Report",
                "Cost Savings Verification"
            ],
            techStack: ["Karpenter", "Spot.io", "AWS Auto Scaling", "Termination Handler"],
            benefits: [
              { title: "Massive Savings", desc: "Run compute-intensive workloads for a fraction of the price." },
              { title: "Reliability", desc: "Modern spot orchestrators manage availability better than manual human intervention." },
              { title: "Scalability", desc: "Scale out much further for the same budget during peak load events." }
            ]
          }
        },
        {
          id: "kubernetes-cost-optimization",
          title: "Kubernetes Cost Optimization",
          description: "Rightsizing pods and nodes to eliminate waste in containerized environments.",
          features: ["Request/Limit Tuning", "Bin Packing", "Waste Detection", "Namespace Allocation"],
          fullContent: {
            longDescription: `Kubernetes clusters are notorious for "slack"—allocated but unused resources. We implement tools like Kubecost and Goldilocks to visualize this waste. We tune pod requests and limits based on actual utilization data (VPA), and use advanced scheduling (Karpenter) to bin-pack pods tightly onto the most efficient node types, eliminating the "Swiss Cheese" fragmentation problem.`,
            kpis: [
                { value: "> 80%", label: "Node Utilization" },
                { value: "-40%", label: "Cluster Cost" },
                { value: "Auto", label: "Rightsizing" }
            ],
            process: [
                { title: "Efficiency Audit", desc: "Measuring the delta between requested CPU/RAM and actual usage." },
                { title: "Rightsizing", desc: "Adjusting deployment specs to match reality, freeing up capacity." },
                { title: "Bin Packing", desc: "Implementing Karpenter to dynamically provision the exact right node size for pending pods." },
                { title: "Zombie Hunting", desc: "Identifying and deleting abandoned workloads and unattached volumes." }
            ],
            deliverables: [
                "Kubecost Implementation",
                "Rightsizing Recommendations",
                "Karpenter Node Provisioning",
                "Cluster Efficiency Report"
            ],
            techStack: ["Kubecost", "Goldilocks", "Karpenter", "VPA", "Prometheus"],
            benefits: [
              { title: "Density", desc: "Fit more workloads onto fewer servers." },
              { title: "Performance", desc: "Prevent CPU throttling caused by improper limits." },
              { title: "Transparency", desc: "Know exactly which team is driving cluster costs up." }
            ]
          }
        }
      ],
      benefits: [
        { title: "Granular Visibility", desc: "Know exactly how much every tenant, microservice, and feature costs to run using advanced tagging strategies." },
        { title: "Immediate Savings", desc: "Identify and eliminate waste (zombie resources, over-provisioning, unattached volumes) for quick wins, typically saving 15-20% immediately." },
        { title: "Cultural Shift", desc: "Empower engineers with cost data in their PRs (Infracost), making cost a first-class architectural metric alongside performance." },
        { title: "Automated Governance", desc: "Budgets and anomaly detection alerts that notify teams via Slack when spend velocity deviates from the norm." }
      ],
      process: [
        { title: "Visibility & Allocation", desc: "Implementing a strict tagging policy to achieve 95%+ cost attribution." },
        { title: "Rate Optimization", desc: "Strategically purchasing Reserved Instances and Savings Plans to cover baseload." },
        { title: "Usage Optimization", desc: "Rightsizing instances and implementing autoscaling policies based on custom metrics." }
      ],
      faqs: [
        { question: "How do you handle shared costs (e.g., Kubernetes)?", answer: "We use tools like Kubecost to allocate cluster costs based on pod resource requests/usage per namespace, annotated with team labels." },
        { question: "What is your Savings Plan strategy?", answer: "We layer Compute Savings Plans (flexibility) with specific Instance Savings Plans (discount) for predictable baseloads, targeting ~80% coverage to allow for elasticity." },
        { question: "How much can we expect to save?", answer: "While it varies, our clients typically see a 20-40% reduction in their monthly cloud bill within the first 90 days." }
      ]
    }
  },
];