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

export default function Finance() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

      {/* ================= HERO ================= */}
      <section
        className="relative px-6 py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-black mb-6">
            Smart & Structured{" "}
            <span className="text-brandGold">Finance Solutions</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brandBlue/80">
            Tailor-made finance solutions designed for individuals,
            entrepreneurs, and enterprises with speed, flexibility, and
            complete transparency.
          </p>
        </motion.div>
      </section>

      {/* ================= LOAN SOLUTIONS ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Unsecured & Secured Loan Solutions
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 sm:grid-cols-2"
          >
            {/* Unsecured */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
            >
              <Wallet className="text-brandGold mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Unsecured Loans</h3>
              <p className="text-brandBlue/80 mb-6">
                Hassle-free personal and business loans with minimal
                documentation and fast disbursement.
              </p>
              <ul className="space-y-3 text-brandBlue/80">
                <li>• Loan up to <span className="font-semibold text-brandGold">₹10 Lakhs</span></li>
                <li>• No collateral required</li>
                <li>• Tenure up to <span className="font-semibold">7 years</span></li>
              </ul>
            </motion.div>

            {/* Secured */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
            >
              <ShieldCheck className="text-brandGold mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Secured / Business Loans</h3>
              <p className="text-brandBlue/80 mb-6">
                Structured funding for startups, enterprises, and large-scale
                projects with flexible security models.
              </p>
              <ul className="space-y-3 text-brandBlue/80">
                <li>
                  • Funding from{" "}
                  <span className="font-semibold text-brandGold">
                    ₹10 Lakhs to ₹10 Crores
                  </span>
                </li>
                <li>• Custom deal structuring</li>
                <li>• Faster approvals</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT FINANCE ================= */}
      <section
        className="relative px-6 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-brandBlue/90" />
        <div className="relative max-w-6xl mx-auto text-white">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-12 text-center">
            Project & Business Finance Structuring
          </motion.h2>

          <motion.p {...fadeUp} className="max-w-4xl mx-auto text-center mb-20 text-white/90">
            Funding structures aligned with project feasibility, business
            strength, cash flow, and long-term scalability.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, text: "Security-Backed Funding" },
              { icon: Building2, text: "Stake Holding Models" },
              { icon: Banknote, text: "Equity Participation" },
              { icon: FileCheck, text: "PMC-Based Finance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 p-10 rounded-2xl text-center hover:bg-white/20 transition"
              >
                <item.icon className="mx-auto text-brandGold mb-4" size={34} />
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAND & PROPERTY FINANCE ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-center">
            Land & Property Based Finance
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Agricultural Land", percent: "Up to 50%" },
              { title: "Residential Property", percent: "Up to 60%" },
              { title: "Commercial Property", percent: "Up to 70%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="border rounded-[2.5rem] p-12 text-center shadow-sm hover:shadow-xl transition"
              >
                <Landmark className="mx-auto text-brandGold mb-6" size={38} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brandGold text-4xl font-black mb-3">
                  {item.percent}
                </p>
                <p className="text-brandBlue/70">
                  Based on Government Ready Reckoner Rate
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ASSET & TRADE FINANCE ================= */}
      <section className="px-6 py-32 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Asset & Trade Finance
          </motion.h2>

          <div className="grid gap-12 sm:grid-cols-2">
            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="bg-white border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition">
              <Gem className="text-brandGold mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Asset-Backed Finance</h3>
              <ul className="space-y-3 text-brandBlue/80">
                <li>• Gold & Silver</li>
                <li>• Diamonds & Precious Stones</li>
                <li>• High-value movable assets</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp} whileHover={{ y: -6 }} className="bg-white border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition">
              <Banknote className="text-brandGold mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Trade & Export Finance</h3>
              <p className="text-brandBlue/80">
                Institution-approved finance against export billing ensuring
                uninterrupted working capital flow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-36 text-center bg-white">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-softGold/30 p-16 rounded-[3rem] border border-brandGold/20">
          <h2 className="text-4xl font-black mb-6">
            Need Finance?{" "}
            <span className="text-brandGold">Let’s Begin</span>
          </h2>
          <p className="text-lg text-brandBlue/70 mb-12">
            Start with a structured consultation and explore the most suitable
            finance solution.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-16 py-5 rounded-full text-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition"
          >
            Get Started @ ₹499 <ArrowRight />
          </a>
        </motion.div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-sm text-brandBlue/60">
          <p>
            *All finance solutions are subject to due diligence, legal
            verification, and applicable institutional approvals.
          </p>
        </div>
      </section>

    </main>
  );
}
