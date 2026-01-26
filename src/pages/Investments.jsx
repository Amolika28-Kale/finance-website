import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Landmark,
  Banknote,
  PieChart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2, Zap, Building2, Map, LayoutDashboard, ArrowUpRight,
  Home,
  LayoutDashboardIcon,
  Calendar,
  DoorOpen,
  Wallet
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
// Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

export default function Investments() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

{/* ================= HERO ================= */}
<section className="relative px-4 sm:px-6 py-28 sm:py-36 overflow-hidden bg-gradient-to-br from-white via-softGold/20 to-white">

  {/* Animated Gradient Orbs */}
  <motion.div
    animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 left-1/4 w-96 h-96 bg-brandGold/25 blur-[140px] rounded-full"
  />

  <motion.div
    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-brandBlue/15 blur-[160px] rounded-full"
  />

  {/* Decorative Grid (Subtle) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#00000008_1px,transparent_0)] bg-[length:22px_22px]" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative max-w-5xl mx-auto text-center"
  >
    {/* Badge */}
    <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-brandGold/15 text-brandGold text-xs sm:text-sm font-semibold tracking-wide">
      ROI • Asset-Backed • Managed
    </span>

    {/* Heading */}
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
      Strategic{" "}
      <span className="text-brandGold">Investment</span>
      <br className="hidden sm:block" />
      Opportunities
    </h1>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/75 mb-12">
      Professionally structured investment models delivering consistent,
      asset-backed returns with complete legal transparency and
      professionally managed exits.
    </p>

    {/* CTA */}
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      className="relative inline-block"
    >
      {/* Pulse Glow */}
      <span className="absolute inset-0 rounded-full bg-brandGold/40 blur-xl animate-pulse" />

      <Link
        to="/pricing"
        className="relative inline-flex items-center gap-3 bg-brandBlue text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition"
      >
        Consult @ ₹499
        <ArrowRight className="group-hover:translate-x-1 transition" />
      </Link>
    </motion.div>

    {/* Trust Line */}
    <p className="mt-6 text-xs sm:text-sm text-brandBlue/60 tracking-wide">
      Structured • Secure • Transparent
    </p>
  </motion.div>
</section>


