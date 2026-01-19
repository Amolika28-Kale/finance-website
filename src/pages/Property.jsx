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

export default function Property() {
  return (
    <main className="overflow-hidden bg-white text-brandBlue font-sans">

      {/* ================= HERO ================= */}
      <section
        className="relative px-6 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-black mb-6">
            Professional{" "}
            <span className="text-brandGold">Property Advisory</span> & Management
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brandBlue/80">
            Structured real estate solutions focused on rental income, capital
            appreciation, and assured exits — backed by legal transparency.
          </p>
        </motion.div>
      </section>

      {/* ================= ADVISORY ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Real Estate Advisory & Management
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Home,
                title: "Property Sale Advisory",
                desc:
                  "Strategic advisory to sell residential and commercial assets at optimal market value with complete documentation support.",
              },
              {
                icon: Building2,
                title: "Property Purchase Advisory",
                desc:
                  "Professional guidance to acquire rental-yielding and appreciation-focused properties aligned with your goals.",
              },
              {
                icon: Key,
                title: "Rental Income Solutions",
                desc:
                  "Curated rental assets delivering predictable monthly income with long-term capital growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="text-brandGold mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brandBlue/80">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RENTAL FOCUS ================= */}
      <section
        className="relative px-6 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560185127-6a8c3b6b6cbb?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-brandBlue/90" />
        <div className="relative max-w-6xl mx-auto text-white">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Rental Income Focused Investments
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              {
                value: "Up to 10% P.A.",
                text: "Consistent Monthly Rental Income",
              },
              {
                value: "Residential & Commercial",
                text: "Income-Generating Assets",
              },
              {
                value: "End-to-End",
                text: "Property & Tenant Management",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 p-12 rounded-2xl"
              >
                <p className="text-brandGold text-3xl font-black mb-3">
                  {item.value}
                </p>
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASSURED EXIT ================= */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-center">
            Assured Exit with Attractive Returns
          </motion.h2>

          <motion.p {...fadeUp} className="max-w-4xl mx-auto text-center text-brandBlue/80 mb-20">
            Every property investment is structured with predefined exit
            strategies, ensuring liquidity, capital appreciation, and risk
            mitigation.
          </motion.p>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              { roi: "15–20%", year: "Exit After 1st Year" },
              { roi: "20–30%", year: "Exit After 2nd Year" },
              { roi: "30–40%", year: "Exit After 3rd Year" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition"
              >
                <Banknote className="mx-auto text-brandGold mb-6" size={40} />
                <p className="text-brandGold text-4xl font-black mb-3">
                  {item.roi}
                </p>
                <p className="font-semibold">{item.year}</p>
                <p className="text-brandBlue/70 mt-2">
                  Structured appreciation with defined liquidity
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="px-6 py-32 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-20 text-center">
            Transparency & Legal Assurance
          </motion.h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              {
                icon: FileCheck,
                title: "Registered Documents",
                desc: "All properties are registered in the client’s name with complete legal verification.",
              },
              {
                icon: ShieldCheck,
                title: "Above-Market ROI",
                desc: "Returns structured higher than prevailing market benchmarks.",
              },
              {
                icon: CheckCircle2,
                title: "100% Compliance",
                desc: "Full legal, regulatory, and due-diligence compliance at every stage.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border rounded-[2.5rem] p-12 bg-white shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="mx-auto text-brandGold mb-6" size={40} />
                <h3 className="font-bold mb-3">{item.title}</h3>
                <p className="text-brandBlue/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-36 bg-white text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-softGold/30 p-16 rounded-[3rem] border border-brandGold/20">
          <h2 className="text-4xl font-black mb-6">
            Invest in Property with <span className="text-brandGold">Confidence</span>
          </h2>
          <p className="text-lg text-brandBlue/70 mb-12">
            Access professionally managed property opportunities with rental
            income, capital growth, and assured exit strategies.
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
            *Property investments are subject to market conditions, legal due
            diligence, and regulatory approvals. Returns are indicative.
          </p>
        </div>
      </section>

    </main>
  );
}
