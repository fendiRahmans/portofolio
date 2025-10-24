import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Hubungi Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki project? Mari diskusikan bagaimana saya dapat membantu mewujudkan ide Anda
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <MessageSquare className="text-blue-500" size={28} />
                  Mari Terhubung
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Saya selalu terbuka untuk project baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Jangan ragu untuk menghubungi saya!
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group hover:translate-x-2">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600 text-sm">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group hover:translate-x-2">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Telepon</h4>
                      <p className="text-slate-600 text-sm">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group hover:translate-x-2">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Lokasi</h4>
                      <p className="text-slate-600 text-sm">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nama Anda"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Ceritakan tentang project Anda..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
