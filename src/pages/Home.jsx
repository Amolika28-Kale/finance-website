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
<section 
className="relative min-h-[95vh] flex items-center px-6 py-20 bg-gradient-to-br from-softGold/40 via-white to-softGold/10 overflow-hidden"
>

  {/* Decorative Blurs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-brandGold/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-brandBlue/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* ================= TEXT ================= */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Trust Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 rounded-full bg-white shadow border">
        <ShieldCheck className="text-brandGold" size={18} />
        <span className="text-sm font-semibold text-brandBlue">
          Trusted Finance • Investment • Property Advisors
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] mb-8">
        An Integrated <br />
        <span className="text-brandGold">Finance</span>,{" "}
        <span className="text-brandGold">Investment</span> &{" "}
        <span className="text-brandGold">Property</span>
        <br className="hidden sm:block" />
        Ecosystem
      </h1>

      <p className="text-lg sm:text-xl text-brandBlue/75 mb-12 max-w-xl">
        FIP Consultancy empowers individuals, entrepreneurs, and investors
        through structured finance, asset-backed investments, and professionally
        managed property solutions with transparent returns.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 mb-14">
        <Link
          to="/finance"
          className="group bg-brandBlue text-white px-9 py-4 rounded-full font-semibold flex items-center gap-2 hover:-translate-y-1 hover:shadow-xl transition"
        >
          Explore Finance
          <ArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <Link
          to="/pricing"
          className="border-2 border-brandGold text-brandGold px-9 py-4 rounded-full font-semibold hover:bg-brandGold hover:text-white transition"
        >
          Get Started @ ₹499
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 max-w-lg">
        {[
          { label: "Clients", value: "500+" },
          { label: "ROI Range", value: "20–40%" },
          { label: "Approval", value: "7–14 Days" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-black text-brandBlue">{item.value}</p>
            <p className="text-sm text-brandBlue/60">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* ================= IMAGE / CARD ================= */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
      {/* Glass Card */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2.8rem] shadow-xl border -z-10" />

      <img
        src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop"
        alt="Finance & Investment"
        className="rounded-[2.8rem] shadow-2xl object-cover h-[520px] w-full"
      />

      {/* Floating Tag */}
      <div className="absolute -bottom-6 left-8 bg-brandBlue text-white px-6 py-3 rounded-full font-semibold shadow-lg">
        Asset-Backed | Assured Exit | Transparent ROI
      </div>
    </motion.div>
  </div>
</section>


{/* ================= FIP MODEL ================= */}
<section
  className="relative px-6 py-32 overflow-hidden"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlays */}
  <div className="absolute inset-0 bg-white/90" />
  <div className="absolute top-20 left-10 w-72 h-72 bg-brandGold/20 blur-3xl rounded-full" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-brandBlue/10 blur-3xl rounded-full" />

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
          whileHover={{ y: -10 }}
          className="group relative bg-white/70 backdrop-blur-xl rounded-[2.8rem] p-10 border shadow-lg hover:shadow-2xl transition"
        >
          {/* Icon Ring */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8 bg-gradient-to-br from-brandGold/20 to-brandGold/5 group-hover:scale-110 transition">
            <card.icon className="text-brandGold" size={34} />
          </div>

          <h3 className="text-2xl font-bold mb-3">{card.title}</h3>

          <p className="text-brandBlue/70 mb-6">
            {card.desc}
          </p>

          <ul className="space-y-3 text-brandBlue/75">
            {card.points.map((p, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="text-brandGold mt-1" size={18} />
                {p}
              </li>
            ))}
          </ul>

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-transparent group-hover:border-brandGold/30 transition" />
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* ================= WHY FIP ================= */}
<section className="relative px-6 py-32 bg-softGold/25 overflow-hidden">

  {/* Decorative Blurs */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-brandGold/20 blur-3xl rounded-full" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-brandBlue/10 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center mb-24"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
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

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-3">
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          whileHover={{ y: -10 }}
          className="group bg-white/70 backdrop-blur-xl rounded-[2.8rem] p-10 shadow-lg hover:shadow-2xl transition relative"
        >
          {/* Icon Halo */}
          <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brandGold/20 to-brandGold/5 group-hover:scale-110 transition">
            <c.icon className="text-brandGold" size={34} />
          </div>

          <h3 className="text-xl font-bold mb-4">{c.title}</h3>
          <p className="text-brandBlue/70 leading-relaxed">{c.desc}</p>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-transparent group-hover:border-brandGold/30 transition" />
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* ================= ROI COMPARISON ================= */}
<section className="px-6 py-32 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <motion.div {...fadeUp} className="text-center mb-20">
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        ROI COMPARISON
      </span>

      <h2 className="text-3xl sm:text-5xl font-black mb-6">
        How <span className="text-brandGold">FIP Returns</span> Compare
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-brandBlue/70">
        FIP opportunities are designed to outperform traditional investment
        options while remaining asset-backed and transparent.
      </p>
    </motion.div>

    {/* Bars */}
    <div className="space-y-8 max-w-4xl mx-auto">
      {[
        { label: "Fixed Deposit", value: "6–7%", width: "25%" },
        { label: "Mutual Funds (Avg)", value: "10–12%", width: "40%" },
        { label: "Rental Property", value: "8–10%", width: "35%" },
        { label: "FIP Structured Investments", value: "20–40%", width: "90%", highlight: true },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
        >
          <div className="flex justify-between mb-2 text-sm sm:text-base font-medium">
            <span>{item.label}</span>
            <span className={item.highlight ? "text-brandGold font-bold" : ""}>
              {item.value}
            </span>
          </div>

          <div className="w-full h-4 rounded-full bg-brandBlue/10 overflow-hidden">
            <div
              className={`h-full rounded-full ${
                item.highlight ? "bg-brandGold" : "bg-brandBlue"
              }`}
              style={{ width: item.width }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Note */}
    <p className="mt-12 text-center text-sm text-brandBlue/60">
      *Returns are indicative and depend on asset type, tenure, and market
      conditions. All structures are disclosed before investment.
    </p>
  </div>
</section>


 {/* ================= WHO WE SERVE ================= */}
<section className="relative px-6 py-32 bg-brandBlue text-white overflow-hidden">

  {/* Decorative Elements */}
  <div className="absolute -top-20 left-1/3 w-96 h-96 bg-brandGold/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
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
        structured, and scalable growth.
      </p>
    </motion.div>

    {/* Audience Cards */}
    <div className="grid gap-10 md:grid-cols-3 text-center">
      {[
        {
          icon: Users,
          label: "Individual Investors",
          desc: "Professionals & families building long-term wealth",
        },
        {
          icon: Briefcase,
          label: "Business Owners",
          desc: "Entrepreneurs seeking growth capital & expansion",
        },
        {
          icon: Landmark,
          label: "HNIs & Developers",
          desc: "Large-scale investors and real estate developers",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          whileHover={{ y: -8 }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brandGold/30 to-brandGold/10 group-hover:scale-110 transition">
            <item.icon className="text-brandGold" size={34} />
          </div>

          <p className="text-lg font-bold mb-2">{item.label}</p>
          <p className="text-white/75 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
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
<section className="relative px-6 py-36 bg-gradient-to-br from-softGold/40 via-white to-softGold/20 overflow-hidden">

  {/* Glow Effects */}
  <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brandGold/30 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandBlue/10 blur-3xl rounded-full" />

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="relative max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-xl p-14 sm:p-20 rounded-[3.5rem] border border-brandGold/20 shadow-2xl"
  >
    <span className="inline-block mb-5 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
      GET STARTED
    </span>

    <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
      Start Your <span className="text-brandGold">Wealth Journey</span> Today
    </h2>

    <p className="text-lg sm:text-xl text-brandBlue/70 mb-12 max-w-3xl mx-auto">
      A simple ₹499 consultation unlocks structured finance, high-return
      investments, and professionally managed property opportunities.
    </p>

    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }}>
      <Link
        to="/pricing"
        className="inline-flex items-center gap-4 bg-brandBlue text-white px-16 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition"
      >
        Get Started @ ₹499 <ArrowRight />
      </Link>
    </motion.div>

    <p className="mt-6 text-sm text-brandBlue/60">
      Secure • Transparent • Asset-Backed
    </p>
  </motion.div>
</section>

    </main>
  );
}
