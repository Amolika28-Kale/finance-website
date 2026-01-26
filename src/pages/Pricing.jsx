import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Headphones, 
  BadgeCheck, 
  ArrowRight
} from "lucide-react";

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleStripePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Stripe payment integration is in progress.\n\nRedirecting to secure checkout...");
      setLoading(false);
    }, 1500);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      
      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGold/10 text-brandGold text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Zap size={14} fill="currentColor" /> Instant Onboarding
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Start Your <span className="text-brandGold">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            A one-time professional fee to unlock personalized finance, 
            investment, and property strategies.
          </motion.p>
        </div>
      </section>

      {/* ================= PRICING CARD ================= */}
      <section className="px-6 -mt-12 pb-24 relative z-20">
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-slate-900 p-10 text-center text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BadgeCheck size={120} />
              </div>
              <p className="text-brandGold font-bold uppercase tracking-widest text-xs mb-4">Priority Access</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white/50 mt-2">₹</span>
                <span className="text-6xl font-black">499</span>
              </div>
              <p className="text-white/60 text-sm">One-time consultation fee</p>
            </div>

            {/* Card Body */}
            <div className="p-8 sm:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                What's included <div className="h-[1px] flex-1 bg-slate-100" />
              </h3>

              <ul className="space-y-5 mb-10">
                {[
                  "1-on-1 Strategy Session with FIP Expert",
                  "Comprehensive Eligibility Assessment",
                  "Customized Investment Roadmap",
                  "Priority Access to New Land Listings",
                  "Digital Onboarding & Documentation Support"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 text-slate-600"
                  >
                    <CheckCircle2 className="text-brandGold mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={handleStripePayment}
                disabled={loading}
                className="group relative w-full bg-brandBlue text-white py-5 rounded-2xl font-black text-lg overflow-hidden transition-all active:scale-95 disabled:opacity-70 shadow-xl shadow-brandBlue/20"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Secure Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue via-slate-800 to-brandBlue opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="mt-8 flex items-center justify-center gap-6 grayscale opacity-60">
                <Lock size={16} />
                <CreditCard size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Powered by Stripe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">
          {[
            { 
              title: "Secure Payment", 
              desc: "AES-256 Bank-grade encryption", 
              icon: <ShieldCheck className="text-emerald-500" /> 
            },
            { 
              title: "Fixed Pricing", 
              desc: "No hidden success fees or taxes", 
              icon: <Zap className="text-brandGold" /> 
            },
            { 
              title: "Support", 
              desc: "Dedicated onboarding assistant", 
              icon: <Headphones className="text-blue-500" /> 
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeUp}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <p className="font-bold text-slate-900 mb-1">{item.title}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-2 bg-slate-200/50 rounded-lg mb-6">
            <Lock size={16} className="text-slate-400" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic">
            *This payment covers the initial professional consultation and digital registration 
            within the FIP ecosystem. Any subsequent investments or property acquisitions are 
            governed by independent legal contracts and separate financial terms. 
            All opportunities are subject to KYC and final due diligence.
          </p>
        </div>
      </section>
    </main>
  );
}