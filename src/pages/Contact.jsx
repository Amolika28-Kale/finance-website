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
  ShieldCheck,
  Link
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation of form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.target.reset();
      
      // Reset success message after 5 seconds
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
    <main className="bg-[#F8FAFC] min-h-screen pt-20">
      
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
            className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight"
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
              <h2 className="text-3xl font-black text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-500 mb-10">
                Reach out via your preferred channel. Our consultants respond to all inquiries within 24 business hours.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: MapPin, label: "Office Location", val: "Pune, Maharashtra, India", color: "text-blue-600 bg-blue-50" },
                { icon: Phone, label: "Phone Number", val: "+91 XXXXX XXXXX", color: "text-brandGold bg-brandGold/10" },
                { icon: Mail, label: "Email Address", val: "info@fipconsultancy.com", color: "text-emerald-600 bg-emerald-50" },
                { icon: Clock, label: "Working Hours", val: "Mon – Sat: 10AM – 7PM", color: "text-purple-600 bg-purple-50" },
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
                    <p className="text-slate-900 font-bold">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 bg-brandBlue rounded-[2.5rem] text-white relative overflow-hidden group">
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
                          placeholder="John Doe"
                          required
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="+91 00000 00000"
                          required
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-2">Interest</label>
                        <select
                          required
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
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandGold transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brandBlue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-70 group shadow-lg shadow-brandBlue/20"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. An expert will contact you shortly.</p>
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

      {/* ================= MAP PLACEHOLDER SECTION ================= */}
      <section className="px-6 pb-24">
        <motion.div 
          {...fadeUp}
          className="max-w-7xl mx-auto h-96 bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-inner grayscale hover:grayscale-0 transition-all duration-1000"
        >
          {/* In a real app, replace this div with a Google Maps iframe or Leaflet component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-brandGold mx-auto mb-4 animate-bounce" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Interactive Map Integration Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA STRIP ================= */}
      <section className="bg-brandBlue py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Prefer instant consultation?</h2>
            <p className="text-white/60">Unlock premium advisory for just ₹499.</p>
          </div>
          <Link 
            to="/pricing" 
            className="group bg-brandGold text-brandBlue px-10 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-white transition-all shadow-xl shadow-black/20"
          >
            Get Started Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}