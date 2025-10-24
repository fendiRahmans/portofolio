import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce full-featured dengan sistem pembayaran terintegrasi, manajemen produk, dan dashboard admin. Dibangun dengan Next.js dan Laravel untuk performa optimal.',
    tech: ['Next.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
    icon: ShoppingCart,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Dashboard analytics yang powerful dengan visualisasi data real-time, reporting, dan manajemen user. Menggunakan Vue.js 3 dan Composition API untuk state management.',
    tech: ['Vue.js', 'Nuxt.js', 'Chart.js', 'Bootstrap'],
    icon: Globe,
    color: 'from-teal-500 to-teal-600',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Mobile Finance App',
    description: 'Aplikasi mobile untuk manajemen keuangan pribadi dengan fitur tracking expenses, budgeting, dan financial reports. Dibangun dengan Flutter untuk iOS dan Android.',
    tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    icon: Smartphone,
    color: 'from-blue-500 to-teal-500',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'Platform social media dengan fitur posting, commenting, real-time notifications, dan messaging. Menggunakan React dan Laravel untuk backend API.',
    tech: ['React', 'Laravel', 'Tailwind CSS', 'WebSocket'],
    icon: Globe,
    color: 'from-blue-600 to-blue-700',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'Restaurant Management System',
    description: 'Sistem manajemen restoran lengkap dengan POS, inventory management, reservasi, dan reporting. Full-stack application dengan Nuxt.js dan Laravel.',
    tech: ['Nuxt.js', 'Laravel', 'Tailwind CSS', 'PostgreSQL'],
    icon: ShoppingCart,
    color: 'from-teal-600 to-teal-700',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Task Management App',
    description: 'Aplikasi mobile untuk task management dengan fitur kanban board, team collaboration, dan time tracking. Cross-platform dengan Flutter.',
    tech: ['Flutter', 'Dart', 'REST API', 'Provider'],
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Project Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
          <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
            Berikut adalah beberapa project yang telah saya kerjakan menggunakan berbagai teknologi modern
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className={`bg-gradient-to-br ${project.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-full text-slate-300 group-hover:border-blue-400 group-hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex gap-3 transition-all duration-300 ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Demo</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
