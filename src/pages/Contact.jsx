import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation of form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // WhatsApp Redirection Logic
      const whatsappNumber = "918554855412";
      const messageText = `*New Inquiry from Website*%0A%0A` + 
                          `*Name:* ${formData.name}%0A` + 
                          `*Email:* ${formData.email}%0A` + 
                          `*Phone:* ${formData.phone}%0A` + 
                          `*Interest:* ${formData.interest}%0A` + 
                          `*Message:* ${formData.message}`;
      
      window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, '_blank');
      
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-20 text-slate-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brandGold/5 skew-x-12 transform translate-x-32" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGold/10 border border-brandGold/20 text-brandGold text-xs font-bold uppercase tracking-widest mb-6"
          >
            <MessageSquare size={14} /> Connect with Experts
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black mb-6 tracking-tight"
          >
            Let's Start a <span className="text-brandGold">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 text-base sm:text-lg leading-relaxed"
          >
            Whether you're exploring high-yield investments or professional property advisory, 
            our team is ready to structure a solution that fits your legacy.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTACT GRID ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-12">

          {/* -------- LEFT SIDE: INFO TILES -------- */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black mb-6">Contact Information</h2>
              <p className="text-slate-500 mb-10">
                Reach out via your preferred channel. Our consultants respond to all inquiries within 24 business hours.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: MapPin, label: "Office Location", val: "SIDDHIVINAYAK MARKETING & DEVELOPERS, Pune", color: "text-blue-600 bg-blue-50" },
                { icon: Phone, label: "Phone Number", val: "+91 85548 55412", color: "text-brandGold bg-brandGold/10" },
                { icon: Mail, label: "Email Address", val: "info.fipconsultancy@gmail.com", color: "text-emerald-600 bg-emerald-50" },
                { icon: Clock, label: "Working Hours", val: "Mon – Sat: 10:30 AM – 7:30 PM", color: "text-purple-600 bg-purple-50" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all"
                >
                  <div className={`p-4 rounded-2xl ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-bold">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
              <ShieldCheck className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
              <h4 className="text-lg font-bold mb-2">Privacy Assured</h4>
              <p className="text-white/60 text-sm">Your data is encrypted and used strictly for professional consultation purposes.</p>
            </div>
          </motion.div>

          {/* -------- RIGHT SIDE: MODERN FORM -------- */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          onChange={handleChange}
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Interest</label>
                        <select
                          name="interest"
                          required
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all appearance-none"
                        >
                          <option value="">Select Category</option>
                          <option>Finance Solutions</option>
                          <option>Investment Opportunities</option>
                          <option>Property Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-2">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-70 group shadow-lg shadow-black/10"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit & Chat on WhatsApp <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">Details Sent!</h3>
                    <p className="text-slate-500">Opening WhatsApp to continue your consultation...</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-brandGold font-bold text-sm uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="px-6 pb-24">
        <motion.div 
          {...fadeUp}
          className="max-w-7xl mx-auto h-96 bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-inner grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2798679468494!2d73.8776740751915!3d18.51630158257855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c148baaa6aab%3A0x37e7678c9d0032a4!2sSIDDHIVINAYAK%20MARKETING%20%26%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Siddhivinayak Marketing & Developers Map"
          ></iframe>
        </motion.div>
      </section>

    </main>
  );
}