import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Home,
  Key,
  Banknote,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Landmark,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Property() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="overflow-hidden bg-[#FDFDFD] text-[#0F172A] font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Animated Background Image */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop" 
            className="w-full h-[120%] object-cover opacity-20"
            alt="Real Estate background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGold/10 border border-brandGold/20 text-brandGold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Landmark size={14} /> Premier Asset Management
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900"
          >
            Secure Your Wealth in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold via-amber-600 to-brandGold bg-[length:200%_auto] animate-gradient-x">
              Managed Real Estate
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 mb-12 leading-relaxed"
          >
            We simplify property ownership. Benefit from high-yield rental income 
            and asset appreciation through our professionally managed ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/pricing"
              className="group w-full sm:w-auto bg-brandBlue text-white px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-brandBlue/30 transition-all active:scale-95"
            >
              Consult @ ₹499 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= ADVISORY BENTO GRID ================= */}
      <section className="px-4 sm:px-6 py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Advisory Spectrum</h2>
              <p className="text-slate-500">Tailored strategies for every stage of your property journey.</p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Home,
                title: "Sale Advisory",
                img: "https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlUK1X_LKI-HU8APW7XbKHiFx0B122NKETS9prbQYGE=",
                desc: "Maximize exit value with data-driven valuation and expert negotiation."
              },
              {
                icon: Building2,
                title: "Purchase Advisory",
                img: "https://media.istockphoto.com/id/2199765063/photo/senior-couple-meeting-with-financial-advisor-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=WyZ_ryGKHphUiOmIhzHvjqea_4Ki-Cndq3XZHWzmMYU=",
                desc: "Data-led acquisition of high-appreciation assets in growth corridors."
              },
              {
                icon: Key,
                title: "Rental Solutions",
                img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop",
                desc: "Passive income generation with 100% managed tenant lifecycles."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg">
                    <item.icon className="text-brandGold" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RENTAL FOCUS - DARK MODE ================= */}
      <section className="relative px-4 sm:px-6 py-28 bg-brandBlue overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandGold/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">Cashflow-Centric Assets</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Focused on immediate yields and sustainable long-term growth.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { val: "10%", label: "Annual Yield", sub: "Distributed Monthly" },
              { val: "Premium", label: "Asset Quality", sub: "Grade-A Inventory" },
              { val: "Managed", label: "Ownership", sub: "Zero Effort Required" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] text-center group"
              >
                <div className="w-16 h-16 bg-brandGold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandGold transition-colors duration-500">
                  <TrendingUp className="text-brandGold group-hover:text-brandBlue" size={32} />
                </div>
                <p className="text-4xl font-black text-brandGold mb-2">{stat.val}</p>
                <p className="text-white font-bold mb-1 uppercase tracking-widest text-xs">{stat.label}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASSURED EXIT STRATEGY ================= */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-brandGold" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Assured Exit Multipliers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { roi: "15–20%", yr: "Year 01", icon: <Zap /> },
              { roi: "20–30%", yr: "Year 02", icon: <CheckCircle2 /> },
              { roi: "30–40%", yr: "Year 03", icon: <ShieldCheck /> }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative p-1 bg-gradient-to-br from-slate-100 to-white rounded-[2rem] border border-slate-200 group hover:shadow-xl transition-all"
              >
                <div className="bg-white rounded-[1.9rem] p-8">
                  <div className="text-brandGold mb-6">{card.icon}</div>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{card.yr} Exit</p>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{card.roi} ROI</h3>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      className="h-full bg-brandGold" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY & LEGAL ================= */}
      <section className="px-4 sm:px-6 py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black mb-8">Zero-Compromise <br /> <span className="text-brandGold">Legal Framework</span></h2>
            <div className="space-y-8">
              {[
                { title: "Registered Documents", desc: "Properties are legally registered in the client's name from day one.", icon: <FileCheck /> },
                { title: "Escrow Protected", desc: "Structured transaction flows ensuring fund security and compliance.", icon: <ShieldCheck /> },
                { title: "Digital Verification", desc: "Real-time access to land records and legal due diligence reports.", icon: <CheckCircle2 /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-brandGold mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3rem] overflow-hidden border-8 border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXNzdXJlZFN0cmF0ZWd5JTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Legal assurance" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-brandBlue/20" />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 sm:px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto relative rounded-[4rem] bg-brandBlue p-12 sm:p-20 text-center overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brandGold via-amber-400 to-brandGold" />
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-8">
            Build Your <span className="text-brandGold">Property Legacy</span> Today
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-base sm:text-lg leading-relaxed">
            Stop worrying about maintenance and tenants. Join an ecosystem that 
            prioritizes your returns and asset security.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-brandGold text-brandBlue px-12 py-5 rounded-2xl text-xl font-black hover:bg-white transition-all transform hover:-translate-y-2"
          >
            Get Started Now <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}