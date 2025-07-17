// src/app/page.js
import Image from "next/image";
export const metadata = {
  title: 'ClientNest – Close More Clients, Effortlessly',
  description: 'Ditch spreadsheets. Organize your leads, follow-ups, and deals – all in one smart CRM.',
};
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
            {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
            ClientNest
          </h1>
          <nav className="hidden md:flex gap-8 text-base font-semibold tracking-wide text-gray-700">
            <a href="#features" className="hover:text-blue-900 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-blue-900 transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
          </nav>
        </div>
        <a
  href="https://app.clientnesthq.com"
  target="_blank"
  rel="noopener noreferrer"
          className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-blue-800 transition"
        >
          Go to App
        </a>
      </header>

{/* Hero Section */}
<div className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 bg-white">
  <div className="max-w-3xl">
    <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-mid font-medium bg-green-100 text-green-800 shadow-sm animate-pulse">
      🚀 ClientNest is now live — Start your free trial today
    </div>

    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
      Ditch Spreadsheets. <br />
      Close More Clients.
    </h1>

    <p className="mt-6 text-lg md:text-2xl text-gray-700">
      The clean, powerful CRM built for solopreneurs, coaches, freelancers & closers.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-900 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition"
      >
        Start Free Trial
      </a>
      <a
        href="#features"
        className="inline-block border border-blue-900 text-blue-900 text-lg font-semibold px-6 py-3 rounded-xl hover:bg-blue-900 hover:text-white transition"
      >
        Explore Features
      </a>
    </div>

    <p className="mt-6 text-sm text-gray-500">
      No credit card required · Built for speed & simplicity
    </p>
  </div>
  <p className="mt-10 text-sm text-gray-600 uppercase tracking-widest">Trusted by early adopters across 5+ countries</p>

</div>

{/* Comparison Table */}
<section className="w-full bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      Tired of Losing Leads?
    </h2>
    <p className="mt-4 text-lg md:text-xl text-gray-700">
      Track. Follow up. Close. Stress-free.
    </p>

    {/* Scrollable Table */}
    <div className="mt-12 relative overflow-x-auto rounded-xl shadow-lg">
      <table className="min-w-full text-left border-collapse">
        <thead className="sticky top-0 z-10 bg-blue-900 text-white text-sm md:text-base">
          <tr>
            <th className="p-4 font-semibold">Tool</th>
            <th className="p-4">Spreadsheets</th>
            <th className="p-4">Traditional CRMs</th>
            <th className="p-4">ClientNest</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm md:text-base animate-fade-in">
          <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
            <td className="p-4 font-semibold">Ease of Use</td>
            <td className="p-4">Manual, cluttered</td>
            <td className="p-4">Complex & bloated</td>
            <td className="p-4">One-click workflow</td>
          </tr>
          <tr className="border-b hover:bg-gray-50 transition">
            <td className="p-4 font-semibold">Follow-ups</td>
            <td className="p-4">Easily forgotten</td>
            <td className="p-4">Over-engineered</td>
            <td className="p-4">Daily reminders</td>
          </tr>
          <tr className="bg-gray-50 border-b hover:bg-gray-100 transition">
            <td className="p-4 font-semibold">Setup Time</td>
            <td className="p-4">Hours</td>
            <td className="p-4">Days</td>
            <td className="p-4">5 mins</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="p-4 font-semibold">Cost</td>
            <td className="p-4">Free (but chaotic)</td>
            <td className="p-4">$40+/mo</td>
            <td className="p-4">$10/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


{/* Demo Vid */}
<section className="w-full bg-gray-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      See it in Action
    </h2>
    <p className="mt-4 text-lg text-gray-700">
      Track leads, follow up, and close — all in under 60 seconds.
    </p>

    <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 shadow-xl max-w-4xl mx-auto">
      <video
        src="/demo.mp4"
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto"
      />
    </div>

    <p className="mt-6 text-sm text-gray-500 italic">
      No clutter. No learning curve. Just results.
    </p>
  </div>
</section>

{/* USP Section */}
<section id="features" className="w-full bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    
    <div className="md:w-1/2">
      <img 
        src="/gifs/csv-import.gif" 
        alt="Bulk CSV Import Animation" 
        className="rounded-xl shadow-xl w-full max-w-xl mx-auto hover:scale-105 transition-transform duration-300" 
      />
    </div>

    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Migrate from Sheets in Seconds
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Ditch the spreadsheet chaos. Import all your leads in one go and start managing them inside ClientNest&apos;s powerful pipeline view — instantly.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-left mb-6">
        <li>Upload your lead list as a CSV/XLSX</li>
        <li>Instant mapping to fields (no tech skills needed)</li>
        <li>Bulk import hundreds of contacts in seconds</li>
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        Import & Go → 
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div className="md:w-1/2">
      <img 
        src="/gifs/smart-nudge.gif" 
        alt="Smart Lead Nudge Animation" 
        className="rounded-xl shadow-xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300" 
      />
    </div>

    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Never Let a Lead Go Cold Again!
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        ClientNest tracks inactivity and nudges you when it&apos;s time to follow up — intelligently. 
        Whether it&apos;s been 3 days or 3 weeks, we help you strike while the deal is still hot.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-left mb-6">
        <li>Auto-identifies cold leads in your pipeline</li>
        <li>Smart follow-up reminders inside your dashboard</li>
        <li>Works seamlessly with Email & WhatsApp</li>
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        Try Smart Nudges in Action →
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        From Lead to Long-Term Client
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        ClientNest doesn&apos;t stop at closing deals. Convert won leads into active clients, 
        track service history, and manage revenue – all from the same dashboard.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-left mb-6">
        <li>Toggle &apos;Won&apos; leads into clients instantly</li>
        <li>Maintain service history and task logs</li>
        <li>Track total revenue earned from each client</li>
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        See Client Dashboard →
      </a>
    </div>

    {/* GIF Placeholder */}
    <div className="md:w-1/2">
      <img 
        src="/gifs/client-dashboard.gif" 
        alt="Client Dashboard Animation" 
        className="rounded-xl shadow-xl w-full max-w-xl mx-auto hover:scale-105 transition-transform duration-300" 
      />
    </div>

  </div>
</section>

{/* Feature Stack */}
  <section className="w-full bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      What Makes ClientNest a No-Brainer?
    </h2>
    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
      Built for solopreneurs who hate complexity. Everything you need. Nothing you don&apos;t.
    </p>

    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
      {[
        {
          title: 'Drag-n-Drop Pipelines',
          desc: 'Visually move leads across stages. Simple & intuitive.',
        },
        {
          title: 'Daily Follow-up Nudges',
          desc: 'Never miss a lead again. Get smart reminders that drive action.',
        },
        {
          title: 'Notes + Lead History',
          desc: 'Log every call, message, or gut feeling. Stay context-aware.',
        },
        {
          title: '1-Click Follow-Ups',
          desc: 'Reach out via Email or WhatsApp in one click — no switching tabs, no copy-pasting.',
        },
        {
          title: 'No Learning Curve',
          desc: 'Designed for speed. Get started without reading a manual.',
        },
        {
          title: 'Mobile-First & Lightning Fast',
          desc: 'Works beautifully on phones. Loads in a blink.',
        },
      ].map((feature, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow transition-transform transform hover:shadow-lg hover:-translate-y-1 duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
          <p className="mt-2 text-gray-700">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="w-full bg-gray-100 py-10 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      Early Users Love It
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      These solopreneurs got early access — here&apos;s what they&apos;re saying.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
      {[
        {
          name: 'Anika Bergman',
          role: 'Freelance Marketing Consultant',
          quote: 'I stopped using Notion + Google Sheets for leads. ClientNest just works.',
        },
        {
          name: 'Elias Callahan',
          role: 'Sales Coach',
          quote: 'The daily follow-up reminders are a game changer. I’ve already closed 2 clients this week.',
        },
        {
          name: 'Awesh Sheikh',
          role: 'Agency Owner',
          quote: 'Other CRMs felt like overkill. This one feels built for people like me.',
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl p-6 shadow-sm border hover:shadow-md transition"
        >
          <p className="text-gray-700 text-lg italic">“{t.quote}”</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Pricing */}
<section id= "pricing" className="w-full bg-white py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      Simple, Affordable Pricing
    </h2>
    <p className="mt-4 text-lg text-gray-700">
      No tiers. No tricks. Just plans that work.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {/* Monthly Plan */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Monthly</h3>
          <p className="mt-2 text-gray-600">Pay as you go</p>
          <p className="mt-6 text-4xl font-extrabold text-black">$10</p>
          <p className="text-sm text-gray-500">per month</p>
          <ul className="mt-6 text-left space-y-2 text-gray-700">
            <li>✅ All features included</li>
            <li>✅ 7-day free trial</li>
            <li>✅ Cancel anytime</li>
          </ul>
        </div>
        <a
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
          Start Free Trial
        </a>
      </div>

      {/* Yearly Plan */}
<div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-400 relative flex flex-col justify-between overflow-hidden">
  {/* Corner Ribbon */}
      <div className="absolute top-4 -right-16 w-56 transform rotate-[30deg] bg-yellow-400 text-black text-sm font-bold text-center py-2 shadow-md z-10 animate-pulse ring-2 ring-yellow-300 ring-offset-1">
      100 Spots Only
      </div>

  <div>
    <h3 className="text-2xl font-bold text-gray-900">Yearly</h3>
    <p className="mt-2 text-gray-600">One charge. Full access. All year long.</p>
    <p className="mt-6 text-4xl font-extrabold text-black">$99</p>
    <p className="text-sm text-gray-500">billed annually (save 17%)</p>
    <ul className="mt-6 text-left space-y-2 text-gray-700">
      <li>✅ Everything in monthly</li>
      <li>✅ Priority support</li>
      <li>✅ Early access to new features</li>
    </ul>
  </div>
      <a
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer" 
        className="mt-6 w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition">
    Go Yearly & Save
  </a>
</div>

      {/* Pro Plan */}
      <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8 rounded-2xl shadow-xl border-2 border-yellow-500 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-yellow-400">Pro Plan</h3>
          <p className="mt-2 text-gray-300">Advanced tools for scaling businesses</p>
          <p className="mt-6 text-4xl font-extrabold text-white">$15</p>
          <p className="text-sm text-gray-400">per month (launching soon)</p>
          <ul className="mt-6 text-left space-y-3">
            <li>🧾 Invoice Generator <span className="text-yellow-400 font-semibold text-xs ml-2">Coming Soon</span></li>
            <li>🤖 AI Insights <span className="text-yellow-400 font-semibold text-xs ml-2">Coming Soon</span></li>
            <li>💬 AI Chatbot <span className="text-yellow-400 font-semibold text-xs ml-2">Coming Soon</span></li>
            <li>📱 Early Access to Mobile App <span className="text-yellow-400 font-semibold text-xs ml-2">Beta</span></li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
        <span className="animate-pulse px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md text-sm">
        Coming Soon
        </span>
        </div>
      </div>
    </div>
  </div>
      <p className="mt-6 text-sm text-center font-medium text-gray-500">
      Costs less than two Big Macs a month. But helps you close deals worth thousands.
      </p>
</section>


{/* FAQ */}
<section className="w-full bg-gray-50 py-20 px-6" id="faq">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 text-center">
      Got Questions?
    </h2>
    <p className="mt-4 text-lg text-gray-700 text-center">
      We&apos;ve got answers.
    </p>

    <div className="mt-12 space-y-6">
      {[
        {
          q: "Do I need to be tech-savvy to use this?",
          a: "Not at all. ClientNest was built for simplicity. If you can use email, you can use this.",
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We use industry-standard encryption and secure databases. Your data is yours alone.",
        },
        {
          q: "Can I use it on mobile?",
          a: "Yup! ClientNest is mobile-optimized. Works great on phones and tablets. (Mobile app coming soon)",
        },
        {
          q: "What happens after the free trial?",
          a: "You’ll be prompted to subscribe. If you choose not to, your data stays safe — just locked until you subscribe.",
        },
        {
          q: "Is there a refund policy?",
          a: "Yep — if you’re unhappy within 7 days of subscribing, email us for a full refund. No drama.",
        },
      ].map((faq, i) => (
        <details
          key={i}
          className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <summary className="flex justify-between items-center cursor-pointer text-blue-900 font-semibold text-lg">
            {faq.q}
            <svg
              className="w-5 h-5 text-blue-700 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
        <section className="w-full bg-black py-20 px-6">
  <div className="max-w-3xl mx-auto text-center text-white">
    <h2 className="text-3xl md:text-5xl font-bold">
      Try ClientNest Free for 14 Days
    </h2>
    <p className="mt-4 text-lg text-gray-300">
      No credit card required. Cancel anytime.
    </p>
    <div className="mt-8">
      <a
        href="https:app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"    
        className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl text-lg hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/40 transition"
      >
        Get Started — It&apos;s Free
      </a>
    </div>
  </div>
</section>

{/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-10 px-6 mt-[-2px] border-t border-gray-800" >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ClientNest. All rights reserved.</div>
          <div className="flex gap-6 mt-6 md:mt-0">
          <div className="flex gap-6 mt-6 md:mt-0 items-center">
  <a
    href="https://instagram.com/clientnesthq"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-yellow-400 transition p-2 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7z"
      />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="17" cy="7" r="1.2" />
    </svg>
  </a>

  <a
    href="https://linkedin.com/company/clientnest"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-yellow-400 transition p-2 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8.5h4.96v15H.5v-15zm7.5 0h4.75v2.01h.07c.66-1.24 2.28-2.54 4.7-2.54 5.02 0 5.95 3.3 5.95 7.59v8.94h-4.97v-7.91c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.19v8.05h-4.98v-15z" />
    </svg>
  </a>

  <a id="contact"
    href="mailto:support@clientnesthq.com"
    aria-label="Email"
    className="hover:text-yellow-400 transition p-2 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 48 48"
      fill="currentColor"
    >
      <path
        d="M6 12c0-3.31 2.69-6 6-6h24c3.31 0 6 2.69 6 6v24c0 3.31-2.69 6-6 6H12c-3.31 0-6-2.69-6-6V12zm30 1.26L24 23.01 12 13.26V36h24V13.26zM12.96 10l11.04 9.1L35.04 10H12.96z"
      />
    </svg>
  </a>
</div>


          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/stripe-secure.svg"
              alt="Stripe Secured"
              width={80}
              height={20}
              className="h-5 w-auto"
            />
            Payments secured via Stripe
          </span>
        </div> 

<div className="mt-5 text-center text-sm text-gray-500 space-x-4">
  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
  <span>|</span>
  <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>

</div>

      </footer>
    </main>
  );
}
