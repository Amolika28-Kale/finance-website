import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Award,
  Layers,
  Users,
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" },
};

export default function AboutUs() {
  return (
    <main className="bg-white text-brandBlue overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6 py-28 sm:py-36">
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop)",
          }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white" />

        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-brandGold/15 text-brandGold text-sm font-semibold">
            Established 1995 • Pune
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Siddhivinayak{" "}
            <span className="text-brandGold">Marketing & Developers</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80">
            A trusted name in residential and commercial development, delivering
            quality homes and landmark projects for over three decades.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Who We Are
            </h2>
            <p className="text-brandBlue/80 leading-relaxed mb-6">
              Since 1995, Siddhivinayak Marketing & Developers has been an
              influential voice in Pune’s residential construction industry —
              one of the most vibrant and fast-growing sectors in India.
            </p>
            <p className="text-brandBlue/80 leading-relaxed">
              Pune is globally acknowledged for quality residential development.
              Our strength lies in technological know-how, strong execution
              capabilities, and uncompromising construction standards.
            </p>
          </motion.div>

          <motion.img
            {...fadeUp}
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
            alt="Residential Development"
            className="rounded-[2.5rem] shadow-xl"
          />
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="px-4 sm:px-6 py-28 bg-softGold/30">
        <div className="max-w-6xl mx-auto">

          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black mb-16 text-center">
            What We Do
          </motion.h2>

          <motion.p {...fadeUp} className="max-w-4xl mx-auto text-center text-brandBlue/80 mb-16">
            We work to promote the interests of housing consumers and believe
            that every Indian deserves access to safe, affordable, and
            high-quality housing.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Residential Development",
                text: "Designing and constructing elegant residential projects using modern technology and sustainable practices.",
              },
              {
                icon: Layers,
                title: "Land Development",
                text: "Strategic land acquisition and development aligned with urban growth and future infrastructure.",
              },
              {
                icon: Users,
                title: "Consumer Advocacy",
                text: "Ensuring transparency, affordability, and compliance while representing housing consumer interests.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white border rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="text-brandGold mb-5" size={42} />
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-brandBlue/80 text-sm sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* ================= CMD MESSAGE ================= */}
      <section className="px-4 sm:px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          {/* Founder Image */}
          <motion.img
            {...fadeUp}
            src="/assets/founder.png"
            alt="CMD Message"
            className="rounded-[2.5rem] shadow-xl object-cover w-full h-[420px]"
          />

          {/* Message */}
          <motion.div {...fadeUp}>
            <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold rounded-full bg-brandGold/15 text-brandGold">
              CMD’s Message
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Message from the{" "}
              <span className="text-brandGold">Founder</span>
            </h2>

            <p className="text-brandBlue/80 leading-relaxed mb-5">
              At Siddhivinayak Marketing & Developers, our journey began with a
              simple belief — a home is not just a structure, but the foundation
              of dreams, security, and generations to come.
            </p>

            <p className="text-brandBlue/80 leading-relaxed mb-5">
              Since 1995, we have remained committed to delivering value-driven
              projects that balance quality, affordability, and timely delivery.
              Every project reflects our attention to detail, ethical practices,
              and customer-first approach.
            </p>

            <p className="text-brandBlue/80 leading-relaxed mb-8">
              As we move forward, our focus remains unchanged — to build homes
              that stand the test of time and continue to set benchmarks in the
              real estate industry.
            </p>

            <div className="border-l-4 border-brandGold pl-5">
              <p className="font-bold text-lg">Mr. Ramesh Y. Kavediya</p>
              <p className="text-sm text-brandBlue/70">
                Founder & CMD<br />
                Siddhivinayak Marketing & Developers
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= INCORPORATION ================= */}
      <section className="px-4 sm:px-6 py-28">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          <motion.img
            {...fadeUp}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
            alt="Company Legacy"
            className="rounded-[2.5rem] shadow-xl"
          />

          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Our Legacy
            </h2>
            <p className="text-brandBlue/80 leading-relaxed mb-6">
              Established in 1995 by Mr. Ramesh Y. Kavediya, Siddhivinayak
              Marketing & Developers has grown into a household name in Pune’s
              real estate sector.
            </p>
            <p className="text-brandBlue/80 leading-relaxed">
              In 2011, Mr. Sambhav Kavediya joined the organization, continuing
              the family’s entrepreneurial legacy that dates back to 1960.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="relative px-4 sm:px-6 py-32 bg-brandBlue text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <Eye className="mx-auto text-brandGold mb-6" size={48} />
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Our Vision
            </h2>
            <p className="text-white/90 text-base sm:text-lg">
              To meet the aspirations of every segment of society by delivering
              homes that combine modern design, advanced technology, superior
              quality, and timely execution — always offering more than what is
              promised.
            </p>
          </motion.div>
        </div>
      </section>

