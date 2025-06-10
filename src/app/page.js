// src/app/page.js

export const metadata = {
  title: 'ClientNest – Close More Clients, Effortlessly',
  description: 'Ditch spreadsheets. Organize your leads, follow-ups, and deals – all in one smart CRM.',
};

export default function Home() {
  return (
    //hero section//
    <main className="min-h-screen bg-white flex flex-col items-center px-6 py-20 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Ditch Spreadsheets. <br />
          Close More Clients.
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-600">
          Simple CRM for solopreneurs, coaches, freelancers & closers.
        </p>
      
<section className="w-full bg-gray-100 py-20 px-6"> 
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Join the Waitlist</h2>
    <p className="mt-4 text-gray-600">Get early access + a 14-day free trial when we launch.</p>

    <form
      action="https://submit-form.com/bzWHu1l6p"  // <-- Replace this
      method="POST"
      className="mt-8 space-y-4 text-left"
    >
      {/* Spam protection honeypot */}
      <input type="hidden" name="_redirect" value="/success" />
      <input type="checkbox" name="_honeypot" className="hidden" style={{ display: "none" }} />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-black"
        required
      />
      <textarea
        name="message"
        placeholder="What do you struggle with in client management?"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-black"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
      >
        Join Waitlist
      </button>
    </form>
  </div>
</section>


        <p className="mt-4 text-sm text-gray-500">
          Launching July 2025 – No credit card required.
        </p>
      </div>

      {/* Pain → Promise + Comparison Section */}
      <section className="w-full bg-gray-50 py-20 px-6 mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Tired of Losing Leads?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Track. Follow up. Close. Stress-free.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4">Tool</th>
                  <th className="p-4">Spreadsheets</th>
                  <th className="p-4">Other CRMs</th>
                  <th className="p-4">ClientNest</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 bg-white">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Ease of Use</td>
                  <td className="p-4">Manual, cluttered</td>
                  <td className="p-4">Complex & bloated</td>
                  <td className="p-4">One-click workflow</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Follow-ups</td>
                  <td className="p-4">Easily forgotten</td>
                  <td className="p-4">Over-engineered</td>
                  <td className="p-4">Daily reminders</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Setup Time</td>
                  <td className="p-4">Hours</td>
                  <td className="p-4">Days</td>
                  <td className="p-4">5 mins</td>
                </tr>
                <tr>
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
      <section className="w-full bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      What Makes ClientNest a No-Brainer?
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Built for solopreneurs who hate complexity. Everything you need. Nothing you don&apos;t.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
      {[
        {
          title: 'Drag-n-Drop Pipelines',
          desc: 'Visually move leads across stages. Simple & intuitive.',
        },
        {
          title: 'Daily Follow-up Reminders',
          desc: 'Never miss a follow-up again. We remind you. You close.',
        },
        {
          title: 'Notes + Lead Logs',
          desc: 'Log every call, message, or gut feeling. Context is power.',
        },
        {
          title: 'Stale Leads Alert',
          desc: 'Leads going cold? You get alerts for untouched leads',
        },
        {
          title: 'Zero Learning Curve',
          desc: 'No manuals. No tutorials. You’ll get it in minutes.',
        },
        {
          title: 'Blazing Fast UX',
          desc: 'Built on modern tech. Loads in a flash, works on mobile.',
        },
      ].map((feature, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl p-6 shadow-sm border hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
          <p className="mt-2 text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full bg-gray-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      See It In Action
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Track leads, follow up, and close — all in under 60 seconds.
    </p>

    <div className="mt-10 rounded-xl overflow-hidden border border-gray-200 shadow-lg max-w-4xl mx-auto">
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

    <p className="mt-6 text-sm text-gray-500">
      No clutter. No learning curve. Just results.
    </p>
  </div>
</section>
<section className="w-full bg-white py-20 px-6">
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
<section className="w-full bg-gray-50 py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      Simple, Honest Pricing
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      No tiers. No tricks. Just one plan that does it all.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-2">
      <div className="bg-white p-8 rounded-xl shadow-md border">
        <h3 className="text-2xl font-bold text-gray-900">Monthly</h3>
        <p className="mt-2 text-gray-600">Pay as you go</p>
        <p className="mt-6 text-4xl font-extrabold text-black">$10</p>
        <p className="text-gray-500">per month</p>
        <ul className="mt-6 text-left space-y-2 text-gray-600">
          <li>✅ All features</li>
          <li>✅ 7-day free trial</li>
          <li>✅ Cancel anytime</li>
        </ul>
        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
          Start Free Trial
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-gray-900">Yearly</h3>
        <p className="mt-2 text-gray-600">One charge. Full access. All year</p>
        <p className="mt-6 text-4xl font-extrabold text-black">$120</p>
        <p className="text-gray-500">per year</p>
        <ul className="mt-6 text-left space-y-2 text-gray-600">
          <li>✅ Everything in monthly</li>
          <li>✅ Priority support</li>
          <li>✅ Early access to new features</li>
        </ul>
        <button className="mt-6 w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition">
          Go Yearly & Save
        </button>
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
      Got Questions?
    </h2>
    <p className="mt-4 text-lg text-gray-600 text-center">
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
        <details key={i} className="group border border-gray-200 rounded-xl p-4">
          <summary className="flex justify-between items-center cursor-pointer text-gray-800 font-medium text-lg">
            {faq.q}
            <span className="transition-transform group-open:rotate-180 text-xl">⬇</span>
          </summary>
          <p className="mt-3 text-gray-600">{faq.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>
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
        href="#"
        className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl text-lg hover:bg-yellow-500 transition"
      >
        Get Started — It&apos;s Free
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
