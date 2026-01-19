import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

export default function Property() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6 py-28 sm:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white" />

        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-brandGold/15 text-brandGold text-sm font-semibold">
            Rental Income • Assured Exit • Legal Security
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Professional{" "}
            <span className="text-brandGold">Property Advisory</span> &
            <br className="hidden sm:block" /> Asset Management
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80 mb-10">
            Structured real estate solutions focused on predictable rental
            income, long-term capital appreciation, and professionally managed
            exit strategies.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition"
          >
            Consult @ ₹499 <ArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ================= ADVISORY ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Real Estate Advisory & Management
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Home,
                title: "Property Sale Advisory",
                desc:
                  "Strategic advisory to sell residential and commercial assets at optimal market value with complete documentation and negotiation support.",
              },
              {
                icon: Building2,
                title: "Property Purchase Advisory",
                desc:
                  "Expert guidance to acquire rental-yielding and appreciation-driven properties aligned with your investment goals.",
              },
              {
                icon: Key,
                title: "Rental Income Solutions",
                desc:
                  "Curated income-generating properties delivering stable monthly cash flow with long-term capital growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border rounded-[2.5rem] p-8 sm:p-12 shadow-sm hover:shadow-2xl transition"
              >
                <item.icon className="text-brandGold mb-6" size={42} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brandBlue/80 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RENTAL FOCUS ================= */}
      <section className="relative px-4 sm:px-6 py-32 bg-brandBlue text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Rental Income Focused Properties
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center"
          >
            {[
              {
                value: "Up to 10% P.A.",
                text: "Stable Monthly Rental Yield",
              },
              {
                value: "Residential & Commercial",
                text: "Income Generating Assets",
              },
              {
                value: "Fully Managed",
                text: "Tenant, Lease & Maintenance",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur border border-white/20 p-10 rounded-2xl"
              >
                <p className="text-brandGold text-3xl sm:text-4xl font-black mb-3">
                  {item.value}
                </p>
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ASSURED EXIT ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-16 text-center">
            Assured Exit Strategy
          </motion.h2>

          <motion.p {...fadeUp} className="max-w-4xl mx-auto text-center text-brandBlue/80 mb-20">
            Every property investment is structured with predefined exit
            timelines ensuring liquidity, capital appreciation, and risk
            mitigation.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              { roi: "15–20%", year: "Exit After 1st Year" },
              { roi: "20–30%", year: "Exit After 2nd Year" },
              { roi: "30–40%", year: "Exit After 3rd Year" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition"
              >
                <Landmark className="mx-auto text-brandGold mb-6" size={42} />
                <p className="text-brandGold text-4xl font-black mb-3">
                  {item.roi}
                </p>
                <p className="font-semibold">{item.year}</p>
                <p className="text-brandBlue/70 mt-2">
                  Planned appreciation with defined liquidity
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="px-4 sm:px-6 py-28 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Transparency & Legal Assurance
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              {
                icon: FileCheck,
                title: "Registered Documents",
                desc: "All properties registered in client’s name with full legal verification.",
              },
              {
                icon: ShieldCheck,
                title: "Above Market Returns",
                desc: "Structured ROI higher than prevailing market benchmarks.",
              },
              {
                icon: CheckCircle2,
                title: "100% Compliance",
                desc: "Complete regulatory, legal and due-diligence adherence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="mx-auto text-brandGold mb-6" size={42} />
                <h3 className="font-bold mb-3">{item.title}</h3>
                <p className="text-brandBlue/80 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 sm:px-6 py-32 text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-gradient-to-br from-softGold/40 to-white p-10 sm:p-16 rounded-[3rem] border border-brandGold/20 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Invest in Property with{" "}
            <span className="text-brandGold">Confidence</span>
          </h2>
          <p className="text-base sm:text-lg text-brandBlue/70 mb-10">
            Access professionally managed property opportunities with rental
            income, capital growth, and assured exit strategies.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-12 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition"
          >
            Connect Now<ArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto text-center text-sm text-brandBlue/60">
          <p>
            *Property investments are subject to market conditions, legal due
            diligence, and regulatory approvals. Returns are indicative and may
            vary.
          </p>
        </div>
      </section>

    </main>
  );
}
