import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Award,
  Layers,
  Users,
  ChevronRight,
  History,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <main className="bg-[#FDFDFD] text-[#0F172A] font-sans overflow-hidden">
      
      {/* ================= HERO: THE ANCHOR ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-20">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-[#FDFDFD] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800" 
            className="w-full h-full object-cover opacity-10"
            alt="Real Estate Landscape"
          />
        </motion.div>

        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGold/10 border border-brandGold/20 text-brandGold text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Established 1995 • Over 3 Decades of Trust
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900"
          >
            Siddhivinayak <br />
            <span className="text-brandGold">Marketing & Developers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            A legacy built on precision, ethics, and a commitment to the Indian 
            housing consumer. Transforming Pune’s skyline one brick at a time.
          </motion.p>
        </div>
      </section>

      {/* ================= STORYTELLING: WHO WE ARE ================= */}
      <section className="px-4 sm:px-6 py-28 max-w-7xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} className="relative group">
            <div className="absolute -inset-4 bg-brandGold/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-700" />
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400"
              alt="Elite Development"
              className="relative z-10 rounded-[2.5rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">
              Leading the <span className="text-brandGold">Pune</span> <br />Real Estate Renaissance
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Since 1995, we’ve been more than just builders; we’ve been the voice 
              of the residential construction industry in Pune.
            </p>
            <div className="space-y-6">
              {[
                { title: "Technological Edge", desc: "Leveraging cutting-edge BIM and sustainable engineering." },
                { title: "Uncompromising Quality", desc: "Rigorous standards that exceed regulatory compliance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brandGold/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brandGold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="px-4 sm:px-6 py-28 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brandGold/5 skew-x-12 transform translate-x-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-5xl font-black mb-20 text-center">
            The <span className="text-brandGold">Core Pillars</span> of Our Operation
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Building2, title: "Residential Mastery", desc: "Designing high-concept living spaces that prioritize human-centric design." },
              { icon: Layers, title: "Strategic Land Use", desc: "Acquiring future-ready land parcels aligned with upcoming infrastructure." },
              { icon: Users, title: "Consumer First", desc: "Acting as an advocate for housing affordability and legal transparency." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brandGold/50 transition-all duration-500"
              >
                <item.icon className="text-brandGold mb-8" size={48} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER MESSAGE ================= */}
      <section className="px-4 sm:px-6 py-32 bg-[#FBFBFE]">
        <div className="max-w-7xl mx-auto grid gap-20 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-brandGold font-bold text-xs uppercase tracking-widest mb-6">
              <History size={16} /> CMD's Message
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">
              A Legacy of <span className="text-brandGold">Integrity</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg italic border-l-4 border-brandGold pl-8">
              <p>At Siddhivinayak Marketing & Developers, our journey began with a simple belief — a home is not just a structure, but the foundation of dreams, security, and generations to come.</p>
              <p>Since 1995, we have remained committed to delivering value-driven projects that balance quality, affordability, and timely delivery. Every project reflects our attention to detail, ethical practices, and customer-first approach.</p>
              <p>As we move forward, our focus remains unchanged — to build homes that stand the test of time and continue to set benchmarks in the real estate industry.</p>

            </div>
            <div className="mt-12">
              <p className="text-xl font-black text-slate-900">Mr. Ramesh Y. Kavediya</p>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Founder & CMD</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brandGold rounded-[3rem] -z-10" />
            <img
              src="/assets/founder.png"
              alt="CMD Ramesh Kavediya"
              className="rounded-[3rem] shadow-2xl object-cover w-full h-[550px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TRACK RECORD & IMPACT ================= */}
      <section className="px-4 sm:px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <h2 className="text-4xl sm:text-6xl font-black mb-6">
                10M+ <br /> <span className="text-brandGold text-3xl sm:text-4xl tracking-normal">Sq. Ft. Developed</span>
              </h2>
              <p className="text-slate-500 mb-10">
                Consistently setting benchmarks in quality, design, and execution 
                across Pune's most iconic landmark locations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: "30+", label: "Years" },
                  { val: "70+", label: "Projects" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-brandBlue">{stat.val}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 bg-brandGold rounded-3xl text-brandBlue">
                  <TrendingUp size={40} className="mb-4" />
                  <h4 className="text-xl font-bold">Exponential Growth</h4>
                  <p className="text-sm font-medium opacity-80">Market leaders in Pune since the late 90s.</p>
                </div>
              </div>
              <div className="space-y-4 sm:pt-12">
                <div className="p-8 bg-brandBlue rounded-3xl text-white">
                  <ShieldCheck size={40} className="mb-4 text-brandGold" />
                  <h4 className="text-xl font-bold">Certified Trust</h4>
                  <p className="text-sm font-medium opacity-80">100% compliance with RERA and urban norms.</p>
                </div>
                <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=800" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GROUP ECOSYSTEM ================= */}
      <section className="px-4 sm:px-6 py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Group Ecosystem</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">A diverse portfolio of trusted entities operating across construction and allied businesses.</p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Sambhav Royal Developers", "Siddhivinayak Rameshwar", "Siddhivinayak Namrata",
            "Siddhivinayak Kohinoor", "Shaashwat Sambhav", "Siddhi Sambhav",
            "Shree Siddhi Sambhav", "Shree Sambhav", "Jainy Associates",
            "S. Saakshi Sambhav", "Vinayak Promoters", "Vishwaraj Construction",
            "RK Developers", "SRK Promoters", "Zantic Agro", "Aloeshell Pharmaa"
          ].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
              className="p-6 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur transition-all flex flex-col justify-between group"
            >
              <div className="w-8 h-1 bg-brandGold/20 group-hover:bg-brandGold mb-4 transition-colors" />
              <p className="font-bold text-slate-700 text-sm leading-tight">{name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VISION: THE FINALE ================= */}
      <section className="relative py-32 bg-brandBlue overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div {...fadeUp}>
            <Eye className="mx-auto text-brandGold mb-8" size={64} strokeWidth={1} />
            <h2 className="text-3xl sm:text-6xl font-black mb-10">Our Vision</h2>
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/80">
              "To meet the aspirations of every segment of society by delivering 
              homes that combine modern design, advanced technology, and superior 
              quality — always offering <span className="text-brandGold font-bold">more than what is promised</span>."
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </section>

    </main>
  );
}