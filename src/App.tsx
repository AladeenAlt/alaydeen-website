/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { Instagram, MessageCircle, Mail, ChevronRight, Ruler, CheckCircle2, Menu, X, Loader2 } from "lucide-react";
import { supabase } from "./lib/supabase";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#333333] font-sans selection:bg-[#C8A96A] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#0F0F0F]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-wider text-[#0F0F0F]">ALAYDEEN</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
            <a href="#story" className="hover:text-[#C8A96A] transition-colors">Story</a>
            <a href="#collection" className="hover:text-[#C8A96A] transition-colors">Collection</a>
            <a href="#size-guide" className="hover:text-[#C8A96A] transition-colors">Size Guide</a>
            <a href="#order" className="bg-[#0F0F0F] text-white px-6 py-2.5 hover:bg-[#C8A96A] transition-colors">Order Now</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#F5F3EE] border-b border-[#0F0F0F]/5 p-6 flex flex-col gap-4 uppercase tracking-widest text-sm">
            <a href="#story" onClick={() => setIsMenuOpen(false)}>Story</a>
            <a href="#collection" onClick={() => setIsMenuOpen(false)}>Collection</a>
            <a href="#size-guide" onClick={() => setIsMenuOpen(false)}>Size Guide</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="text-[#C8A96A]">Order Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
           src="/images/landing-preview.png"
           alt="Luxury Thobe"
           className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F3EE]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0F0F0F] mb-6 leading-tight">
              Modern Middle Eastern <span className="italic text-[#C8A96A]">Elegance</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-[#333333]/80 mb-10 font-light max-w-2xl mx-auto">
              Luxury thobes designed for confidence, comfort and tradition. Tailored for the modern gentleman in Bangladesh.
            </p>
            <a 
              href="#collection" 
              className="inline-flex items-center gap-2 bg-[#0F0F0F] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#C8A96A] transition-all duration-300"
            >
              Explore Collection <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F0F0F] mb-8">The Alaydeen Heritage</h2>
            <div className="w-12 h-0.5 bg-[#C8A96A] mx-auto mb-8"></div>
            <p className="text-lg leading-relaxed text-[#333333]/80 font-light">
              Alaydeen was born from a desire to bring the immaculate tailoring and premium fabrics of Gulf fashion to Bangladesh. We believe a thobe is more than just a garment; it is a statement of dignity, faith, and refined taste. Every piece in our collection is crafted with meticulous attention to detail, ensuring you look and feel your absolute best for Jummah, Eid, and life's most special occasions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F0F0F] mb-4">Signature Collection</h2>
              <p className="text-[#333333]/60 uppercase tracking-widest text-sm">Timeless Elegance</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Royal White Thobe",
                desc: "Crisp, immaculate, and timeless. Crafted from premium Japanese cotton blend.",
                price: "৳ 4,500",
                img: "/images/royal-white-thobe.png"
              },
              {
                name: "Midnight Black Thobe",
                desc: "Bold and sophisticated. Features a matte finish with subtle sheen under light.",
                price: "৳ 4,800",
                img: "/images/midnight-black-thobe.png"
              },
              {
                name: "Sand Beige Thobe",
                desc: "Warm and versatile. Perfect for daytime events and summer gatherings.",
                price: "৳ 4,500",
                img: "/images/sand-beige-thobe.png"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#F5F3EE]">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a href="#order" className="bg-white text-[#0F0F0F] px-6 py-3 uppercase tracking-widest text-xs hover:bg-[#C8A96A] hover:text-white transition-colors">
                        Order Now
                      </a>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-[#0F0F0F] mb-2">{item.name}</h3>
                  <p className="text-sm text-[#333333]/70 mb-4 font-light leading-relaxed">{item.desc}</p>
                  <div className="text-[#C8A96A] font-medium">{item.price}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Alaydeen */}
      <section className="py-24 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Premium Fabric", desc: "Sourced globally for the perfect drape and breathability." },
              { title: "Gulf Inspired", desc: "Authentic cuts and collars inspired by Emirati and Saudi styles." },
              { title: "Tailored Comfort", desc: "Designed to provide ease of movement without compromising silhouette." },
              { title: "Minimal Style", desc: "Clean lines, hidden plackets, and understated elegance." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <CheckCircle2 className="w-8 h-8 text-[#C8A96A] mb-6 mx-auto md:mx-0" />
                  <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Eid Collection Banner */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C8A96A]/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <span className="uppercase tracking-[0.3em] text-[#C8A96A] text-sm font-semibold mb-4 block">Limited Edition</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#0F0F0F] mb-6">The Eid Collection</h2>
            <p className="text-lg text-[#333333]/80 mb-8 font-light">Prepare for the blessed day with our most exclusive designs yet. Pre-orders are now open with limited availability.</p>
            <a href="#order" className="inline-block border border-[#0F0F0F] text-[#0F0F0F] px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#0F0F0F] hover:text-white transition-colors">
              Reserve Yours
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Size Guide & Custom Order */}
      <section id="size-guide" className="py-24 bg-white px-6 border-t border-[#0F0F0F]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="text-[#C8A96A]" />
                <h2 className="font-serif text-3xl text-[#0F0F0F]">Standard Sizing</h2>
              </div>
              <p className="text-[#333333]/70 mb-8 font-light">Our standard sizes are designed to fit the average build perfectly. If you fall between sizes, we recommend opting for a custom fit.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#0F0F0F] text-sm uppercase tracking-wider">
                      <th className="py-4 font-medium">Size</th>
                      <th className="py-4 font-medium">Length</th>
                      <th className="py-4 font-medium">Chest</th>
                      <th className="py-4 font-medium">Shoulder</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#333333]/80">
                    <tr className="border-b border-[#0F0F0F]/10">
                      <td className="py-4 font-medium text-[#0F0F0F]">S (52)</td>
                      <td className="py-4">52"</td>
                      <td className="py-4">20"</td>
                      <td className="py-4">16.5"</td>
                    </tr>
                    <tr className="border-b border-[#0F0F0F]/10">
                      <td className="py-4 font-medium text-[#0F0F0F]">M (54)</td>
                      <td className="py-4">54"</td>
                      <td className="py-4">22"</td>
                      <td className="py-4">17.5"</td>
                    </tr>
                    <tr className="border-b border-[#0F0F0F]/10">
                      <td className="py-4 font-medium text-[#0F0F0F]">L (56)</td>
                      <td className="py-4">56"</td>
                      <td className="py-4">24"</td>
                      <td className="py-4">18.5"</td>
                    </tr>
                    <tr className="border-b border-[#0F0F0F]/10">
                      <td className="py-4 font-medium text-[#0F0F0F]">XL (58)</td>
                      <td className="py-4">58"</td>
                      <td className="py-4">26"</td>
                      <td className="py-4">19.5"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#F5F3EE] p-8 md:p-12">
              <h2 className="font-serif text-2xl text-[#0F0F0F] mb-4">Custom Tailoring</h2>
              <p className="text-[#333333]/70 mb-8 font-light text-sm">For the perfect drape, provide your exact measurements. Our master tailors will craft a thobe uniquely yours.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Length (inches)</label>
                  <input type="text" placeholder="e.g. 55" className="w-full bg-white border border-[#0F0F0F]/10 px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Chest (inches)</label>
                  <input type="text" placeholder="e.g. 23" className="w-full bg-white border border-[#0F0F0F]/10 px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Shoulder (inches)</label>
                  <input type="text" placeholder="e.g. 18" className="w-full bg-white border border-[#0F0F0F]/10 px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Sleeve (inches)</label>
                  <input type="text" placeholder="e.g. 24" className="w-full bg-white border border-[#0F0F0F]/10 px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F0F0F] mb-4">Place Your Order</h2>
              <p className="text-[#333333]/70 font-light">Fill out the details below to place your order securely.</p>
            </div>

            <OrderForm />
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-serif text-2xl font-bold tracking-wider mb-4">ALAYDEEN</div>
            <p className="text-white/50 text-sm font-light max-w-xs">Modern Middle Eastern Elegance. Premium thobes for the discerning gentleman in Bangladesh.</p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-[#C8A96A]">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><MessageCircle size={16} /> +880 1234 567890</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={16} /> info@alaydeen.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={16} /> @alaydeen.official</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-[#C8A96A]">Information</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Alaydeen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function OrderForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    thobe: 'Royal White Thobe',
    size: 'M (54)',
    customMeasurements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Helper to determine price based on selection
  const getPrice = (thobeName: string) => {
    if (thobeName === 'Midnight Black Thobe') return 4800;
    return 4500; // Default for others
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    const totalAmount = getPrice(formData.thobe);
    
    try {
      // Send order details to Supabase matching the schema
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            street_address: formData.streetAddress,
            city: formData.city,
            zip_code: formData.zipCode,
            product_name: `${formData.thobe} - Size: ${formData.size}${formData.size === 'Custom' ? ` (${formData.customMeasurements})` : ''}`,
            total_amount: totalAmount,
            // date_time is handled automatically by Supabase's default now()
          }
        ]);

      if (error) {
        console.error('Error saving order to Supabase:', error);
        setSubmitMessage('There was an error saving your order. Please try again.');
        setIsSubmitting(false);
        return;
      }
      
      setSubmitMessage('Order submitted successfully! We will process it shortly.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        thobe: 'Royal White Thobe',
        size: 'M (54)',
        customMeasurements: ''
      });
    } catch (err) {
      console.error('Unexpected error:', err);
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 shadow-sm border border-[#0F0F0F]/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">First Name *</label>
          <input 
            required
            type="text" 
            value={formData.firstName}
            onChange={e => setFormData({...formData, firstName: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Last Name *</label>
          <input 
            required
            type="text" 
            value={formData.lastName}
            onChange={e => setFormData({...formData, lastName: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Email *</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Phone Number *</label>
          <input 
            required
            type="tel" 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Street Address *</label>
        <input 
          required
          type="text"
          value={formData.streetAddress}
          onChange={e => setFormData({...formData, streetAddress: e.target.value})}
          className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">City *</label>
          <input 
            required
            type="text" 
            value={formData.city}
            onChange={e => setFormData({...formData, city: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Zip Code *</label>
          <input 
            required
            type="text" 
            value={formData.zipCode}
            onChange={e => setFormData({...formData, zipCode: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Select Thobe *</label>
          <select 
            value={formData.thobe}
            onChange={e => setFormData({...formData, thobe: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors appearance-none"
          >
            <option>Royal White Thobe</option>
            <option>Midnight Black Thobe</option>
            <option>Sand Beige Thobe</option>
            <option>Eid Collection Special</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2">Size *</label>
          <select 
            value={formData.size}
            onChange={e => setFormData({...formData, size: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors appearance-none"
          >
            <option>S (52)</option>
            <option>M (54)</option>
            <option>L (56)</option>
            <option>XL (58)</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      {formData.size === 'Custom' && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden"
        >
          <label className="block text-xs uppercase tracking-wider text-[#0F0F0F] mb-2 mt-6">Custom Measurements (Length, Chest, Shoulder, Sleeve)</label>
          <input 
            type="text" 
            placeholder="e.g. L:55, C:23, Sh:18, Sl:24"
            value={formData.customMeasurements}
            onChange={e => setFormData({...formData, customMeasurements: e.target.value})}
            className="w-full bg-[#F5F3EE] border border-transparent px-4 py-3 focus:outline-none focus:border-[#C8A96A] transition-colors" 
          />
        </motion.div>
      )}

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0F0F0F] text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#C8A96A] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <><Loader2 size={20} className="animate-spin" /> Processing...</>
        ) : (
          <>Submit Order</>
        )}
      </button>

      {submitMessage && (
        <div className={`text-sm text-center p-3 ${submitMessage.includes('error') ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
          {submitMessage}
        </div>
      )}
    </form>
  );
}
