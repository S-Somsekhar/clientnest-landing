// src/app/page.js
export const metadata = {
  title: 'ClientNest – Close More Clients, Effortlessly',
  description: 'Ditch spreadsheets. Organize your leads, follow-ups, and deals – all in one smart CRM.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20 text-center font-sans">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
          Ditch Spreadsheets. <br />
          Close More Clients.
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-700">
          Simple CRM for solopreneurs, coaches, freelancers & closers.
        </p>

        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Join the Waitlist</h2>
            <p className="mt-4 text-gray-700">Get early access + a 14-day free trial when we launch.</p>

            <form
              action="https://submit-form.com/bzWHu1l6p"
              method="POST"
              className="mt-8 space-y-4 text-left"
            >
              <input type="hidden" name="_redirect" value="/success" />
              <input type="checkbox" name="_honeypot" className="hidden" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
                required
              />
              <textarea
                name="message"
                placeholder="What do you struggle with in client management?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 active:bg-blue-950 transition-colors"
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

      <section className="w-full bg-white py-5 px-6 mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
            Tired of Losing Leads?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Track. Follow up. Close. Stress-free.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4">Tool</th>
                  <th className="p-4">Spreadsheets</th>
                  <th className="p-4">Other CRMs</th>
                  <th className="p-4">ClientNest</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 bg-white">
                <tr className="bg-gray-50 border-b">
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
                <tr className="bg-gray-50 border-b">
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
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      What Makes ClientNest a No-Brainer?
    </h2>
    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
      Built for solopreneurs who hate complexity. Everything you need. Nothing you don&apos;t.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
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
          title: 'Stale Lead Alerts',
          desc: 'ClientNest alerts you about cold leads before they ghost.',
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
          className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
          <p className="mt-2 text-gray-700">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="w-full bg-gray-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      See It In Action
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
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
      Simple, Honest Pricing
    </h2>
    <p className="mt-4 text-lg text-gray-700">
      No tiers. No tricks. Just one plan that does it all.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-2">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900">Monthly</h3>
        <p className="mt-2 text-gray-600">Pay as you go</p>
        <p className="mt-6 text-4xl font-extrabold text-black">$10</p>
        <p className="text-sm text-gray-500">per month</p>
        <ul className="mt-6 text-left space-y-2 text-gray-700">
          <li>✅ All features included</li>
          <li>✅ 7-day free trial</li>
          <li>✅ Cancel anytime</li>
        </ul>
        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
          Start Free Trial
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-gray-900">Yearly</h3>
        <p className="mt-2 text-gray-600">One charge. Full access. All year long.</p>
        <p className="mt-6 text-4xl font-extrabold text-black">$99</p>
        <p className="text-sm text-gray-500">billed annually (save 17%)</p>
        <ul className="mt-6 text-left space-y-2 text-gray-700">
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
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 text-center">
      Got Questions?
    </h2>
    <p className="mt-4 text-lg text-gray-700 text-center">
      We've got answers.
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
          <summary className="flex justify-between items-center cursor-pointer text-blue-900 font-medium text-lg">
            {faq.q}
            <span className="transition-transform group-open:rotate-180 text-xl">⬇</span>
          </summary>
          <p className="mt-3 text-gray-700">{faq.a}</p>
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

      <footer className="w-full bg-gray-900 text-white py-10 px-6 mt-[-2px]">
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

  <a
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
            <img src="/stripe-secure.svg" alt="Stripe Secured" className="h-5" />
            Payments secured via Stripe
          </span>
        </div>
      </footer>
    </main>
  );
}
