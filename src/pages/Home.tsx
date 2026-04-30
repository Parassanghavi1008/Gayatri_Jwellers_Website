import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Gem, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Gem className="text-gold" size={32} />,
    title: "Purest Gold",
    description: "Every piece is certified 22K and 24K gold, ensuring lifetime value and authenticity."
  },
  {
    icon: <Sparkles className="text-gold" size={32} />,
    title: "Exquisite Design",
    description: "Unique, handcrafted masterpieces that blend traditional heritage with modern elegance."
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Lifetime Gaurantee",
    description: "We provide comprehensive insurance and lifetime maintenance for your precious ornaments."
  }
];

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "The selection at Gayathri Jewellers is unmatched. I bought my wedding necklace here and it's absolutely breathtaking.",
    date: "2 months ago"
  },
  {
    name: "Rajesh Iyer",
    rating: 5,
    text: "Truly professional service. They helped me pick the perfect diamond ring for my anniversary. The quality is top-notch.",
    date: "1 month ago"
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    text: "Luxurious experience from start to finish. The staff is knowledgeable and the designs are very traditional yet unique.",
    date: "3 weeks ago"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-luxury-cream"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070"
            alt="Jewellery Background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-charcoal/30 to-luxury-charcoal/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-6 block"
          >
            Since 1995 • The Art of Excellence
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight shadow-text"
          >
            Timeless <span className="italic font-light">Elegance</span> <br />
            For Your Only <span className="text-gold">Moment</span>
          </motion.h1>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/collections" className="bg-gold hover:bg-gold-light text-luxury-charcoal px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 w-full md:w-auto flex items-center justify-center group shadow-2xl">
              Explore Collections
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link to="/contact" className="border border-white/30 hover:border-white text-white px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 w-full md:w-auto backdrop-blur-sm shadow-xl">
              Book Appointment
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <Clock size={24} className="rotate-180" />
        </motion.div>
      </section>

      {/* Special Offers / Features */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Why Choose Gayathri</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 shadow-xl border-t-4 border-gold group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-serif mb-4 uppercase tracking-widest">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collection Highlight */}
      <section className="bg-luxury-charcoal py-24 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Limited Edition</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">The Heritage <br /> Bridal Collection</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Discover our most prestigious bridal ornaments, designed to honor tradition while celebrating the unique beauty of every bride. Each piece is a testament to our 28-year legacy.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">28+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10 self-center" />
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">50k+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Happy Clients</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden group order-1 md:order-2"
          >
            <img 
               src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=2000"
               alt="Bridal Collection"
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[15px] border-gold/20 m-6" />
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Voices of Luxury</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Customer Testimonials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={r.name} className="p-8 border border-gray-100 relative group hover:border-gold transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{r.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold tracking-widest uppercase text-sm">{r.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 text-luxury-charcoal">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Start Your Journey To <br /> Exceptional Brilliance</h2>
          <p className="mb-10 text-luxury-charcoal/80 uppercase tracking-widest text-sm font-medium">Book a private consultation with our experts</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center underline-offset-8">
             <Link to="/contact" className="bg-luxury-charcoal text-white px-12 py-5 font-bold uppercase tracking-widest text-xs transition-all hover:bg-black">
               Schedule A Visit
             </Link>
             <Link to="/collections" className="border-2 border-luxury-charcoal text-luxury-charcoal px-12 py-5 font-bold uppercase tracking-widest text-xs transition-all hover:bg-luxury-charcoal hover:text-white">
               View Gallery
             </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Gem size={300} className="rotate-25" />
        </div>
      </section>
    </motion.div>
  );
}
