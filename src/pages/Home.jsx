import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Clock,
  Banknote,
  Landmark,
  FileCheck,
  Users,
  LineChart,
  Layers,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import Sparkle from "../components/Sparkle";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

{/* ================= HERO ================= */}
<section className="relative min-h-[95vh] flex items-center px-4 sm:px-6 py-24 via-white to-softGold/10 overflow-hidden">

  {/* Animated Decorative Blurs */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute top-20 left-10 w-72 h-72 bg-brandGold/20 rounded-full blur-3xl"
  />
  <motion.div
    animate={{ y: [0, 30, 0] }}
    transition={{ duration: 12, repeat: Infinity }}
    className="absolute bottom-20 right-10 w-96 h-96 bg-brandBlue/10 rounded-full blur-3xl"
  />

  {/* ✨ Background Sparkles */}
  <div className="absolute inset-0 pointer-events-none">
<Sparkle size={18} delay={0} className="top-28 left-1/3" />
<Sparkle size={14} delay={1.5} className="top-1/2 right-24" />
<Sparkle size={12} delay={2.4} className="bottom-24 left-24" />

  </div>

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* ================= TEXT ================= */}
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >

      {/* Trust Badge */}
      <motion.div
        variants={fadeUp}
        className="relative inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-white shadow border"
      >
        <Sparkle size={4} delay={0.4} className="-top-2 -left-2" />
        <Sparkle size={3} delay={1.2} className="top-1 right-4" />

        <ShieldCheck className="text-brandGold" size={18} />
        <span className="text-sm font-semibold text-brandBlue">
          Trusted Finance • Investment • Property Advisors
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="relative text-4xl sm:text-6xl font-black leading-[1.05] mb-8"
      >
        <Sparkle size={6} delay={0.6} className="-top-4 left-1/3" />
        <Sparkle size={4} delay={1.6} className="top-12 right-10" />

        An Integrated <br />
        <span className="text-brandGold">Finance</span>,{" "}
        <span className="text-brandGold">Investment</span> &{" "}
        <span className="text-brandGold">Property</span>
        <br className="hidden sm:block" />
        Ecosystem
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="text-lg sm:text-xl text-brandBlue/75 mb-14 max-w-xl"
      >
        FIP Consultancy empowers individuals, entrepreneurs, and investors
        through structured finance, asset-backed investments, and professionally
        managed property solutions with transparent returns.
      </motion.p>

      {/* CTA */}
      <motion.div variants={fadeUp} className="flex flex-wrap gap-5 mb-16">
        <div className="relative">
          <Sparkle size={5} delay={0} className="-top-2 right-6" />
          <Sparkle size={3} delay={1} className="bottom-1 left-6" />

          <Link
            to="/finance"
            className="group relative bg-brandBlue text-white px-10 py-4 rounded-full font-semibold flex items-center gap-2 hover:-translate-y-1 hover:shadow-2xl transition"
          >
            Explore Finance
            <ArrowRight className="group-hover:translate-x-1 transition" />
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </Link>
        </div>

        <Link
          to="/pricing"
          className="border-2 border-brandGold text-brandGold px-10 py-4 rounded-full font-semibold hover:bg-brandGold hover:text-white transition"
        >
          Get Started @ ₹499
        </Link>
      </motion.div>

      {/* STATS */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-3 gap-6 max-w-lg"
      >
        {[
          { label: "Clients", value: "500+" },
          { label: "ROI Range", value: "20–40%" },
          { label: "Approval", value: "7–14 Days" },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center bg-white/70 backdrop-blur rounded-2xl py-4 shadow-sm"
          >
            <p className="text-2xl font-black text-brandBlue">
              {item.value}
            </p>
            <p className="text-sm text-brandBlue/60">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>

    {/* ================= IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative"
    >
      <Sparkle size={6} delay={0.8} className="top-6 left-6" />
      <Sparkle size={4} delay={1.8} className="bottom-12 right-10" />

      {/* Glass Frame */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2.8rem] shadow-xl border -z-10" />

      <motion.img
        src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop"
        alt="Finance & Investment"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6 }}
        className="rounded-[2.8rem] shadow-2xl object-cover h-[520px] w-full"
      />

      {/* Floating Tag */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-6 left-8 bg-brandBlue text-white px-6 py-3 rounded-full font-semibold shadow-lg"
      >
        Asset-Backed | Assured Exit | Transparent ROI
      </motion.div>
    </motion.div>
  </div>
</section>

{/* ================= FIP MODEL ================= */}
<section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-softGold/30 via-white to-brandBlue/10">

  {/* ================= ANIMATED BACKGROUND ================= */}

  {/* Gradient mesh glow */}
  <motion.div
    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-brandGold/20 rounded-full blur-[140px]"
  />
  <motion.div
    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brandBlue/15 rounded-full blur-[160px]"
  />

  {/* Subtle grid overlay */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    }}
  />

  {/* Decorative sparkles */}
  <div className="absolute inset-0 pointer-events-none">
    <Sparkle size={16} delay={0.5} className="top-32 left-1/4" />
    <Sparkle size={12} delay={1.6} className="top-1/2 right-32" />
    <Sparkle size={10} delay={2.6} className="bottom-32 left-32" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-24"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        OUR CORE ECOSYSTEM
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        The <span className="text-brandGold">FIP Model</span>
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/70">
        A transparent, asset-backed ecosystem integrating finance, investments,
        and property to create predictable, scalable wealth.
      </p>
    </motion.div>

    {/* ================= CARDS ================= */}
    <div className="grid gap-10 md:grid-cols-3">

      {[
        {
      icon: Wallet,
      title: "Finance Solutions",
      desc: "Structured funding tailored to personal, business, and project needs.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Secured & unsecured loans",
        "Land & property backed finance",
        "Business & project funding",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Opportunities",
      desc: "High-performance investments backed by tangible assets.",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
      points: [
        "20–40% ROI strategies",
        "Short & long-term options",
        "Asset-backed investments",
      ],
    },
    {
      icon: Building2,
      title: "Property Advisory",
      desc: "Professionally managed real estate with assured exits.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Rental income assets",
        "Assured exit strategies",
        "End-to-end management",
      ],
    },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          whileHover={{ y: -10, scale: 1.01 }}
          className="relative group bg-white/80 backdrop-blur-xl rounded-[2.8rem] p-10 border shadow-lg hover:shadow-2xl transition"
        >
          {/* Card glow */}
          <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-brandGold/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

          {/* Sparkle */}
          <Sparkle size={5} delay={i * 0.8} className="top-6 right-8" />

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-brandGold/15 flex items-center justify-center mb-6">
            <card.icon className="text-brandGold" size={30} />
          </div>

          <h3 className="text-2xl font-bold mb-3">{card.title}</h3>

          <p className="text-brandBlue/70 mb-6">{card.desc}</p>

          <ul className="space-y-3 text-brandBlue/80">
            {card.points.map((p, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="text-brandGold mt-1" size={18} />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* ================= WHY FIP ================= */}
<section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-softGold/30 via-white to-brandBlue/5">

  {/* ===== Animated Background Blobs ===== */}
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-brandGold/20 blur-[140px] rounded-full"
  />
  <motion.div
    animate={{ y: [0, 40, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-0 w-[620px] h-[620px] bg-brandBlue/15 blur-[160px] rounded-full"
  />

  {/* ✨ Ambient sparkles */}
  <div className="absolute inset-0 pointer-events-none">
    <Sparkle size={14} delay={0.2} className="top-40 left-1/4" />
    <Sparkle size={10} delay={1.6} className="top-1/2 right-28" />
    <Sparkle size={12} delay={2.4} className="bottom-32 left-24" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-28"
    >
      <span className="inline-block mb-5 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        WHY CHOOSE US
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        Why <span className="text-brandGold">FIP Consultancy</span>
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/70">
        A structured, compliant, and asset-backed approach designed to protect
        capital and accelerate growth.
      </p>
    </motion.div>

    {/* ================= CARDS ================= */}
    <div className="grid gap-12 md:grid-cols-3">

      {[
        {
          icon: ShieldCheck,
          title: "Asset-Backed Security",
          desc: "Every solution is secured against tangible assets, ensuring capital protection and transparency.",
        },
        {
          icon: Layers,
          title: "Integrated Ecosystem",
          desc: "Finance, investments, and property combined under one professional framework.",
        },
        {
          icon: FileCheck,
          title: "100% Compliance",
          desc: "Registered documents, legal due diligence, and structured agreements at every stage.",
        },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.18 }}
          whileHover={{ y: -12 }}
          className="group relative bg-white/80 backdrop-blur-xl rounded-[2.8rem] p-10 shadow-lg hover:shadow-2xl transition"
        >
          {/* Sparkle accent */}
          <Sparkle size={5} delay={i * 0.9} className="top-6 right-8" />

          {/* Icon container */}
          <div className="relative w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-brandGold/25 to-brandGold/5 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <c.icon className="text-brandGold" size={34} />
            </motion.div>

            {/* Icon glow */}
            <div className="absolute inset-0 rounded-2xl bg-brandGold/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
          </div>

          <h3 className="text-xl font-bold mb-4">{c.title}</h3>
          <p className="text-brandBlue/70 leading-relaxed">
            {c.desc}
          </p>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-transparent group-hover:border-brandGold/30 transition" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================= ROI COMPARISON ================= */}
{/* ================= ROI COMPARISON ================= */}
<section className="relative px-6 py-32 overflow-hidden bg-gradient-to-br from-white via-softGold/20 to-white">

  {/* Background accents */}
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-brandGold/15 blur-[140px] rounded-full"
  />
  <motion.div
    animate={{ y: [0, 40, 0] }}
    transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-0 w-[620px] h-[620px] bg-brandBlue/10 blur-[160px] rounded-full"
  />

  {/* ✨ Ambient sparkles */}
  <div className="absolute inset-0 pointer-events-none">
    <Sparkle size={14} delay={0.6} className="top-32 left-1/4" />
    <Sparkle size={10} delay={1.8} className="top-1/2 right-28" />
    <Sparkle size={12} delay={2.6} className="bottom-28 left-20" />
  </div>

  <div className="relative max-w-6xl mx-auto">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-24"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        ROI COMPARISON
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        How <span className="text-brandGold">FIP Returns</span> Compare
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-brandBlue/70">
        FIP opportunities are structured to outperform traditional investment
        avenues while remaining asset-backed, transparent, and legally compliant.
      </p>
    </motion.div>

    {/* ================= BARS ================= */}
    <div className="space-y-10 max-w-4xl mx-auto">

      {[
        { label: "Fixed Deposit", value: "6–7%", percent: 25 },
        { label: "Mutual Funds (Avg)", value: "10–12%", percent: 40 },
        { label: "Rental Property", value: "8–10%", percent: 35 },
        {
          label: "FIP Structured Investments",
          value: "20–40%",
          percent: 90,
          highlight: true,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className="relative"
        >
          {/* Sparkle on highlight */}
          {item.highlight && (
            <Sparkle size={6} delay={0.8} className="-top-3 right-8" />
          )}

          {/* Labels */}
          <div className="flex justify-between mb-3 text-sm sm:text-base font-semibold">
            <span className="text-brandBlue">
              {item.label}
            </span>
            <span
              className={
                item.highlight
                  ? "text-brandGold font-bold"
                  : "text-brandBlue/70"
              }
            >
              {item.value}
            </span>
          </div>

          {/* Bar container */}
          <div className="w-full h-5 rounded-full bg-brandBlue/10 overflow-hidden backdrop-blur">

            {/* Animated fill */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.percent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className={`h-full rounded-full ${
                item.highlight
                  ? "bg-gradient-to-r from-brandGold to-yellow-400 shadow-lg"
                  : "bg-brandBlue"
              }`}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* ================= FOOTNOTE ================= */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-16 text-center text-sm text-brandBlue/60 max-w-3xl mx-auto"
    >
      *Returns are indicative and depend on asset class, tenure, and structure.
      Complete disclosures, documentation, and exit terms are shared before
      investment.
    </motion.p>
  </div>
</section>

{/* ================= WHO WE SERVE ================= */}
<section className="relative px-4 sm:px-6 py-32 bg-brandBlue text-white overflow-hidden">

  {/* Ambient Blurs */}
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-brandGold/15 blur-[140px] rounded-full"
  />
  <motion.div
    animate={{ y: [0, 40, 0] }}
    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-white/10 blur-[160px] rounded-full"
  />

  {/* ✨ Sparkles */}
  <div className="absolute inset-0 pointer-events-none">
    <Sparkle size={14} delay={0.8} className="top-32 left-24" />
    <Sparkle size={10} delay={1.9} className="top-1/2 right-28" />
    <Sparkle size={12} delay={2.7} className="bottom-24 left-1/3" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-24"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-white/10 text-brandGold">
        OUR CLIENTS
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        Who We <span className="text-brandGold">Serve</span>
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/80">
        We partner with individuals and institutions seeking secure,
        structured, and scalable financial growth.
      </p>
    </motion.div>

    {/* ================= CARDS ================= */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.18 } },
      }}
      className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {[
        {
          icon: Users,
          label: "Individual Investors",
          desc: "Professionals & families building long-term, asset-backed wealth",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          icon: Briefcase,
          label: "Business Owners",
          desc: "Entrepreneurs seeking structured capital & expansion support",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
        },
        {
          icon: Landmark,
          label: "HNIs & Developers",
          desc: "High-value investors and real estate development partners",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -14 }}
          className="relative group rounded-[2.8rem] overflow-hidden border border-white/10 shadow-xl"
        >
          {/* Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 1 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/95 via-brandBlue/75 to-brandBlue/40" />

          {/* Glow border */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-transparent group-hover:border-brandGold/40 transition" />

          {/* Content */}
          <div className="relative p-12 text-center">
            <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brandGold/40 to-brandGold/10 backdrop-blur shadow-lg group-hover:scale-110 transition">
              <Sparkle size={4} delay={i * 0.6} className="-top-2 -right-2" />
              <item.icon className="text-brandGold" size={34} />
            </div>

            <p className="text-xl font-bold mb-3">
              {item.label}
            </p>

            <p className="text-white/80 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>




{/* ================= FAQ ================= */}
<section className="relative px-6 py-32 bg-white overflow-hidden">

  {/* Soft Background Accents */}
  <div className="absolute -top-24 right-10 w-80 h-80 bg-brandGold/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 left-10 w-96 h-96 bg-brandBlue/10 blur-3xl rounded-full" />

  <div className="relative max-w-5xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-20"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        NEED HELP?
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        Frequently Asked <span className="text-brandGold">Questions</span>
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/70">
        Clear answers to help you invest, finance, and grow with confidence.
      </p>
    </motion.div>

    {/* FAQ List */}
    <div className="space-y-6">
      {[
        {
          q: "Is the ₹499 consultation fee refundable?",
          a: "The ₹499 consultation fee is a professional advisory charge and is non-refundable. It ensures dedicated analysis, expert guidance, and personalized structuring."
        },
        {
          q: "Are the returns guaranteed?",
          a: "Returns are structured and asset-backed, but market-linked components may vary. All projections are shared transparently with clear documentation."
        },
        {
          q: "Is my investment legally protected?",
          a: "Yes. Every opportunity undergoes legal due diligence with registered agreements, compliance checks, and documented exit strategies."
        },
      ].map((item, i) => (
        <motion.details
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="group bg-white rounded-[2rem] border shadow-md hover:shadow-xl transition overflow-hidden"
        >
          <summary className="cursor-pointer list-none p-6 sm:p-8 flex items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <HelpCircle className="text-brandGold mt-1 shrink-0" />
              <p className="font-semibold text-brandBlue text-base sm:text-lg">
                {item.q}
              </p>
            </div>

            <span className="text-brandGold text-2xl group-open:rotate-45 transition">
              +
            </span>
          </summary>

          <div className="px-6 sm:px-8 pb-8 text-brandBlue/75 text-sm sm:text-base leading-relaxed">
            {item.a}
          </div>
        </motion.details>
      ))}
    </div>
  </div>
</section>


{/* ================= FINAL CTA ================= */}
<section className="relative px-4 sm:px-6 py-28 sm:py-36 overflow-hidden bg-gradient-to-br from-softGold/40 via-white to-softGold/20">

  {/* Ambient Glows */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 14, repeat: Infinity }}
    className="absolute -top-32 left-1/4 w-96 h-96 bg-brandGold/30 blur-[140px] rounded-full"
  />
  <motion.div
    animate={{ y: [0, 30, 0] }}
    transition={{ duration: 18, repeat: Infinity }}
    className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandBlue/15 blur-[160px] rounded-full"
  />

  {/* Subtle Sparkles */}
  <div className="absolute inset-0 pointer-events-none hidden sm:block">
    <Sparkle size={8} delay={0.6} className="top-24 left-1/3" />
    <Sparkle size={6} delay={1.8} className="bottom-28 right-1/3" />
  </div>

  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative max-w-4xl mx-auto text-center"
  >
    {/* Glass Card */}
    <div className="relative bg-white/75 backdrop-blur-xl p-10 sm:p-16 lg:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl border border-brandGold/20">

      {/* Gradient Ring */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brandGold/30 via-transparent to-brandGold/20 opacity-40 pointer-events-none" />

      <span className="relative inline-block mb-6 px-6 py-2 text-xs sm:text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        GET STARTED
      </span>

      <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
        Start Your{" "}
        <span className="text-brandGold">Wealth Journey</span>
        <br className="hidden sm:block" /> Today
      </h2>

      <p className="relative text-base sm:text-lg text-brandBlue/70 mb-10 max-w-3xl mx-auto">
        A simple ₹499 consultation unlocks structured finance, high-return
        investments, and professionally managed property opportunities.
      </p>

      {/* CTA Button */}
      <motion.div
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.96 }}
        className="relative inline-block"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-brandGold/40 blur-xl animate-pulse" />

        <Link
          to="/pricing"
          className="relative inline-flex items-center gap-3 bg-brandBlue text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl transition"
        >
          Get Started @ ₹499
          <ArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>

      <p className="relative mt-6 text-xs sm:text-sm text-brandBlue/60 tracking-wide">
        Secure • Transparent • Asset-Backed
      </p>
    </div>
  </motion.div>
</section>


    </main>
  );
}
