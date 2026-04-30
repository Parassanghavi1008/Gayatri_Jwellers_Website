import { motion } from 'motion/react';
import { Target, Users, Gem, Heart } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-luxury-cream"
    >
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 bg-luxury-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
          >
            Since 1995 • Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif mb-12 tracking-tight leading-tight"
          >
            Crafting Legacy <br /> Through <span className="text-gold italic">Generations</span>
          </motion.h1>
          <div className="w-full h-[1px] bg-white/10" />
        </div>
        {/* Subtle Decorative element */}
        <Gem size={400} className="absolute -right-20 -bottom-20 text-white/5 opacity-5 pointer-events-none" />
      </section>

      {/* Main Philosophy */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Our Mission: <br /> Defining <span className="italic">Pure Purity</span></h2>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Gayathri Jewellers was founded on a simple yet profound desire: to bring the highest quality of craftsmanship to those who value tradition. What started as a small boutique has now grown into a destination for luxury seekers.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed italic">
            "To us, every ornament is a piece of art that carries a soul. We don't just sell jewellery; we preserve memories."
          </p>
          <div className="mt-12">
            <span className="block font-serif text-xl mb-1 uppercase tracking-widest">— Gayathri Devi</span>
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Founder & Creative Director</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10 shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7bc3?auto=format&fit=crop&q=80&w=1000"
               alt="Craftsmanship"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold -z-0 opacity-50" />
        </motion.div>
      </section>

      {/* Value Grid */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <Target className="mx-auto text-gold mb-6" size={40} />
              <h4 className="font-serif text-lg tracking-widest uppercase">Integrity</h4>
              <p className="text-sm text-gray-400">Honest pricing and hallmarked purity certifications for every piece.</p>
            </div>
            <div className="space-y-4">
              <Gem className="mx-auto text-gold mb-6" size={40} />
              <h4 className="font-serif text-lg tracking-widest uppercase">Artisanship</h4>
              <p className="text-sm text-gray-400">Supporting over 200 master craftsmen and their generational techniques.</p>
            </div>
            <div className="space-y-4">
              <Users className="mx-auto text-gold mb-6" size={40} />
              <h4 className="font-serif text-lg tracking-widest uppercase">Client Care</h4>
              <p className="text-sm text-gray-400">Personalized white-glove service and dedicated after-sales support.</p>
            </div>
            <div className="space-y-4">
              <Heart className="mx-auto text-gold mb-6" size={40} />
              <h4 className="font-serif text-lg tracking-widest uppercase">Sustainability</h4>
              <p className="text-sm text-gray-400">Ethically sourced gemstones and responsible mining practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Owners */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-3xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em]">The Visionaries</h2>
           <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group overflow-hidden">
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Owner" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-widest mb-1">Gayathri Devi</h3>
            <p className="text-gold text-xs font-bold uppercase tracking-widest">Founder & CEO</p>
          </div>
          <div className="group overflow-hidden">
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Owner" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-widest mb-1">Vikram Sharma</h3>
            <p className="text-gold text-xs font-bold uppercase tracking-widest">Co-Founder & Lead Designer</p>
          </div>
          <div className="group overflow-hidden">
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Owner" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-widest mb-1">Arjun Reddy</h3>
            <p className="text-gold text-xs font-bold uppercase tracking-widest">Operations Director</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
