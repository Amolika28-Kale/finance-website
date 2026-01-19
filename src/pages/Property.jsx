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
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop)",
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
            income, capital appreciation, and professionally managed exits.
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
                image:
                  "https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlUK1X_LKI-HU8APW7XbKHiFx0B122NKETS9prbQYGE=",
                desc:
                  "Strategic advisory to sell residential and commercial assets at optimal market value with negotiation and documentation support.",
              },
              {
                icon: Building2,
                title: "Property Purchase Advisory",
                image:
                  "https://media.istockphoto.com/id/2199765063/photo/senior-couple-meeting-with-financial-advisor-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=WyZ_ryGKHphUiOmIhzHvjqea_4Ki-Cndq3XZHWzmMYU=",
                desc:
                  "Expert guidance to acquire rental-yielding and appreciation-driven properties aligned with your goals.",
              },
              {
                icon: Key,
                title: "Rental Income Solutions",
                image:
                  "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
                desc:
                  "Curated income-generating assets delivering stable monthly cash flow.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group rounded-[2.5rem] overflow-hidden border bg-white shadow-sm hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <item.icon className="text-brandGold mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brandBlue/80 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RENTAL FOCUS ================= */}
      <section
        className="relative px-4 sm:px-6 py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1800&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-brandBlue/90" />

        <div className="relative max-w-6xl mx-auto text-white">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-20 text-center">
            Rental Income Focused Properties
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              "Up to 10% P.A. Rental Yield",
              "Residential & Commercial Assets",
              "End-to-End Property Management",
            ].map((text, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 p-10 rounded-2xl"
              >
                <p className="text-brandGold text-3xl font-black mb-3">
                  {text.split(" ")[0]}
                </p>
                <p className="font-semibold">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASSURED EXIT ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto">

          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-16 text-center">
            Assured Exit Strategy
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { roi: "15–20%", year: "Exit After 1st Year" },
              { roi: "20–30%", year: "Exit After 2nd Year" },
              { roi: "30–40%", year: "Exit After 3rd Year" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2.5rem] overflow-hidden border shadow-sm hover:shadow-xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXNzdXJlZFN0cmF0ZWd5JTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Exit Strategy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-8 text-center">
                  <p className="text-brandGold text-2xl font-black mb-2">
                    {item.roi}
                  </p>
                  <p className="font-semibold">{item.year}</p>
                </div>
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
        <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-gradient-to-br from-softGold/40 to-white p-12 sm:p-16 rounded-[3rem] border border-brandGold/20 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Invest in Property with <span className="text-brandGold">Confidence</span>
          </h2>
          <p className="text-base sm:text-lg text-brandBlue/70 mb-10">
            Rental income, capital growth, and professionally managed exits —
            all under one transparent ecosystem.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brandBlue text-white px-12 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition"
          >
            Connect Now <ArrowRight />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
