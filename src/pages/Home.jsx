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
      <section className="relative min-h-[95vh] flex items-center px-6 py-28 bg-gradient-to-br from-softGold/40 via-white to-softGold/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.1] mb-8">
              An Integrated <br />
              <span className="text-brandGold">Finance</span>,{" "}
              <span className="text-brandGold">Investment</span> &{" "}
              <span className="text-brandGold">Property</span> Ecosystem
            </h1>

            <p className="text-lg text-brandBlue/75 mb-12 max-w-xl">
              FIP Consultancy empowers individuals, businesses, and investors
              through structured finance, asset-backed investments, and
              professionally managed property solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/finance"
                className="group bg-brandBlue text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition"
              >
                Explore Finance
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/pricing"
                className="border-2 border-brandGold text-brandGold px-8 py-4 rounded-full font-semibold hover:bg-brandGold hover:text-white transition"
              >
                Get Started @ ₹499
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-brandGold/15 rounded-[2.5rem] rotate-2 -z-10 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop"
              alt="Finance & Investment"
              className="rounded-[2.5rem] shadow-2xl object-cover h-[540px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST METRICS ================= */}
      <section className="px-6 py-24 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {[
            { icon: Users, label: "Clients Served", value: "500+" },
            { icon: Banknote, label: "Funds Facilitated", value: "₹100Cr+" },
            { icon: LineChart, label: "Average ROI", value: "20–40%" },
            { icon: Clock, label: "Processing Time", value: "7–14 Days" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <item.icon className="mx-auto text-brandGold mb-4" size={36} />
              <h3 className="text-2xl font-black">{item.value}</h3>
              <p className="text-brandBlue/70">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FIP MODEL ================= */}
      <section
        className="px-6 py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative max-w-6xl mx-auto">

          <motion.div {...fadeUp} className="text-center mb-24">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              The <span className="text-brandGold">FIP Model</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-brandBlue/70">
              A transparent, asset-backed ecosystem integrating finance,
              investments, and property for long-term wealth creation.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Wallet,
                title: "Finance Solutions",
                points: [
                  "Secured & unsecured loans",
                  "Land & property backed finance",
                  "Business & project funding",
                ],
              },
              {
                icon: TrendingUp,
                title: "Investment Opportunities",
                points: [
                  "20–40% ROI strategies",
                  "Short & long-term options",
                  "Asset-backed investments",
                ],
              },
              {
                icon: Building2,
                title: "Property Advisory",
                points: [
                  "Rental income assets",
                  "Assured exit strategies",
                  "End-to-end management",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2.5rem] p-10 border shadow-md hover:shadow-xl transition"
              >
                <card.icon className="text-brandGold mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
                <ul className="space-y-3 text-brandBlue/70">
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

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-36 bg-white text-center">
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto bg-softGold/30 p-16 rounded-[3rem] border border-brandGold/20"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Build Wealth With{" "}
            <span className="text-brandGold">Confidence</span>
          </h2>

          <p className="text-xl text-brandBlue/70 mb-12">
            Start with a structured consultation and unlock finance,
            investment, and property opportunities designed for growth.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-16 py-5 rounded-full text-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition"
          >
            Get Started @ ₹499 <ArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
