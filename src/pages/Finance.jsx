import { motion } from "framer-motion";
import {
  Wallet,
  ShieldCheck,
  Building2,
  Landmark,
  Banknote,
  FileCheck,
  Gem,
  ArrowRight,
} from "lucide-react";
import Sparkle from "../components/Sparkle";

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

export default function Finance() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

{/* ================= HERO ================= */}
<section className="relative px-4 sm:px-6 py-24 sm:py-36 overflow-hidden bg-gradient-to-br from-softGold/30 via-white to-softGold/10">

  {/* ================= AMBIENT ORBS ================= */}
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-16 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-brandGold/25 rounded-full blur-[120px]"
  />

  <motion.div
    animate={{ y: [0, 40, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-brandBlue/10 rounded-full blur-[140px]"
  />

  {/* ================= SUBTLE GRID PATTERN ================= */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* ================= SPARKLES (DESKTOP ONLY) ================= */}
  <div className="absolute inset-0 pointer-events-none hidden sm:block">
    <Sparkle size={14} delay={0} className="top-28 left-1/3" />
    <Sparkle size={10} delay={1.6} className="top-1/2 right-32" />
    <Sparkle size={8} delay={2.8} className="bottom-24 left-24" />
  </div>

  {/* ================= CONTENT ================= */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative max-w-5xl mx-auto text-center"
  >

    {/* Badge */}
    <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-white/80 backdrop-blur border shadow text-brandGold text-sm font-semibold">
      Finance • Loans • Structuring
    </span>

    {/* Heading */}
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
      Smart & Structured{" "}
      <span className="text-brandGold">Finance Solutions</span>
    </h1>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80 mb-10">
      Tailor-made funding solutions for individuals, entrepreneurs, and
      enterprises — delivered with speed, transparency, and legal clarity.
    </p>

    {/* CTA */}
    <motion.a
      href="/pricing"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 bg-brandBlue text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl transition"
    >
      Consult @ ₹499 <ArrowRight />
    </motion.a>

    {/* Micro trust text */}
    <p className="mt-6 text-sm text-brandBlue/60">
      Secure • Asset-Backed • Fully Compliant
    </p>

  </motion.div>
</section>


{/* ================= LOAN SOLUTIONS ================= */}
<section className="px-4 sm:px-6 py-28 bg-white">
  <div className="max-w-6xl mx-auto">

    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl font-black mb-20 text-center"
    >
      Unsecured & Secured Loan Solutions
    </motion.h2>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-10 sm:grid-cols-2"
    >

      {/* ================= UNSECURED ================= */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group bg-white border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/827709914/photo/page-of-paper-with-words-unsecured-loans-and-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=tc6RnFeVj6WHazyfJTvPHh5kfKw9yyzp7XyHc6z6Ko0="
            alt="Unsecured Loan"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Icon */}
          <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
            <Wallet className="text-brandGold" size={28} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Unsecured Loans
          </h3>

          <p className="text-brandBlue/80 mb-6 text-sm sm:text-base">
            Hassle-free personal and business loans with minimal documentation
            and fast disbursement.
          </p>

          <ul className="space-y-3 text-brandBlue/80 text-sm sm:text-base">
            <li>• Loan up to <span className="font-semibold text-brandGold">₹10 Lakhs</span></li>
            <li>• No collateral required</li>
            <li>• Tenure up to <span className="font-semibold">7 years</span></li>
          </ul>
        </div>
      </motion.div>

      {/* ================= SECURED ================= */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group bg-white border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1226786654/photo/loan-bags-on-a-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=rVTDwfOSglyF2i3PzWRmjbSAs8a67Ak-jgLVFHbk-Yk="
            alt="Secured Business Loan"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Icon */}
          <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
            <ShieldCheck className="text-brandGold" size={28} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Secured / Business Loans
          </h3>

          <p className="text-brandBlue/80 mb-6 text-sm sm:text-base">
            Structured funding for startups, enterprises, and large-scale
            projects with flexible security models.
          </p>

          <ul className="space-y-3 text-brandBlue/80 text-sm sm:text-base">
            <li>
              • Funding from{" "}
              <span className="font-semibold text-brandGold">
                ₹10 Lakhs – ₹10 Crores
              </span>
            </li>
            <li>• Custom deal structuring</li>
            <li>• Faster approvals</li>
          </ul>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>


      {/* ================= PROJECT FINANCE ================= */}
      <section className="relative px-4 sm:px-6 py-32 bg-brandBlue text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-10 text-center">
            Project & Business Finance Structuring
          </motion.h2>

          <motion.p {...fadeUp} className="max-w-4xl mx-auto text-center mb-20 text-white/85">
            Funding structures aligned with project feasibility, cash flow,
            scalability, and long-term growth.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: ShieldCheck, text: "Security-Backed Funding" },
              { icon: Building2, text: "Stake Holding Models" },
              { icon: Banknote, text: "Equity Participation" },
              { icon: FileCheck, text: "PMC-Based Finance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl text-center"
              >
                <item.icon className="mx-auto text-brandGold mb-4" size={34} />
                <p className="font-semibold text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

 {/* ================= LAND & PROPERTY FINANCE ================= */}
<section className="relative px-4 sm:px-6 py-28 bg-softGold/10 overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute -top-24 right-10 w-96 h-96 bg-brandGold/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 left-10 w-72 h-72 bg-brandBlue/10 blur-3xl rounded-full" />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <motion.div
      {...fadeUp}
      className="text-center mb-20"
    >
      <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
        ASSET BACKED FINANCE
      </span>

      <h2 className="text-3xl sm:text-4xl font-black mb-4">
        Land & Property Based Finance
      </h2>

      <p className="max-w-3xl mx-auto text-brandBlue/70 text-sm sm:text-base">
        Unlock the true value of your land and property through structured,
        legally compliant financing models.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {[
        {
          title: "Agricultural Land",
          percent: "Up to 50%",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Residential Property",
          percent: "Up to 60%",
          image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Commercial Property",
          percent: "Up to 70%",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -10 }}
          className="group relative rounded-[2.8rem] overflow-hidden bg-white border shadow-sm hover:shadow-2xl transition"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Icon */}
            <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
              <Landmark className="text-brandGold" size={28} />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              {item.title}
            </h3>

            <div className="text-1xl sm:text-2xl font-black text-brandGold mb-2">
              {item.percent}
            </div>

            <p className="text-sm text-brandBlue/70">
              Loan value calculated on Government Ready Reckoner Rate
            </p>
          </div>

          {/* Hover Border */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-transparent group-hover:border-brandGold/30 transition" />
        </motion.div>
      ))}
    </motion.div>

    {/* Footer Note */}
    <motion.p
      {...fadeUp}
      className="mt-16 text-center text-sm text-brandBlue/60"
    >
      *Final eligibility depends on legal verification, valuation reports,
      and regulatory compliance.
    </motion.p>

  </div>
</section>


      {/* ================= ASSET & TRADE FINANCE ================= */}
      <section className="px-4 sm:px-6 py-28 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-16 text-center">
            Asset & Trade Finance
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2">
            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="bg-white border rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition">
              <Gem className="text-brandGold mb-6" size={40} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Asset-Backed Finance</h3>
              <ul className="space-y-3 text-brandBlue/80 text-sm sm:text-base">
                <li>• Gold & Silver</li>
                <li>• Diamonds & Precious Stones</li>
                <li>• High-value movable assets</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="bg-white border rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition">
              <Banknote className="text-brandGold mb-6" size={40} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Trade & Export Finance</h3>
              <p className="text-brandBlue/80 text-sm sm:text-base">
                Institution-approved finance against export billing ensuring
                uninterrupted working capital flow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 sm:px-6 py-28 text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-gradient-to-br from-softGold/40 to-white p-10 sm:p-16 rounded-[3rem] border border-brandGold/20 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Need Finance? <span className="text-brandGold">Let’s Begin</span>
          </h2>

          <p className="text-base sm:text-lg text-brandBlue/70 mb-10">
            One structured consultation can unlock the right finance solution
            for your needs.
          </p>

          <a
            href="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-12 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition"
          >
            Get Started @ ₹499 <ArrowRight />
          </a>
        </motion.div>
      </section>

    </main>
  );
}
