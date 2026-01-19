import { Link } from "react-router-dom";

export default function Investments() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 bg-gradient-to-b from-softGold/40 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-brandBlue mb-6">
            Strategic{" "}
            <span className="text-brandGold">Investment Opportunities</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80">
            Professionally managed investment solutions designed for both
            short-term returns and long-term wealth creation, backed by
            tangible assets and transparent structures.
          </p>
        </div>
      </section>

      {/* ================= SHORT TERM ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Short-Term Investment Opportunities
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border rounded-2xl p-8">
              <p className="text-brandGold text-3xl font-black mb-4">
                20–25% P.A.
              </p>
              <p className="font-semibold text-brandBlue mb-2">
                High-Yield Short-Term Returns
              </p>
              <ul className="space-y-2 text-brandBlue/80">
                <li>• Investment period: 6 months to 1 year</li>
                <li>• Asset-backed investments</li>
                <li>• Professionally managed execution</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="font-semibold text-brandBlue mb-4">
                Eligible Asset Options
              </p>
              <ul className="space-y-2 text-brandBlue/80">
                <li>• Land investments</li>
                <li>• Residential properties</li>
                <li>• Commercial properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LONG TERM ================= */}
      <section className="px-6 py-20 bg-brandBlue text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-12 text-center">
            Long-Term Land Investments
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-4xl font-black text-brandGold mb-3">
              30–40% P.A.
            </p>
            <p className="text-white/90">
              High-growth land investments focused on strategic locations and
              long-term appreciation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-semibold">Investment Tenure: 3 Years</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-semibold">Focused on Land Assets Only</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-semibold">Professionally Managed Exit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RENTAL INCOME ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Monthly Rental Income Investments
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-2xl p-8 text-center">
              <p className="text-brandGold text-3xl font-black mb-3">
                Up to 10% P.A.
              </p>
              <p className="font-semibold text-brandBlue mb-2">
                Stable Rental Returns
              </p>
              <p className="text-brandBlue/80">
                Earn consistent monthly rental income with long-term asset
                appreciation.
              </p>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <p className="font-semibold text-brandBlue mb-2">
                Asset Categories
              </p>
              <ul className="space-y-2 text-brandBlue/80">
                <li>• Residential flats</li>
                <li>• Commercial shops</li>
                <li>• Logistics & warehousing assets</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <p className="font-semibold text-brandBlue mb-2">
                Managed & Secure
              </p>
              <p className="text-brandBlue/80">
                End-to-end property management with transparent rental
                distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHARES ================= */}
      <section className="px-6 py-20 bg-softGold/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-12 text-center">
            Investment Against Shares
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border rounded-2xl p-8">
              <p className="text-brandGold text-3xl font-black mb-4">
                15–20% P.A.
              </p>
              <p className="font-semibold text-brandBlue mb-2">
                Minimum Assured ROI
              </p>
              <p className="text-brandBlue/80">
                Secure investment structures against listed shares with
                downside protection.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <p className="font-semibold text-brandBlue mb-3">
                Profit Sharing Model
              </p>
              <ul className="space-y-2 text-brandBlue/80">
                <li>• Minimum assured returns to client</li>
                <li>
                  • Additional profits shared:
                  <br />
                  <span className="font-semibold text-brandGold">
                    1/3rd Client · 2/3rd Company
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-brandBlue mb-6">
            Invest with Confidence & Transparency
          </h2>

          <p className="text-brandBlue/80 mb-10">
            Choose from structured investment opportunities designed to deliver
            consistent returns, asset security, and professional management.
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
            *All investment opportunities are subject to market risks, legal
            due diligence, and formal agreements. Returns are indicative and
            may vary based on market conditions.
          </p>
        </div>
      </section>

    </main>
  );
}
