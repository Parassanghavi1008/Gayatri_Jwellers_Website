import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'bg-luxury-charcoal/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className={cn(
            "text-2xl md:text-3xl font-serif tracking-widest uppercase transition-colors duration-300",
            isScrolled ? "text-gold" : "text-luxury-charcoal"
          )}>
            Gayathri
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] uppercase transition-colors duration-300",
            isScrolled ? "text-gold/80" : "text-luxury-charcoal/80"
          )}>
            Jewellers
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold",
                location.pathname === link.href 
                  ? "text-gold" 
                  : (isScrolled ? "text-white/90" : "text-luxury-charcoal")
              )}
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </Link>
          ))}
          <button className={cn(
            "p-2 rounded-full transition-all duration-300",
            isScrolled ? "text-gold hover:bg-white/10" : "text-luxury-charcoal hover:bg-black/5"
          )}>
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-gold" : "text-luxury-charcoal"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-charcoal flex flex-col items-center py-10 space-y-8 border-t border-gold/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-serif tracking-widest uppercase",
                  location.pathname === link.href ? "text-gold" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
