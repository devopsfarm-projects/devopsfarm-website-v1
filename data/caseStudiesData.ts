export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "euro-saas-scale",
    client: "European B2B SaaS Unicorn",
    category: "SaaS",
    title: "Accelerating Delivery & Cutting Cloud Costs by 38%",
    description: "A Series-C SaaS platform modernizes their real-time analytics engine with EKS, GitOps, and FinOps, achieving rapid ROI and scalability.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    challenge: "A fast-growing analytics platform processing 50M+ daily events faced a critical scalability wall. Their infrastructure relied on manually provisioned EC2 instances and legacy Jenkins scripts, leading to 'snowflake' environments and a fragility that halted deployments during peak hours.\n\nLack of effective autoscaling meant cloud costs were growing 2x faster than revenue (overprovisioned compute), while reactive monitoring made incident resolution painfully slow (MTTR > 4 hours).",
    solution: "We executed a comprehensive Cloud-Native modernization strategy over a 4-month engagement:\n\n• **Standardized EKS Foundation:** Consolidated disparate workloads onto Amazon EKS with a consistent multi-tenant architecture using vCluster for isolation.\n• **Infrastructure as Code:** Codified all VPCs, clusters, and RDS instances using Terraform modules, ensuring 100% environment reproducibility.\n• **GitOps Delivery:** Implemented ArgoCD to drive declarative deployments, eliminating configuration drift and enabling one-click rollbacks.\n• **FinOps Optimization:** Configured Karpenter for aggressive node bin-packing and Spot Instance orchestration for stateless workloads.",
    results: [
      "38% reduction in total AWS monthly spend",
      "65% faster deployment frequency (Daily vs Bi-Weekly)",
      "42% faster incident resolution (MTTR)",
      "Zero downtime during subsequent Black Friday"
    ],
    techStack: ["AWS EKS", "Terraform", "ArgoCD", "Karpenter", "Prometheus", "Loki"],
    testimonial: {
      quote: "The DevOps foundation enables our engineering organization to focus on innovation rather than infrastructure complexity. We've shifted from firefighting to feature building.",
      author: "Jonas M.",
      role: "VP of Engineering"
    }
  },
  {
    id: "fintech-payments",
    client: "Global Fortune 500 Bank",
    category: "FinTech",
    title: "Scaling Payment Infrastructure to 50k TPS",
    description: "Migrating a legacy mainframe payment switch to a Kubernetes-based microservices architecture with 99.999% availability.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    challenge: "The client's legacy monolithic payment switch was struggling to handle peak transaction volumes during holiday seasons, resulting in failed transactions and latency spikes over 500ms. \n\nRegulatory requirements (PCI-DSS) made modernization difficult, and the database layer was a single point of failure that locked frequently during high concurrency.",
    solution: "We re-architected the core engine using the Strangler Fig pattern, gradually moving transaction paths to Go microservices on EKS.\n\n• **Event-Driven Architecture:** Implemented MSK (Managed Kafka) to decouple transaction ingestion from processing.\n• **Active-Active Data:** Migrated to Aurora Global Database for multi-region active-active capability with <1s replication lag.\n• **Auto-Scaling:** Utilized KEDA to scale pods based on Kafka topic lag rather than just CPU.",
    results: [
      "Scaled to 50,000 Transactions Per Second (TPS)",
      "99.999% Availability achieved during stress tests",
      "Latency reduced from 500ms to 45ms (p99)",
      "Full PCI-DSS Compliance on new infrastructure"
    ],
    techStack: ["AWS EKS", "Kafka", "Go", "Aurora Global", "KEDA", "Vault"],
    testimonial: {
      quote: "This architecture didn't just save us money; it saved our reputation during the biggest shopping day of the year.",
      author: "Sarah J.",
      role: "CTO, Payments Division"
    }
  },
  {
    id: "healthcare-compliance",
    client: "National Healthcare Provider",
    category: "Healthcare",
    title: "Automating HIPAA Compliance for Velocity",
    description: "Implemented automated compliance pipelines (OPA) and Zero Trust networking, reducing audit preparation time by 80%.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0833860?q=80&w=2070&auto=format&fit=crop",
    challenge: "The provider faced a grueling 6-month manual audit cycle for every major release due to strict HIPAA requirements. This bottleneck stifled innovation, preventing the release of critical patient-facing mobile features.\n\nSecurity reviews were manual spreadsheets, and developer environments drifted significantly from production standards.",
    solution: "We implemented a 'Compliance-as-Code' framework to shift security left:\n\n• **Policy Enforcement:** Used Open Policy Agent (OPA) Gatekeeper to block non-compliant resources (e.g., public LBs, unencrypted disks) at the API level.\n• **Zero Trust Mesh:** Deployed Istio Service Mesh to enforce mTLS encryption for all east-west traffic automatically.\n• **Automated Evidence:** Integrated AWS Audit Manager and Cloud Custodian to generate audit artifacts continuously.",
    results: [
      "Audit preparation reduced from 6 months to 2 weeks",
      "100% encryption coverage for data in transit/rest",
      "Zero critical vulnerabilities in production for 12 months",
      "Enabled bi-weekly release cadence (previously quarterly)"
    ],
    techStack: ["Azure AKS", "Istio", "Open Policy Agent", "HashiCorp Vault", "Trivy"],
    testimonial: {
      quote: "Security was our biggest bottleneck. DevOpsFarm implemented a DevSecOps pipeline that turned compliance into an automated checklist.",
      author: "David R.",
      role: "CISO"
    }
  },
  {
    id: "retail-dr",
    client: "Top 10 US Retailer",
    category: "E-Commerce",
    title: "Achieving Zero Data Loss with Multi-Region DR",
    description: "Designing an Active-Active architecture across 3 regions to survive total cloud region failures with RPO=0.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    challenge: "A regional AWS outage took the client's order management system offline for 4 hours on Cyber Monday, costing millions in lost revenue. Their existing Disaster Recovery plan was 'Active-Passive' with a manual failover time (RTO) of 2 hours and potential data loss (RPO) of 15 minutes.",
    solution: "We designed a true Active-Active multi-region architecture:\n\n• **Global Data Layer:** Migrated key session and cart data to DynamoDB Global Tables for multi-region replication.\n• **Traffic Routing:** Configured Route53 Latency-Based Routing with automated health checks to route users to the nearest healthy region.\n• **Stateless Compute:** Containerized all applications to run statelessly, allowing any region to serve any user request.",
    results: [
      "RPO (Recovery Point Objective) reduced to near-zero",
      "RTO (Recovery Time Objective) reduced to < 60 seconds",
      "Seamless survival of simulated region failure drill",
      "Global latency reduced by 35% for edge users"
    ],
    techStack: ["AWS Lambda", "DynamoDB Global Tables", "Route53", "CloudFront", "Python"],
    testimonial: {
        quote: "We pulled the plug on us-east-1 during our chaos game day, and the customers didn't even notice. Incredible work.",
        author: "James W.",
        role: "VP of Infrastructure"
    }
  },
  {
    id: "ai-research-lab",
    client: "Generative AI Research Lab",
    category: "AI/ML",
    title: "Building an Internal MLOps Platform",
    description: "Creating a self-service IDP for 200+ data scientists, reducing GPU costs by 45% via spot orchestration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    challenge: "Data scientists were spending 40% of their time fighting with Kubernetes YAML and provisioning EC2 instances rather than training models. \n\nGPU costs were spiraling out of control due to idle expensive instances (p4d.24xlarge) being left running over weekends.",
    solution: "We built an Internal Developer Platform (IDP) specific to AI workloads:\n\n• **Self-Service Portal:** Used Backstage to allow scientists to spin up JupyterHub workspaces with one click.\n• **Smart Scheduling:** Implemented Karpenter with Time-Slicing to pack multiple inference models onto single GPUs.\n• **Spot Training:** Architected fault-tolerant training jobs that can resume from checkpoints, allowing the use of 60% cheaper Spot Instances.",
    results: [
      "45% reduction in monthly compute bill",
      "Model deployment time reduced from 3 days to 1 hour",
      "99.5% success rate on Spot Instance reclamation handling",
      "Standardized model serving using KServe"
    ],
    techStack: ["GCP GKE", "Kubeflow", "Karpenter", "Nvidia GPU Operator", "Backstage"],
    testimonial: {
        quote: "Our scientists don't know what Kubernetes is anymore, yet they deploy to it daily. That is the ultimate win.",
        author: "Dr. Marcus C.",
        role: "Head of AI Research"
      }
  },
  {
    id: "logistics-iot",
    client: "Global Logistics Network",
    category: "Logistics",
    title: "Real-Time Fleet Telemetry at Edge",
    description: "Ingesting 1TB+ daily IoT data from 50,000 vehicles with optimized Kafka streams and serverless processing.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    challenge: "The client's fleet generates massive telemetry data (GPS, fuel, temp). Their legacy ingestion pipeline had a 15-minute lag, making real-time route optimization impossible. The system frequently crashed under 'thundering herd' scenarios when trucks reconnected after tunnel exits.",
    solution: "We moved to a highly scalable serverless streaming architecture:\n\n• **Ingestion:** IoT Core to Kinesis Data Streams for elastic buffering of incoming data.\n• **Processing:** Rust-based Lambda functions for ultra-low latency processing and enrichment.\n• **Storage:** TimescaleDB for efficient time-series storage and geospatial querying.",
    results: [
      "Data ingestion latency reduced to < 500ms",
      "Processing costs reduced by 30% (Serverless vs EC2)",
      "System scales automatically from 0 to 100k devices",
      "Real-time dashboard reliability improved to 99.9%"
    ],
    techStack: ["AWS IoT Core", "Kinesis", "Lambda (Rust)", "TimescaleDB", "Grafana"]
  },
  {
    id: "edtech-streaming",
    client: "Global EdTech Platform",
    category: "EdTech",
    title: "Low-Latency Video for 1M+ Students",
    description: "Optimizing video delivery architecture for emerging markets, reducing buffering by 60%.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    challenge: "Students in regions with poor connectivity (SE Asia, LatAm) experienced severe buffering during live classes. High encoding costs were also eating into margins as the user base grew to over 1 million concurrent users.",
    solution: "We implemented a smart Multi-CDN and per-title encoding strategy:\n\n• **Intelligent Routing:** Logic at the edge to select the best performing CDN (Akamai vs CloudFront) based on real-time user telemetry.\n• **Cost-Optimized Encoding:** Automated encoding pipeline using Spot instances and FFmpeg to optimize bitrate ladders based on content complexity.",
    results: [
      "Buffer ratio reduced by 60% globally",
      "Video start-up time improved by 45%",
      "Encoding infrastructure costs slashed by 50%",
      "Seamless support for 1M+ concurrent viewers"
    ],
    techStack: ["AWS MediaConvert", "CloudFront", "Akamai", "Node.js", "Redis"],
    testimonial: {
        quote: "We improved the learning experience for millions of students while cutting our biggest cost center in half.",
        author: "Elena R.",
        role: "Director of Platform"
    }
  }
];