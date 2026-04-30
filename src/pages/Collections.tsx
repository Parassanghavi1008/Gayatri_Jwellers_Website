import { motion } from 'motion/react';

const products = [
  { id: 1, name: "Regal Gold Choker", price: "₹2,45,000", category: "women", image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Diamond Signet Ring", price: "₹85,000", category: "men", image: "https://images.unsplash.com/photo-1622398476015-50835d0c4c3f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Emerald Studs", price: "₹1,20,000", category: "women", image: "https://images.unsplash.com/photo-1596944229601-52ea466986ad?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Classic Luxury Watch", price: "₹4,10,000", category: "men", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Temple Jewellery Set", price: "₹5,60,000", category: "women", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Gold Cufflinks", price: "₹45,000", category: "men", image: "https://images.unsplash.com/photo-1618035515564-9da913251f1c?auto=format&fit=crop&q=80&w=800" },
];

export default function Collections() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-luxury-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Curated Excellence</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">The 2026 <br /> <span className="italic">Luxury Registry</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        {/* Categories Tab View */}
        <div className="flex flex-col space-y-24">
          {/* Women's Collection */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-gold/20 pb-4">
              <h2 className="text-3xl font-serif uppercase tracking-[0.2em]">Women's <span className="italic text-gold italic">Premium</span></h2>
              <button className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-gold transition-colors">View All Women's</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'women').map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">New Arrival</div>
                    <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-luxury-charcoal text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-gold hover:text-charcoal whitespace-nowrap">
                      Inquire Customization
                    </button>
                  </div>
                  <h3 className="font-serif text-xl mb-2 tracking-wide uppercase">{p.name}</h3>
                  <p className="text-gold font-bold tracking-widest text-sm italic">{p.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Men's Collection */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-gold/20 pb-4">
              <h2 className="text-3xl font-serif uppercase tracking-[0.2em]">Men's <span className="italic text-gold">Elite</span></h2>
              <button className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-gold transition-colors">View All Men's</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'men').map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-luxury-charcoal text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-gold hover:text-charcoal whitespace-nowrap">
                      Inquire Customization
                    </button>
                  </div>
                  <h3 className="font-serif text-xl mb-2 tracking-wide uppercase">{p.name}</h3>
                  <p className="text-gold font-bold tracking-widest text-sm italic">{p.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
