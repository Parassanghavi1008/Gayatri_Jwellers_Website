import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-luxury-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Connect With Our <br /> <span className="italic">Excellence</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest text-luxury-charcoal">Flagship Boutique</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Address</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Gayathri Mansion, 45th Avenue, <br />
                      Jewellery District, MG Road, <br />
                      Bangalore, Karnataka - 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Enquiries</h4>
                    <p className="text-gray-500 leading-relaxed">+91 98765 43210</p>
                    <p className="text-gray-500 leading-relaxed">080 4455 6677 (Landline)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full shrink-0">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Boutique Hours</h4>
                    <p className="text-gray-500 leading-relaxed">Mon - Sat: 10:30 AM - 08:30 PM</p>
                    <p className="text-gray-500 leading-relaxed">Sun: 11:30 AM - 04:30 PM</p>
                    <p className="text-gold font-bold text-xs mt-2 uppercase tracking-tighter italic">Closed on National Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-luxury-charcoal p-10 text-white rounded shadow-2xl relative overflow-hidden group">
              <h3 className="text-xl font-serif mb-4 flex items-center">
                <MessageCircle className="mr-3 text-gold" />
                WhatsApp Booking
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Connect with our showroom executives directly for quick assistance, product availability, or home trials.
              </p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs inline-block transition-colors"
                rel="noreferrer"
              >
                Chat Now
              </a>
              <Globe size={150} className="absolute -bottom-10 -right-10 text-white/5 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </motion.div>

          {/* Map / Reservation Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-white p-8 md:p-12 shadow-2xl h-full border-b-8 border-gold">
              <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest text-luxury-charcoal">Secure A Consultation</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Phone Number</label>
                    <input type="tel" className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors" placeholder="+91 ..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Preferred Date</label>
                  <input type="date" className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-gray-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Enquiry Nature</label>
                  <select className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-gray-500 bg-transparent">
                    <option>Bridal Collection</option>
                    <option>Men's Luxury</option>
                    <option>Diamond Valuation</option>
                    <option>Repair & Maintenance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Note For Experts</label>
                  <textarea rows={4} className="w-full border border-gray-100 p-4 focus:border-gold outline-none transition-colors text-gray-600 resize-none bg-gray-50" placeholder="Tell us what you're looking for..." />
                </div>
                <button className="w-full bg-luxury-charcoal text-white py-5 font-bold uppercase tracking-widest text-xs transition-all hover:bg-black">
                  Request Reservation
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-24 h-[400px] w-full bg-gray-200 grayscale contrast-125 relative group overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white z-10 transition-opacity duration-500 hover:opacity-0 pointer-events-none">
             <div className="text-center">
               <MapPin className="mx-auto mb-4 text-gold animate-bounce" size={40} />
               <p className="uppercase tracking-[0.4em] font-serif">Visit Flagship Store</p>
             </div>
           </div>
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.49272304!2d77.5945625!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714365710000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
           />
        </div>
      </div>
    </motion.div>
  );
}
