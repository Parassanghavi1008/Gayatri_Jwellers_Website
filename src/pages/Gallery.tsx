import { motion } from 'motion/react';

const galleryItems = [
  { url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-2", title: "Royal Bridal" },
  { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1", title: "Diamond Halo" },
  { url: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1", title: "Emerald Cut" },
  { url: "https://images.unsplash.com/photo-1588891823957-6c52857f7c3f?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-1", title: "Heritage Gold" },
  { url: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1", title: "Modern Minimal" },
  { url: "https://images.unsplash.com/photo-1512111468-4770824ca3ba?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-2", title: "Precious Stones" },
  { url: "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-2", title: "Watch Luxury" },
];

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-luxury-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Visual Experience</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Masterpieces In <br /> <span className="italic">Every Frame</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 h-[1200px] md:h-[1000px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden ${item.span}`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-serif uppercase tracking-widest text-lg md:text-xl border-l-4 border-gold pl-4">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-luxury-charcoal p-12 text-center text-white">
          <h2 className="text-3xl font-serif mb-4">Wanna see more?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Explore our full physical catalog featuring over 5,000 unique designs at our flagship boutique.</p>
          <button className="bg-gold text-charcoal px-12 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors">
            Get Directions
          </button>
        </div>
      </div>
    </motion.div>
  );
}
