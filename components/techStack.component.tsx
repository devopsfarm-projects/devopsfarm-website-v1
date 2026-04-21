'use client';

const techs = [
  "Kubernetes", "AWS", "Terraform", "Docker", "Prometheus", 
  "Grafana", "GitLab", "Azure", "Google Cloud", "Ansible",
  "ArgoCD", "Datadog", "Python", "Go", "Elasticsearch"
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-8 md:py-12 border-y border-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10 text-center">
        <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
          Powered by modern cloud native stacks
        </p>
      </div>
      
      {/* Scrolling Marquee */}
    <div 
  className="relative flex overflow-x-hidden"
  onMouseEnter={e => {
    const track = e.currentTarget.querySelector('.slide-track') as HTMLElement;
    if (track) track.style.animationPlayState = 'paused';
  }}
  onMouseLeave={e => {
    const track = e.currentTarget.querySelector('.slide-track') as HTMLElement;
    if (track) track.style.animationPlayState = 'running';
  }}
>
  {/* Left Fade */}
  <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
  {/* Right Fade */}
  <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

  <div className="slide-track flex animate-slide whitespace-nowrap">
    {techs.map((tech, index) => (
      <div key={index} className="mx-2 md:mx-4">
        <span className="tech-badge inline-block px-4 py-2 md:px-6 md:py-3 rounded-full bg-gray-50 border border-gray-100 text-sm md:text-lg font-semibold text-navy-800 transition-all cursor-default">
  {tech}
</span>
      </div>
    ))}
    {techs.map((tech, index) => (
      <div key={`dup-${index}`} className="mx-2 md:mx-4">
        <span className="tech-badge inline-block px-4 py-2 md:px-6 md:py-3 rounded-full bg-gray-50 border border-gray-100 text-sm md:text-lg font-semibold text-navy-800 transition-all cursor-default">
  {tech}
</span>
       
      </div>
    ))}
  </div>
</div>
    </section>
  );
};