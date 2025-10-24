import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg">
              <Code2 className="text-white" size={20} />
            </div>
            <span className="text-slate-400">
              © {currentYear} Portfolio. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={18} fill="currentColor" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
