export const metadata = {
  title: "Terms & Conditions – ClientNest",
  description: "The rules of using ClientNest.",
};

export default function TermsPage() {
  return (
    <section className="w-full bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: June 10, 2025</p>
        </div>

        <div className="space-y-10">
    
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">1. Use of Service</h2>
            <p className="mt-2 text-gray-700">You may use our CRM platform only for lawful purposes. You are responsible for all data entered into your account.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">2. Subscriptions & Billing</h2>
            <p className="mt-2 text-gray-700">You agree to pay the applicable fees. Monthly and annual plans renew automatically unless cancelled.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">3. Intellectual Property</h2>
            <p className="mt-2 text-gray-700">ClientNest retains all rights to the platform&apos;s code, design, and content. You own your data.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">4. Cancellation & Refunds</h2>
            <p className="mt-2 text-gray-700">You can cancel anytime. Refunds are handled on a case-by-case basis. Contact support if needed.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">5. Limitation of Liability</h2>
            <p className="mt-2 text-gray-700">We are not liable for any indirect damages or data loss. The platform is provided “as is”.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">6. Modifications</h2>
            <p className="mt-2 text-gray-700">We may update these terms. Continued use after changes means you accept the new terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800">7. Contact</h2>
            <p className="mt-2 text-gray-700">
              If you have any questions, email us at{" "}
              <a href="mailto:support@clientnesthq.com" className="text-blue-600 underline">
                support@clientnesthq.com
              </a>.
            </p>
          </div>
        </div>

                <div className="mt-12 text-center">
            <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-200"
            >
            ← Back to Home
            </a>
        </div>
      </div>
    </section>
  );
}