{/* ================= SHORT TERM ================= */}
<section className="relative px-4 sm:px-6 py-24 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🌌 Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brandGold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brandBlue/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandGold/10 text-brandGold text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Zap size={14} fill="currentColor" />
            Accelerated Growth
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            Short-Term <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-amber-600">High-Yield</span> Investments
          </motion.h2>
        </div>

        {/* ================= GRID CONTENT ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-6"
        >
          
          {/* Main ROI Card (60% width on desktop) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 group relative bg-white rounded-[2.5rem] p-1 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-brandGold/10 transition-all duration-500"
          >
            <div className="relative h-full bg-white rounded-[2.3rem] overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0JTIwdHJlbmRzfGVufDB8fDB8fHww"
                  alt="Market Trends"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/40 to-transparent" />
                {/* ROI Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg">
                  <p className="text-brandGold font-black text-xl">20-25%</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Annual Return</p>
                </div>
              </div>

              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  Alpha Strategy <ArrowUpRight className="text-brandGold" />
                </h3>
                <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
                  Engineered for investors seeking liquidity without compromising on returns. Our execution focuses on rapid cycles.
                </p>
                <div className="space-y-4">
                  {["Asset-backed exposure", "Low duration (6-12 Months)", "Managed execution"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-brandGold/10 p-1 rounded-full">
                        <CheckCircle2 className="text-brandGold" size={18} />
                      </div>
                      <span className="text-slate-700 font-medium text-sm sm:text-base">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Asset Types Card (40% width on desktop) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-brandBlue rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden group flex-1">
              {/* Abstract Icon BG */}
              <Building2 className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 group-hover:scale-110 transition-transform duration-700" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Eligible Assets</h3>
              
              <div className="grid gap-4 relative z-10">
                {[
                  { icon: <Map size={20} />, title: "Strategic Land", desc: "High-growth corridors" },
                  { icon: <Home size={20} />, title: "Residential", desc: "Prime urban setups" },
                  { icon: <LayoutDashboardIcon size={20} />, title: "Commercial", desc: "Lease-backed stability" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                    <div className="bg-brandGold text-brandBlue p-2 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Call-to-Action Card */}
            {/* <div className="bg-brandGold rounded-[2rem] p-6 flex items-center justify-between group cursor-pointer">
              <span className="font-bold text-brandBlue">View Past Performance</span>
              <div className="w-10 h-10 rounded-full bg-brandBlue text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </div> */}
          </motion.div>

        </motion.div>
      </div>
    </section>

{/* ================= LONG TERM LAND ================= */}
<section className="relative px-4 sm:px-6 py-24 lg:py-36 bg-[#F8FAFC] text-black font-inter overflow-hidden">
      
      {/* 🌌 Cosmic Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brandGold/10 blur-[150px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full opacity-30" />
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-brandGold font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            <span className="w-8 h-[1px] bg-brandGold" />
            Strategic Appreciation
            <span className="w-8 h-[1px] bg-brandGold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black mb-8 tracking-tight"
          >
            Long-Term <span className="text-brandGold">Land</span> Legacy
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-[2rem] max-w-3xl"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl font-black text-brandGold">30–40%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-black/50">Targeted Annual ROI</p>
              </div>
              <div className="hidden sm:block w-[1px] h-16 bg-white/10" />
              <p className="text-black/70 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                We identify high-growth corridors before the market catches up. 
                Focused on infrastructure expansion and institutional development hubs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= STRATEGY CARDS ================= */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "3-Year Horizon",
              desc: "Optimized cycle for maximum valuation jump post-infrastructure.",
              icon: <Calendar className="text-brandGold" />,
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "Land-Only Assets",
              desc: "Zero-depreciation assets selected via satellite & soil data analysis.",
              icon: <Landmark className="text-brandGold" />,
              img: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "Timed Exit",
              desc: "Pre-planned liquidation strategies through our developer network.",
              icon: <DoorOpen className="text-brandGold" />,
              img: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=1000&auto=format&fit=crop"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, delay: i * 0.2 }}
              className="group relative h-[450px] sm:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900"
            >
              {/* Image Layer with Zoom Effect */}
              <div className="absolute inset-0">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-brandGold group-hover:text-brandBlue transition-colors duration-500">
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brandGold transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {card.desc}
                </p>

                {/* Decorative Progress Line */}
                <div className="w-full h-[2px] bg-white/10 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full h-full bg-brandGold"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM METRICS ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-10 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Growth Zones", val: "12+" },
            { label: "Data Points", val: "50k" },
            { label: "Avg. Exit", val: "3.2 Yrs" },
            { label: "Security", val: "100%" }
          ].map((m, idx) => (
            <div key={idx}>
              <p className="text-2xl font-bold text-black">{m.val}</p>
              <p className="text-[10px] uppercase tracking-widest text-brandGold/60 font-bold">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>


      {/* ================= RENTAL INCOME ================= */}
<section className="relative px-4 sm:px-6 py-24 bg-white overflow-hidden">
      
      {/* 💳 Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, size: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brandGold font-bold text-xs uppercase tracking-widest mb-4"
            >
              <Wallet size={16} />
              Passive Cashflow Strategy
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black text-slate-900"
            >
              Monthly <span className="text-brandBlue">Rental Income</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm sm:text-base max-w-xs md:text-right"
          >
            Earn consistent dividends through professionally managed real estate portfolios.
          </motion.p>
        </div>

        {/* ================= INVESTMENT CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              icon: Building2,
              title: "Up to 10% P.A.",
              desc: "Stable monthly rental payouts paired with long-term capital appreciation.",
              stat: "Monthly Payouts",
              color: "bg-blue-50 text-brandBlue"
            },
            {
              icon: PieChart,
              title: "Diversified Assets",
              desc: "Risk-mitigated exposure across Residential, Commercial, and Logistics.",
              stat: "Multi-Sector",
              color: "bg-amber-50 text-brandGold"
            },
            {
              icon: Banknote,
              title: "Managed & Secure",
              desc: "End-to-end leasing and maintenance. You own, we manage the rest.",
              stat: "Hands-Free",
              color: "bg-slate-50 text-slate-600"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                  {item.stat}
                </span>
              </div>

              {/* Card Body */}
              <h3 className="font-black text-2xl mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                {item.desc}
              </p>
              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-transparent via-transparent to-brandGold/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="px-4 sm:px-6 py-20 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-3 text-center"
          >
            {[
              "Asset-Backed Investments",
              "Legal Due Diligence",
              "Transparent Agreements",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center justify-center gap-3 font-semibold"
              >
                <ShieldCheck className="text-brandGold" />
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 sm:px-6 py-28 text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-gradient-to-br from-softGold/40 to-white p-10 sm:p-16 rounded-[3rem] border border-brandGold/20 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Invest with <span className="text-brandGold">Confidence</span>
          </h2>
          <p className="text-base sm:text-lg text-brandBlue/70 mb-10">
            Begin your investment journey with a structured consultation and
            gain access to curated, high-return opportunities.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-12 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition"
          >
            Get Started @ ₹499 <ArrowRight />
          </Link>
        </motion.div>
      </section>


    </main>
  );
}