{/* ================= TRACK RECORD ================= */}
<section className="relative px-4 sm:px-6 py-32 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute inset-0 bg-gradient-to-br from-softGold/40 via-white to-white" />
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-brandGold/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brandGold/10 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Heading */}
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl font-black mb-6"
    >
      Our Track Record
    </motion.h2>

    {/* Big Number */}
    <motion.p
      {...fadeUp}
      className="text-brandGold text-5xl sm:text-7xl font-black mb-4 tracking-tight"
    >
      10+ Million Sq. Ft.
    </motion.p>

    <motion.p
      {...fadeUp}
      className="max-w-4xl mx-auto text-brandBlue/80 mb-16 text-sm sm:text-base"
    >
      Developed across residential and commercial projects in Pune, consistently
      setting benchmarks in quality, design, and execution.
    </motion.p>

    {/* Stats Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto"
    >
      {[
        { value: "30+", label: "Years of Excellence" },
        { value: "70+", label: "Completed Projects" },
        { value: "10+", label: "Landmark Locations" },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          whileHover={{ y: -6 }}
          className="bg-white/90 backdrop-blur border border-brandGold/20 
                     rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <p className="text-4xl font-black text-brandGold mb-2">
            {item.value}
          </p>
          <p className="text-sm text-brandBlue/70 font-medium">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

  {/* ================= GROUP COMPANIES ================= */}
<section className="px-4 sm:px-6 py-28 bg-gradient-to-b from-softGold/40 to-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl font-black mb-6 text-center"
    >
      Group Companies
    </motion.h2>

    <motion.p
      {...fadeUp}
      className="max-w-3xl mx-auto text-center text-brandBlue/70 mb-14 text-sm sm:text-base"
    >
      A diverse portfolio of trusted entities operating across real estate,
      construction, infrastructure, and allied businesses.
    </motion.p>

    {/* Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {[
        "Sambhav Royal Developers",
        "Siddhivinayak Rameshwar Developers",
        "Siddhivinayak Namrata Developers",
        "Siddhivinayak Kohinoor Developers",
        "Shaashwat Sambhav Developers",
        "Siddhi Sambhav Developers",
        "Shree Siddhi Sambhav Developers",
        "Shree Sambhav Developers",
        "Jainy Associates",
        "Shree Saakshi Sambhav Platinum Developers",
        "Vinayak Promoters And Builders",
        "Vishwaraj Construction",
        "RK Developers",
        "SRK Promoters & Builders",
        "Zantic Agro Private Limited",
        "Aloeshell Pharmaa LLP",
      ].map((name, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group relative bg-white/90 backdrop-blur border border-brandGold/20 
                     rounded-2xl px-6 py-5 shadow-sm hover:shadow-xl transition-all"
        >
          {/* Accent line */}
          <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-brandGold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

          {/* Label */}
          <span className="block text-xs uppercase tracking-wider text-brandGold mb-1">
            Group Entity
          </span>

          {/* Name */}
          <p className="font-semibold text-brandBlue leading-snug">
            {name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


    </main>
  );
}
