import { Link } from "react-router-dom";

export default function Property() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 bg-gradient-to-b from-softGold/40 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-brandBlue mb-6">
            Professional{" "}
            <span className="text-brandGold">Property Advisory</span> &
            Management
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80">
            End-to-end real estate solutions focused on profitability,
            compliance, and long-term value creation for investors and property
            owners.
          </p>
        </div>
      </section>

      {/* ================= ADVISORY ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Real Estate Advisory & Management
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brandBlue mb-3">
                Property Sale Advisory
              </h3>
              <p className="text-brandBlue/80">
                Strategic advisory for selling residential and commercial
                properties at optimal market value with full documentation
                support.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brandBlue mb-3">
                Property Purchase Advisory
              </h3>
              <p className="text-brandBlue/80">
                Professional guidance for acquiring residential and commercial
                assets aligned with your investment objectives.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brandBlue mb-3">
                Rental Income Solutions
              </h3>
              <p className="text-brandBlue/80">
                High-quality rental assets offering consistent monthly income
                along with long-term capital appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RENTAL ================= */}
      <section className="px-6 py-20 bg-brandBlue text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-12 text-center">
            Rental Income Focused Investments
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-brandGold text-3xl font-black mb-2">
                Up to 10% P.A.
              </p>
              <p className="font-semibold">
                Consistent Monthly Rental Income
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-semibold">
                Residential & Commercial Assets
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-semibold">
                End-to-End Property Management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ASSURED EXIT ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Assured Exit with Attractive Returns
          </h2>

          <p className="max-w-4xl mx-auto text-center text-brandBlue/80 mb-12">
            Investments made through FIP Consultancy come with clearly defined
            exit options, ensuring liquidity and predictable growth.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="border rounded-2xl p-8">
              <p className="text-brandGold text-3xl font-black mb-2">
                15–20%
              </p>
              <p className="font-semibold text-brandBlue mb-1">
                Exit After 1st Year
              </p>
              <p className="text-brandBlue/70">
                Stable short-term appreciation
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="text-brandGold text-3xl font-black mb-2">
                20–30%
              </p>
              <p className="font-semibold text-brandBlue mb-1">
                Exit After 2nd Year
              </p>
              <p className="text-brandBlue/70">
                Balanced growth & income
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="text-brandGold text-3xl font-black mb-2">
                30–40%
              </p>
              <p className="font-semibold text-brandBlue mb-1">
                Exit After 3rd Year
              </p>
              <p className="text-brandBlue/70">
                Maximum value appreciation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="px-6 py-20 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Transparency & Legal Assurance
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="border rounded-2xl p-8">
              <p className="font-semibold text-brandBlue">
                Registered Property Documents
              </p>
              <p className="text-brandBlue/80 mt-2">
                All property documents are duly registered in the client’s
                name.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="font-semibold text-brandBlue">
                ROI Above Market Standards
              </p>
              <p className="text-brandBlue/80 mt-2">
                Returns are structured over and above prevailing market offers.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="font-semibold text-brandBlue">
                Fully Compliant Processes
              </p>
              <p className="text-brandBlue/80 mt-2">
                Legal due diligence and compliance at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-brandBlue mb-6">
            Invest in Property with Confidence
          </h2>

          <p className="text-brandBlue/80 mb-10">
            Discover property investment opportunities that deliver consistent
            income, capital growth, and assured exit strategies.
          </p>

          <Link
            to="/pricing"
            className="inline-block bg-brandGold text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started @ ₹499
          </Link>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-10 bg-white">
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
