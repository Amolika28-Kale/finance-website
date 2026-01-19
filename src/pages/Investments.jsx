import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Landmark,
  Building2,
  Banknote,
  PieChart,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
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

export default function Investments() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6 py-28 sm:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=1600&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white" />

        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-brandGold/15 text-brandGold text-sm font-semibold">
            ROI • Asset-Backed • Managed
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Strategic{" "}
            <span className="text-brandGold">Investment Opportunities</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80 mb-10">
            Professionally structured investment models delivering consistent,
            asset-backed returns with legal clarity and managed exits.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition"
          >
            Consult @ ₹499 <ArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ================= SHORT TERM ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Short-Term High-Yield Investments
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-2"
          >
            {/* ROI Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border rounded-[2.5rem] p-8 sm:p-12 shadow-sm hover:shadow-2xl transition"
            >
              <TrendingUp className="text-brandGold mb-6" size={42} />
              <p className="text-brandGold text-4xl sm:text-5xl font-black mb-4">
                20–25% P.A.
              </p>
              <p className="font-semibold mb-6">
                High-Yield Short-Term Returns
              </p>

              <ul className="space-y-3 text-brandBlue/80 text-sm sm:text-base">
                {[
                  "Tenure: 6 months – 1 year",
                  "Asset-backed exposure",
                  "Structured exit strategy",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 size={18} className="text-brandGold mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Asset Types */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border rounded-[2.5rem] p-8 sm:p-12 shadow-sm hover:shadow-2xl transition"
            >
              <Landmark className="text-brandGold mb-6" size={42} />
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Eligible Asset Options
              </h3>

              <ul className="space-y-3 text-brandBlue/80 text-sm sm:text-base">
                <li>• Strategic land parcels</li>
                <li>• Residential properties</li>
                <li>• Commercial real estate</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= LONG TERM LAND ================= */}
      <section className="relative px-4 sm:px-6 py-32 bg-brandBlue text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-16 text-center">
            Long-Term Land Investment Strategy
          </motion.h2>

          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-5xl sm:text-6xl font-black text-brandGold mb-4">
              30–40% P.A.
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              High-growth land investments focused on location potential,
              development demand, and professionally managed exits.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center"
          >
            {[
              "3-Year Investment Horizon",
              "Land-Only Asset Focus",
              "Planned & Timed Exit Execution",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur border border-white/20 p-10 rounded-2xl"
              >
                <p className="font-semibold">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RENTAL INCOME ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Monthly Rental Income Investments
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Up to 10% P.A.",
                desc: "Stable monthly rental income with capital appreciation.",
              },
              {
                icon: PieChart,
                title: "Diversified Assets",
                desc: "Residential, commercial & logistics properties.",
              },
              {
                icon: Banknote,
                title: "Managed & Secure",
                desc: "End-to-end leasing, maintenance & payout management.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white border rounded-[2.5rem] p-10 text-center shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="text-brandGold mx-auto mb-6" size={42} />
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-brandBlue/80 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
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

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto text-center text-sm text-brandBlue/60">
          <p>
            *All investments are subject to market risks, legal due diligence,
            and formal agreements. Returns are indicative and may vary.
          </p>
        </div>
      </section>

    </main>
  );
}
