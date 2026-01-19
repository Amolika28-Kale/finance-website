import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleStripePayment = () => {
    setLoading(true);

    // TEMPORARY PLACEHOLDER
    // This will be replaced with real Stripe Checkout Session
    setTimeout(() => {
      alert(
        "Stripe payment integration is in progress.\n\nThis is a temporary demo for ₹499 consultation."
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 bg-gradient-to-b from-softGold/40 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-brandBlue mb-6">
            Get Started @ <span className="text-brandGold">₹499</span>
          </h1>

          <p className="text-base sm:text-lg text-brandBlue/80">
            One-time consultation & onboarding fee to begin your journey with
            FIP Consultancy.
          </p>
        </div>
      </section>

      {/* ================= PRICING CARD ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="border rounded-3xl p-10 text-center shadow-sm">

            <p className="text-brandGold text-4xl font-black mb-4">₹499</p>

            <h2 className="text-2xl font-bold text-brandBlue mb-4">
              Consultation & Registration
            </h2>

            <ul className="space-y-3 text-brandBlue/80 mb-8 text-left">
              <li>• Personal consultation with FIP expert</li>
              <li>• Eligibility & requirement assessment</li>
              <li>• Customized finance / investment guidance</li>
              <li>• Access to suitable FIP opportunities</li>
            </ul>

            <button
              onClick={handleStripePayment}
              disabled={loading}
              className="w-full bg-brandGold text-white py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Redirecting to Stripe..." : "Pay ₹499 via Stripe"}
            </button>

            <p className="text-sm text-brandBlue/60 mt-6">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-6 py-16 bg-softGold/30">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3 text-center">
          <div className="p-6 rounded-xl bg-white">
            <p className="font-semibold text-brandBlue">
              Secure Payment
            </p>
            <p className="text-brandBlue/70 text-sm mt-2">
              Industry-standard encryption & security
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white">
            <p className="font-semibold text-brandBlue">
              One-Time Fee
            </p>
            <p className="text-brandBlue/70 text-sm mt-2">
              No hidden charges or recurring payments
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white">
            <p className="font-semibold text-brandBlue">
              Transparent Process
            </p>
            <p className="text-brandBlue/70 text-sm mt-2">
              Clear communication & professional handling
            </p>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-10 bg-white">
        <div className="max-w-4xl mx-auto text-center text-sm text-brandBlue/60">
          <p>
            *This payment is a consultation and onboarding fee. Actual finance,
            investment, or property opportunities are subject to eligibility,
            documentation, and mutual agreement.
          </p>
        </div>
      </section>

    </main>
  );
}
