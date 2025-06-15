import Link from "next/link";
export const metadata = {
  title: "Terms & Conditions – ClientNest",
  description: "The rules of using ClientNest.",
};

export default function TermsPage() {
  return (
    <section className="w-full bg-white min-h-screen py-24 px-6">
  <div className="max-w-4xl mx-auto text-gray-800">
    <div className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: June 10, 2025</p>
    </div>

    <div className="space-y-12">
      {[
        {
          title: '1. Use of Service',
          desc: 'You may use our CRM platform only for lawful purposes. You are responsible for all data entered into your account.',
        },
        {
          title: '2. Subscriptions & Billing',
          desc: 'You agree to pay the applicable fees. Monthly and annual plans renew automatically unless cancelled.',
        },
        {
          title: '3. Intellectual Property',
          desc: 'ClientNest retains all rights to the platform’s code, design, and content. You own your data.',
        },
        {
          title: '4. Cancellation & Refunds',
          desc: 'You can cancel anytime. Refunds are handled on a case-by-case basis. Contact support if needed.',
        },
        {
          title: '5. Limitation of Liability',
          desc: 'We are not liable for any indirect damages or data loss. The platform is provided “as is”.',
        },
        {
          title: '6. Modifications',
          desc: 'We may update these terms. Continued use after changes means you accept the new terms.',
        },
        {
          title: '7. Contact',
          desc: 'If you have any questions, email us at support@clientnesthq.com.',
        },
      ].map((item, idx) => (
        <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link href="/" className="text-blue-900 font-medium underline">
        ← Back to Homepage
      </Link>
    </div>
  </div>
</section>
  );
}

