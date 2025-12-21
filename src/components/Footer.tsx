
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Nikhil Rajput</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2024 Nikhil Pramod Rajput. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2">
            Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
