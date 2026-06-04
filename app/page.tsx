export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          OCR-Powered Menu Digitization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Turn Paper Menus Into{" "}
          <span className="text-[#58a6ff]">Digital Menus</span>{" "}
          Instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Snap a photo of any paper menu. Our OCR pipeline extracts the text, GPT structures it, and you download a ready-to-upload file for DoorDash, Uber Eats, or Grubhub.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Upload menu photo", "OCR text extraction", "GPT structuring", "Export to CSV / JSON", "Delivery platform ready"].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to digitize your menu</p>
          <div className="text-5xl font-bold text-white mb-1">
            $12
            <span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-8">Billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu uploads",
              "OCR + GPT structuring",
              "CSV & JSON export",
              "DoorDash / Uber Eats formats",
              "Edit before export",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What image formats are supported?",
              a: "You can upload JPG, PNG, or HEIC photos taken with any smartphone camera. Clear, well-lit photos produce the best OCR results."
            },
            {
              q: "Which delivery platforms can I export to?",
              a: "We export structured CSV and JSON files compatible with DoorDash, Uber Eats, and Grubhub onboarding templates. More platforms are added regularly."
            },
            {
              q: "Can I edit the extracted menu before exporting?",
              a: "Yes. After OCR and GPT processing you get a full editor to review, correct, and reorganize items, prices, and categories before downloading."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} MenuScan. All rights reserved.
      </footer>
    </main>
  );
}
