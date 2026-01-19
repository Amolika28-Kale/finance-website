import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // TEMPORARY PLACEHOLDER (backend / email integration later)
    setTimeout(() => {
      alert("Thank you for contacting FIP Consultancy. Our team will reach out shortly.");
      setLoading(false);
      e.target.reset();
    }, 1200);
  };

  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 bg-gradient-to-b from-softGold/40 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-brandBlue mb-6">
            Contact <span className="text-brandGold">FIP Consultancy</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brandBlue/80">
            Get in touch with our team to explore finance, investment, and
            property opportunities tailored to your needs.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">

          {/* -------- LEFT INFO -------- */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-brandBlue mb-6">
              Let’s Start a Conversation
            </h2>

            <p className="text-brandBlue/80 mb-8">
              Whether you are looking for financial assistance, investment
              guidance, or property advisory, our experts are here to help you
              with transparent and professional solutions.
            </p>

            <div className="space-y-4 text-brandBlue/80">
              <p>📍 <span className="font-semibold">Office:</span> India</p>
              <p>📞 <span className="font-semibold">Phone:</span> +91 XXXXX XXXXX</p>
              <p>✉️ <span className="font-semibold">Email:</span> info@fipconsultancy.com</p>
            </div>

            <div className="mt-10">
              <p className="font-semibold text-brandBlue mb-3">
                Working Hours
              </p>
              <p className="text-brandBlue/80">
                Monday – Saturday : 10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* -------- RIGHT FORM -------- */}
          <div className="border rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-brandBlue mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandGold"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandGold"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandGold"
              />

              <select
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandGold"
              >
                <option value="">Select Interest</option>
                <option>Finance Solutions</option>
                <option>Investment Opportunities</option>
                <option>Property Advisory</option>
                <option>General Enquiry</option>
              </select>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandGold"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brandGold text-white py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>

            <p className="text-sm text-brandBlue/60 mt-4">
              Your details are kept confidential and used only for consultation
              purposes.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24 bg-brandBlue text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-white/90 mb-10">
            Take the first step toward structured finance, smart investments,
            and profitable property opportunities.
          </p>

          <a
            href="/pricing"
            className="inline-block bg-brandGold text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started @ ₹499
          </a>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center text-sm text-brandBlue/60">
          <p>
            *Submitting this form does not guarantee approval of any finance,
            investment, or property opportunity. All services are subject to
            eligibility and due diligence.
          </p>
        </div>
      </section>

    </main>
  );
}
