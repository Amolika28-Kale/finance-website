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
  show: { transition: { staggerChildren: 0.18 } },
};

export default function Investments() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

      {/* ================= HERO ================= */}
      <section
        className="relative px-6 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-black mb-6">
            Strategic{" "}
            <span className="text-brandGold">Investment Opportunities</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brandBlue/80">
            Professionally structured investment solutions delivering
            consistent returns through asset-backed, transparent, and
            professionally managed models.
          </p>
        </motion.div>
      </section>

      {/* ================= SHORT TERM ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Short-Term Investment Opportunities
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 sm:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
            >
              <TrendingUp className="text-brandGold mb-6" size={40} />
              <p className="text-brandGold text-4xl font-black mb-4">
                20–25% P.A.
              </p>
              <p className="font-semibold mb-6">
                High-Yield Short-Term Returns
              </p>
              <ul className="space-y-3 text-brandBlue/80">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-brandGold mt-1" />
                  Tenure: 6 months – 1 year
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-brandGold mt-1" />
                  Asset-backed investments
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-brandGold mt-1" />
                  Professionally managed execution
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
            >
              <Landmark className="text-brandGold mb-6" size={40} />
              <p className="font-semibold mb-6">Eligible Asset Options</p>
              <ul className="space-y-3 text-brandBlue/80">
                <li>• Land investments</li>
                <li>• Residential properties</li>
                <li>• Commercial properties</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= LONG TERM LAND ================= */}
      <section
        className="relative px-6 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-brandBlue/90" />
        <div className="relative max-w-6xl mx-auto text-white">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-center">
            Long-Term Land Investments
          </motion.h2>

          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-5xl font-black text-brandGold mb-4">
              30–40% P.A.
            </p>
            <p className="text-white/90">
              High-growth land investments focused on strategic locations and
              professionally planned exits.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              "Investment Tenure: 3 Years",
              "Focused on Land Assets Only",
              "Professionally Managed Exit",
            ].map((text, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 p-10 rounded-2xl"
              >
                <p className="font-semibold">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RENTAL INCOME ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Monthly Rental Income Investments
          </motion.h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="border rounded-[2.5rem] p-12 text-center shadow-sm hover:shadow-xl transition">
              <Building2 className="text-brandGold mx-auto mb-6" size={40} />
              <p className="text-brandGold text-4xl font-black mb-4">
                Up to 10% P.A.
              </p>
              <p className="font-semibold mb-2">Stable Rental Returns</p>
              <p className="text-brandBlue/80">
                Monthly income with long-term capital appreciation.
              </p>
            </motion.div>

            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="border rounded-[2.5rem] p-12 text-center shadow-sm hover:shadow-xl transition">
              <PieChart className="text-brandGold mx-auto mb-6" size={40} />
              <p className="font-semibold mb-4">Asset Categories</p>
              <ul className="space-y-2 text-brandBlue/80">
                <li>• Residential flats</li>
                <li>• Commercial shops</li>
                <li>• Warehousing & logistics</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="border rounded-[2.5rem] p-12 text-center shadow-sm hover:shadow-xl transition">
              <Banknote className="text-brandGold mx-auto mb-6" size={40} />
              <p className="font-semibold mb-4">Managed & Secure</p>
              <p className="text-brandBlue/80">
                End-to-end property and rental management with transparent payouts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-36 bg-white text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-softGold/30 p-16 rounded-[3rem] border border-brandGold/20">
          <h2 className="text-4xl font-black mb-6">
            Invest with <span className="text-brandGold">Confidence</span>
          </h2>
          <p className="text-lg text-brandBlue/70 mb-12">
            Begin your investment journey with a structured consultation and
            access curated, high-return opportunities.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-16 py-5 rounded-full text-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition"
          >
            Get Started @ ₹499 <ArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-12">
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
