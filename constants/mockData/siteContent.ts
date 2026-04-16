import { 
  Cloud, Shield, Activity, DollarSign, Cpu, GitBranch, 
  Server, Heart, GraduationCap, Landmark, Zap, Lock, LineChart,
  Search, PenTool, Workflow, TrendingUp, Rocket, Headphones, Wallet,
  Globe, Coffee, Code2, Users, FileText, CheckCircle, Smile, Clock, Briefcase, MessageSquare
} from 'lucide-react';

export const siteContent = {
  general: {
    brandName: "DevOpsFarm",
    tagline: "Empowering engineering teams globally with scalable cloud infrastructure, advanced security, and AI-driven operations.",
    contactEmail: "query@devopsfarm.in",
    contactPhone: "+91 99715 66583 / +91 70143 82263",
    addresses: [
      {
        type: "Headquarters",
        line1: "DevOpsFarm, Bhaskar Circle",
        line2: "Near Sangwan Medical Store, Ratanada",
        line3: "Jodhpur, Rajasthan 342011"
      }
    ],
    socials: {
      twitter: "https://twitter.com/devopsfarm",
      linkedin: "https://www.linkedin.com/company/devopsfarm",
      github: "https://github.com/devopsfarmer"
    }
  },
  
  hero: {
    badge: "Architecting the Future",
    title: {
      line1: "Cloud Infrastructure",
      highlight: "Reimagined."
    },
    description: "We engineer automated, self-healing platforms that empower your team to ship code 10x faster. Stop wrestling with servers; start delivering value.",
    primaryCta: "Start Transformation",
    secondaryCta: "View Case Studies",
    features: [
      "Production-Grade Kubernetes",
      "Zero-Trust Security Frameworks",
      "Self-Healing Infrastructure",
      "Automated Compliance Pipelines",
      "Cloud Cost Intelligence (FinOps)",
      "24/7 SRE & Incident Response",
      "Multi-Cloud Architecture",
      "Legacy App Modernization"
    ]
  },

  stats: [
    { value: "500+", label: "Projects Delivered", desc: "Across 15+ industries", icon: Rocket },
    { value: "99.99%", label: "Average Uptime", desc: "Guaranteed SLA", icon: Activity },
    { value: "$10M+", label: "Cloud Costs Saved", desc: "Through FinOps optimization", icon: Wallet },
    { value: "24/7", label: "Incident Support", desc: "15-min response time", icon: Headphones },
  ],

  process: {
    title: "How We Work",
    description: "A proven framework for cloud excellence.",
    steps: [
      {
        icon: Search,
        title: "Assess",
        desc: "Deep dive into architecture & goals."
      },
      {
        icon: PenTool,
        title: "Architect",
        desc: "Design scalable & secure solutions."
      },
      {
        icon: Workflow,
        title: "Automate",
        desc: "Implement IaC & CI/CD pipelines."
      },
      {
        icon: TrendingUp,
        title: "Optimize",
        desc: "Continuous improvement & cost tuning."
      }
    ]
  },

  techStack: [
    "Kubernetes", "AWS", "Terraform", "Docker", "Prometheus", 
    "Grafana", "GitLab", "Azure", "Google Cloud", "Ansible",
    "ArgoCD", "Datadog", "Python", "Go", "Elasticsearch",
    "Vault", "Istio", "Crossplane", "Pulumi", "Backstage"
  ],

  industries: [
    {
      id: 'saas',
      title: "SaaS & ISVs",
      desc: "Scale multi-tenant architectures and automate onboarding.",
      icon: Server,
      link: "/industries/saas",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 'healthtech',
      title: "HealthTech",
      desc: "HIPAA-compliant infrastructure with Zero Trust security.",
      icon: Heart,
      link: "/industries/healthtech",
      color: "bg-red-50 text-red-500"
    },
    {
      id: 'hpc',
      title: "HPC & AI Infra",
      desc: "Benchmarking and optimization for LLMs and GPUs.",
      icon: Cpu,
      link: "/industries/hpc",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      id: 'fintech',
      title: "FinTech & Payments",
      desc: "PCI-DSS compliant vaults and secure payment gateways.",
      icon: DollarSign,
      link: "/industries/fintech",
      color: "bg-green-50 text-green-600"
    },
    {
      id: 'edtech',
      title: "EdTech",
      desc: "Scalable video learning and FERPA-compliant platforms.",
      icon: GraduationCap,
      link: "/industries/edtech",
      color: "bg-orange-50 text-orange-500"
    },
    {
      id: 'banking',
      title: "Banking & Capital",
      desc: "Legacy modernization for core banking and settlements.",
      icon: Landmark,
      link: "/industries/banking",
      color: "bg-indigo-50 text-indigo-600"
    }
  ],

  testimonials: [
    {
      quote: "DevOpsFarm transformed our deployment process. We went from releasing once a month to multiple times a day.",
      author: "Sarah Jenkins",
      role: "CTO, FinFlow",
    },
    {
      quote: "Their expertise in Kubernetes and cost optimization saved us 40% on our annual AWS bill. Incredible ROI.",
      author: "Marcus Chen",
      role: "VP Engineering, CloudScale",
    },
    {
      quote: "Security was our biggest bottleneck. DevOpsFarm implemented a DevSecOps pipeline that automated our compliance.",
      author: "David Ross",
      role: "Head of Infrastructure, MedSecure",
    },
    {
      quote: "The best partner we have worked with. Their engineers became a true extension of our team.",
      author: "Elena Rodriguez",
      role: "Director of Platform, TechGiant",
    },
    {
      quote: "Zero downtime migration for our payments infrastructure. I couldn't sleep before, now I sleep like a baby.",
      author: "James Wilson",
      role: "VP of Engineering, PayFaster",
    }
  ],

  careers: {
    hero: {
      badge: "We Are Hiring",
      title: "Build the Platform That Builds the World",
      description: "Join a team of principal engineers and architects solving the hardest infrastructure challenges at scale. No red tape, just engineering excellence."
    },
    culture: {
      title: "Our Operating System",
      description: "We are not a traditional consultancy. We function like a high-growth product team.",
      values: [
        {
          title: "Async by Default",
          desc: "We write things down. We value deep work over meetings. If it can be an email or a pull request, it is.",
          icon: FileText
        },
        {
          title: "Shipping > Slides",
          desc: "We don't sell powerpoints. We deliver working code and infrastructure. Outcome over output.",
          icon: Rocket
        },
        {
          title: "Radical Autonomy",
          desc: "You own your roadmap. We hire adults and trust them to make architectural decisions.",
          icon: Smile
        },
        {
          title: "Continuous Growth",
          desc: "We sponsor certifications and conferences. If you aren't learning, you're leaving.",
          icon: TrendingUp
        }
      ]
    },
    benefits: [
      { icon: Globe, title: "100% Remote", desc: "Work from anywhere. We care about output, not time zones." },
      { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage and mental wellness stipends." },
      { icon: Zap, title: "Learning Budget", desc: "$2,000/yr for conferences, courses, and certifications." },
      { icon: Coffee, title: "Home Office Setup", desc: "One-time stipend to build your perfect workspace." },
      { icon: Code2, title: "Open Source", desc: "Paid time to contribute to the OSS tools we rely on." },
      { icon: Users, title: "Retreats", desc: "Annual company-wide offsites in amazing locations." }
    ],
    hiringProcess: [
      {
        step: "01",
        title: "Application",
        desc: "Send us your GitHub or portfolio. No cover letters required. Show us what you've built."
      },
      {
        step: "02",
        title: "Culture Chat",
        desc: "A 30-min casual chat to see if our values align and if we're a good fit for your goals."
      },
      {
        step: "03",
        title: "Technical Deep Dive",
        desc: "60-min discussion on architecture and systems. No whiteboarding, no LeetCode. Real-world scenarios."
      },
      {
        step: "04",
        title: "The Offer",
        desc: "We move fast. If it's a match, expect a competitive offer within 24 hours of the final interview."
      }
    ],
    faqs: [
      { q: "Do you hire internationally?", a: "Yes, we are a remote-first company with entities in the US, UK, and India. We support contractors globally." },
      { q: "What is the tech stack?", a: "We primarily use AWS/GCP, Kubernetes, Terraform, Go, Python, and TypeScript. We love open source." },
      { q: "How much travel is involved?", a: "Minimal. We are remote-first. We have optional offsites twice a year, but client travel is rare." }
    ],
    jobs: [
      {
        title: "Senior Platform Engineer",
        dept: "Engineering",
        loc: "Remote (US/EU)",
        type: "Full-time",
        desc: "Architect Internal Developer Platforms (IDP) using Backstage and Kubernetes for Fortune 500 clients.",
        tags: ["Kubernetes", "Go", "Backstage"]
      }
    ]
  },

  whyUs: {
    title: "Why Leading Teams Choose DevOpsFarm",
    description: "We don't just fix problems; we build systems that prevent them. Our methodology is rooted in engineering excellence, not just consulting hours.",
    pillars: [
      {
        title: 'Automation First',
        description: 'We eliminate toil. If it can be done more than once, we write code to automate it.',
        icon: Zap
      },
      {
        title: 'Cloud-Native Expertise',
        description: 'Deep specialization in Kubernetes, Serverless, and modern container orchestration.',
        icon: GitBranch
      },
      {
        title: 'Security by Design',
        description: 'Security is not an afterthought. It is baked into every pipeline and infrastructure block.',
        icon: Lock
      },
      {
        title: 'Cost-Aware Engineering',
        description: 'We design architectures that scale efficiently without spiraling cloud bills.',
        icon: LineChart
      }
    ]
  },

  cta: {
    badge: "No Excuses. No Wasted Dollars.",
    titleLine1: "Fully Managed Cloud Services and Solutions",
    titleHighlight: "that Deliver Measurable Results",
    description: "Stop bleeding budget on inefficient infrastructure. Get a comprehensive risk assessment and technical roadmap from our Principal Architects.",
    buttonText: "Get Free Risk Assessment",
    subText: "Limited slots available for free assessment this month."
  },

  footer: {
    services: [
      { name: "Platform Engineering", href: "/services/devops-engineering" },
      { name: "Cloud Architecture", href: "/services/cloud-engineering" },
      { name: "SRE & Observability", href: "/services/sre-observability" },
      { name: "DevSecOps & Security", href: "/services/cloud-security" },
      { name: "Cloud FinOps", href: "/services/cloud-finops" },
      { name: "Production MLOps", href: "/services/aiops-mlops" }
      
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers", badge: "HIRING" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-conditions" },
      { name: "Cookie Policy", href: "/cookie-policy" }
    ]
  }
};