import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgydjJoLTJ2LTJ6bS0yIDJoLTJ2Mmgydi0yem0wLTRoMnYtMmgtMnYyem0tNCAwaC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yem0tMiAyaC0ydjJoMnYtMnptMTYgMGgydjJoLTJ2LTJ6bS0xNC00aC0ydjJoMnYtMnptMTIgMGgydjJoLTJ2LTJ6bS0xMCAwaDJ2LTJoLTJ2MnptOCAwaDJ2LTJoLTJ2MnptLTYgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mb-6 animate-pulse-slow">
              <div className="bg-slate-900 rounded-full p-4">
                <Code2 size={48} className="text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Front-End Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up animation-delay-400">
            Membangun pengalaman web yang indah dan responsif dengan Vue.js, React, dan teknologi modern
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              Vue.js
            </span>
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              Nuxt.js
            </span>
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              React
            </span>
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              Next.js
            </span>
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              Laravel
            </span>
            <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              Flutter
            </span>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
