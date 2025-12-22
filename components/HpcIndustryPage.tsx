import React, { useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Activity, Zap, Layers, Server, 
  Gauge, HardDrive, MonitorCheck, Microscope, 
  Terminal as TerminalIcon, CheckCircle2, AlertTriangle, 
  Network, Lock, ChevronRight, BarChart3, LineChart
} from 'lucide-react';
import { CTA } from './CTA';

export const HpcIndustryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HPC & AI Infrastructure - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-navy-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-8">
                    <Cpu className="w-3 h-3 text-brand" />
                    Industry Focus: HPC & AI
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-900 mb-8 leading-[1.1] tracking-tight">
                    Built for Extreme Scale. <br/>
                    <span className="text-brand">Tuned for Peak Performance.</span>
                </h1>
                <p className="text-xl text-navy-700 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                    We engineer high-performance computing and AI infrastructure where milliseconds, bandwidth, and watts actually matter. From LLM training to quant simulations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                    <Link to="/contact">
                        <Button size="lg" className="shadow-xl shadow-brand/20 group px-8">
                            Get HPC Risk Assessment
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/services/sre-observability">
                        <Button variant="outline" size="lg" className="border-gray-300 text-navy-900 hover:bg-gray-50 font-bold">
                            View Observability Stack
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Hero Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center group hover:border-brand/30">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-navy-900 mb-1">98.5%</div>
                    <div className="text-xs text-navy-500 font-bold uppercase tracking-wider">GPU Utilization (MFU)</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center group hover:border-brand/30">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Network className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-navy-900 mb-1">800 Gb/s</div>
                    <div className="text-xs text-navy-500 font-bold uppercase tracking-wider">RDMA Throughput</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center group hover:border-brand/30">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-navy-900 mb-1">&lt; 15ms</div>
                    <div className="text-xs text-navy-500 font-bold uppercase tracking-wider">Inference Latency</div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. PROBLEM / SOLUTION GRID */}
      <section className="py-20 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                  {/* Problems */}
                  <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm">
                      <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900 mb-8">
                          <AlertTriangle className="w-6 h-6 text-red-500" />
                          Common Scaling Friction
                      </h3>
                      <ul className="space-y-6">
                          {[
                              "GPUs underutilized despite massive cloud spend",
                              "NCCL bottlenecks killing distributed training",
                              "Storage I/O saturation slowing checkpoints",
                              "Monitoring stacks crashing under metric cardinality"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></div>
                                  <span className="text-navy-700 leading-relaxed font-medium">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-navy-900 p-10 rounded-2xl border border-navy-800 shadow-xl text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8 relative z-10">
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                          The DevOpsFarm Advantage
                      </h3>
                      <ul className="space-y-6 relative z-10">
                          {[
                              "Near-peak GPU utilization via topology awareness",
                              "Predictable training and inference performance",
                              "Observability at millisecond resolution",
                              "Cost efficiency without sacrificing speed"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-brand-light mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-200 leading-relaxed font-medium">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. CORE CAPABILITIES (Alternating) */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
              
              {/* Block A: AI & LLM Infra */}
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5">
                      <div className="inline-flex items-center gap-2 mb-4 text-brand font-bold uppercase tracking-widest text-xs">
                          <Layers className="w-4 h-4" />
                          Infrastructure Engineering
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">AI & LLM Training Platforms</h2>
                      <p className="text-navy-700 text-lg mb-8 leading-relaxed">
                          We architect end-to-end platforms for training, fine-tuning, and serving large language models. We handle the orchestration complexity so your data scientists can focus on models.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                          {["Distributed Training", "FSDP / DeepSpeed", "Model Parallelism", "Checkpoint Recovery"].map((tag, i) => (
                              <div key={i} className="px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg text-sm font-bold text-navy-800">
                                  {tag}
                              </div>
                          ))}
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
                          <span>Supported:</span>
                          <span className="text-brand font-bold">PyTorch Lightning</span>
                          <span>•</span>
                          <span className="text-brand font-bold">Ray.io</span>
                          <span>•</span>
                          <span className="text-brand font-bold">JupyterHub</span>
                          <span>•</span>
                          <span className="text-brand font-bold">Triton</span>
                      </div>
                  </div>
                  <div className="lg:col-span-7">
                      <div className="bg-slate-50 rounded-2xl p-2 border border-gray-100 shadow-lg">
                          {/* Visual representation of Distributed Training */}
                          <div className="bg-white rounded-xl p-8 border border-gray-100">
                               <div className="flex justify-between items-center mb-8">
                                   <div className="font-mono text-sm text-gray-500 font-medium">job: llama-3-70b-finetune</div>
                                   <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Running</div>
                               </div>
                               <div className="grid grid-cols-4 gap-4">
                                   {[1,2,3,4].map(i => (
                                       <div key={i} className="space-y-2">
                                           <div className="aspect-square bg-navy-900 rounded-lg flex items-center justify-center relative overflow-hidden group">
                                               <div className="absolute inset-0 bg-brand/20 animate-pulse"></div>
                                               <Cpu className="w-8 h-8 text-white relative z-10" />
                                               <div className="absolute bottom-1 right-1 text-[10px] text-white font-mono opacity-60">GPU {i-1}</div>
                                           </div>
                                           <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                               <div className="h-full bg-green-500 w-[96%]"></div>
                                           </div>
                                       </div>
                                   ))}
                               </div>
                               <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center font-mono text-sm">
                                   <div>
                                       <span className="text-gray-500">Loss:</span> <span className="text-navy-900 font-bold">0.1242</span>
                                   </div>
                                   <div>
                                       <span className="text-gray-500">Tokens/sec:</span> <span className="text-navy-900 font-bold">4,200</span>
                                   </div>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Block B: GPU Optimization */}
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                      <div className="bg-navy-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden text-white border border-navy-800">
                          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
                          
                          <div className="grid grid-cols-2 gap-8 relative z-10">
                               <div className="space-y-2">
                                   <div className="text-gray-400 text-xs font-bold uppercase">NVLink Bandwidth</div>
                                   <div className="text-3xl font-bold text-white">900 GB/s</div>
                                   <div className="h-1 bg-navy-700 rounded-full overflow-hidden">
                                       <div className="h-full bg-brand w-[92%]"></div>
                                   </div>
                               </div>
                               <div className="space-y-2">
                                   <div className="text-gray-400 text-xs font-bold uppercase">Thermal Headroom</div>
                                   <div className="text-3xl font-bold text-green-400">12°C</div>
                                   <div className="h-1 bg-navy-700 rounded-full overflow-hidden">
                                       <div className="h-full bg-green-500 w-[80%]"></div>
                                   </div>
                               </div>
                          </div>
                          
                          <div className="mt-8 pt-8 border-t border-navy-700 space-y-4">
                              <div className="flex items-center justify-between">
                                  <span className="font-mono text-sm text-gray-300">Topology Awareness</span>
                                  <CheckCircle2 className="w-5 h-5 text-brand" />
                              </div>
                              <div className="flex items-center justify-between">
                                  <span className="font-mono text-sm text-gray-300">RDMA Optimization</span>
                                  <CheckCircle2 className="w-5 h-5 text-brand" />
                              </div>
                              <div className="flex items-center justify-between">
                                  <span className="font-mono text-sm text-gray-300">Power Throttling Mitigation</span>
                                  <CheckCircle2 className="w-5 h-5 text-brand" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2">
                      <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold uppercase tracking-widest text-xs">
                          <Zap className="w-4 h-4" />
                          Performance Tuning
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">GPU Performance Optimization</h2>
                      <p className="text-navy-700 text-lg mb-8 leading-relaxed">
                          We squeeze every FLOP out of your hardware. By optimizing topology (PCIe/NVLink/NUMA) and tuning NCCL parameters, we mitigate bottlenecks that standard cloud configs miss.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-accent mt-1" />
                              <span className="text-navy-700">MIG partitioning for mixed workloads</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-accent mt-1" />
                              <span className="text-navy-700">Batch size & memory layout tuning</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. BENCHMARKING (Fixed Background Color) */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6">
                      <TerminalIcon className="w-3 h-3" />
                      Validation First
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Precision Benchmarking</h2>
                  <p className="text-gray-300 text-lg">
                      We don’t trust vendor specs — we validate reality. Before you scale, we establish a hard performance baseline using industry-standard tools.
                  </p>
               </div>

               <div className="grid lg:grid-cols-2 gap-12">
                   {/* Terminal Window */}
                   <div className="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl font-mono text-sm overflow-hidden">
                       <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                           <div className="ml-auto text-xs text-gray-500">ssh user@hpc-cluster-01</div>
                       </div>
                       <div className="p-6 space-y-4">
                           <div>
                               <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> mpirun -np 8 ./nccl_perf -b 8G -e 8G -f 2 -g 1
                           </div>
                           <div className="text-gray-400">
                               # NCCL Performance Test<br/>
                               # Network: InfiniBand HDR100<br/>
                               # GPUs: 8x NVIDIA H100
                           </div>
                           <div className="grid grid-cols-4 gap-4 text-xs mt-2 border-t border-gray-800 pt-2">
                               <div className="text-gray-500">Size</div>
                               <div className="text-gray-500">Time(us)</div>
                               <div className="text-gray-500">Algbw</div>
                               <div className="text-gray-500">Busbw</div>
                               
                               <div className="text-white">8589934592</div>
                               <div className="text-white">12450</div>
                               <div className="text-green-400 font-bold">365.22</div>
                               <div className="text-green-400 font-bold">385.11</div>
                           </div>
                           <div>
                               <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> fio --name=random-write --ioengine=libaio --rw=randwrite --bs=4k
                           </div>
                           <div className="text-gray-300">
                               WRITE: bw=2.4GiB/s (2560MB/s), iops=612k, slat=4us
                           </div>
                       </div>
                   </div>

                   {/* Capabilities List */}
                   <div className="space-y-8 flex flex-col justify-center">
                       {[
                           {
                               title: "NCCL & Interconnect Validation",
                               desc: "We run NCCL all-reduce and all-gather tests to verify non-blocking bandwidth and identify any fabric bottlenecks between nodes."
                           },
                           {
                               title: "Compute Stress Testing",
                               desc: "Execute HPL (High Performance Linpack) and HPCG to benchmark peak FP64 performance and validate memory access patterns."
                           },
                           {
                               title: "Storage I/O Profiling",
                               desc: "Use fio to simulate actual training data loading patterns (random read/write) on Lustre or WEKA parallel file systems."
                           },
                           {
                               title: "Thermal & Power Burn",
                               desc: "Sustain max load for 24h to identify thermal throttling or power delivery issues in the rack before production use."
                           }
                       ].map((item, i) => (
                           <div key={i} className="flex gap-4">
                               <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                   <Gauge className="w-5 h-5 text-brand-light" />
                               </div>
                               <div>
                                   <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
      </section>

      {/* 5. UNIFIED OBSERVABILITY (Updated from SRE) */}
      <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-200 p-10 lg:p-16 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                      <div>
                          <div className="inline-flex items-center gap-2 mb-6 text-brand font-bold uppercase tracking-widest text-xs">
                              <MonitorCheck className="w-4 h-4" />
                              Unified Observability
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                              The Nervous System of Your Cluster
                          </h2>
                          <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                              Performance without reliability is useless. We implement a unified observability stack (Prometheus + Grafana + NVIDIA DCGM) that correlates infrastructure metrics directly with job performance.
                          </p>
                          
                          <div className="space-y-4 mb-10">
                              {[
                                { title: "GPU Health", desc: "Track thermals, power draw, and clock throttling via DCGM." },
                                { title: "Job Profiling", desc: "Real-time MFU (Model Flops Utilization) and throughput." },
                                { title: "Cost Intelligence", desc: "Attribute GPU hours to specific research teams or projects." },
                                { title: "Scheduler Metrics", desc: "Monitor Slurm/K8s pending times and resource fragmentation." }
                              ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-navy-900 block">{item.title}</span>
                                        <span className="text-sm text-gray-600">{item.desc}</span>
                                    </div>
                                </div>
                              ))}
                          </div>

                          <Link to="/services/sre-observability">
                              <Button className="group gap-2">
                                  Explore SRE Solutions
                                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                          </Link>
                      </div>

                      {/* Visual: Observability Bridge */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between h-full">
                           <div className="mb-6 pb-6 border-b border-gray-100">
                               <div className="flex items-center justify-between mb-2">
                                   <h4 className="font-bold text-navy-900">Cluster Health</h4>
                                   <span className="text-xs font-mono text-gray-500 font-bold">last 1h</span>
                               </div>
                               <div className="flex gap-1 h-12 items-end">
                                   {[40, 65, 55, 80, 85, 90, 85, 70, 60, 50, 65, 75, 80, 90, 95].map((h, i) => (
                                       <div key={i} className={`flex-1 rounded-t-sm ${h > 90 ? 'bg-red-500' : 'bg-brand'}`} style={{ height: `${h}%`, opacity: 0.6 + (h/200) }}></div>
                                   ))}
                               </div>
                           </div>
                           
                           <div className="space-y-4">
                               <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-100">
                                   <div className="flex items-center gap-3">
                                       <AlertTriangle className="w-5 h-5 text-red-500" />
                                       <div className="text-sm font-bold text-navy-900">Thermal Throttling: Rack 4</div>
                                   </div>
                                   <div className="text-xs font-mono text-red-600 font-bold">Critical</div>
                               </div>
                               <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-gray-100">
                                   <div className="flex items-center gap-3">
                                       <LineChart className="w-5 h-5 text-blue-500" />
                                       <div className="text-sm font-bold text-navy-900">Training Loss</div>
                                   </div>
                                   <div className="text-xs font-mono text-blue-600 font-bold">0.041 (Stable)</div>
                               </div>
                               <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-gray-100">
                                   <div className="flex items-center gap-3">
                                       <BarChart3 className="w-5 h-5 text-green-500" />
                                       <div className="text-sm font-bold text-navy-900">Est. Cost / Epoch</div>
                                   </div>
                                   <div className="text-xs font-mono text-green-600 font-bold">$428.50</div>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. TECH STACK GRID */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-10">Powered by Modern HPC Stack</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                    "Slurm", "Kubernetes (Volcano)", "NVIDIA DCGM", 
                    "Prometheus", "Grafana", "Apptainer", 
                    "PyTorch Lightning", "Ray.io", "JupyterHub", "Lustre", "WEKA", "InfiniBand"
                ].map((tech, idx) => (
                    <div key={idx} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-navy-700 hover:border-brand hover:text-brand hover:shadow-md transition-all cursor-default">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTA />

    </div>
  );
};