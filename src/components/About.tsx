import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Profil Profesional</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Saya adalah seorang Front-End Developer yang berfokus pada pembuatan aplikasi web dan mobile yang modern, responsif, dan user-friendly. Dengan pengalaman dalam berbagai teknologi, saya selalu berusaha memberikan solusi terbaik untuk setiap proyek.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Keahlian</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Menguasai Vue.js, Nuxt.js, React, Next.js untuk front-end development. Berpengalaman dengan Laravel untuk full-stack projects, dan Flutter untuk mobile app development. Mahir dalam menggunakan Tailwind CSS dan Bootstrap untuk styling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Passion</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Passionate dalam menciptakan pengalaman digital yang seamless dan intuitif. Saya percaya bahwa detail kecil membuat perbedaan besar dalam user experience. Selalu belajar teknologi baru untuk meningkatkan kualitas pekerjaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-400 hover:scale-105">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <GraduationCap className="text-blue-500" size={28} />
                  Teknologi & Tools
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Vue.js & Nuxt.js</span>
                      <span className="text-slate-600">95%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full animate-progress-95"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">React & Next.js</span>
                      <span className="text-slate-600">90%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full animate-progress-90"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Tailwind CSS</span>
                      <span className="text-slate-600">95%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full animate-progress-95"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Laravel</span>
                      <span className="text-slate-600">85%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full animate-progress-85"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">Flutter</span>
                      <span className="text-slate-600">80%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full animate-progress-80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
