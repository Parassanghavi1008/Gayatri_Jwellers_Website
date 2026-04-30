import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-white pt-20 pb-10 px-6 md:px-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6 group">
            <span className="text-2xl font-serif tracking-widest uppercase text-gold">Gayathri</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">Jewellers</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Crafting elegance since 1995. Gayathri Jewellers brings you the finest collection of gold, diamonds, and precious stones.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Collections</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/collections" className="hover:text-gold transition-colors">Men's Luxury</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors">Women's Premium</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors">Wedding Specials</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors">Gemstone Rings</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Visit Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0 mt-1" />
              <span>123 Elite Gold Street, Diamond Plaza, City Center, 560001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>contact@gayathrijewellers.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gold/10 text-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
        © 2026 Gayathri Jewellers. All Rights Reserved. Crafted with Elegance.
      </div>
    </footer>
  );
}
