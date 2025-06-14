export const metadata = {
  title: "Privacy Policy – ClientNest",
  description: "How we handle your data at ClientNest.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: June 10, 2025</p>

        <p className="mb-6">
          ClientNest (“we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personal Information (e.g., name, email, billing details)</li>
              <li>Lead and contact data you upload or enter</li>
              <li>Usage data, cookies, and analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your data to provide and improve our CRM services, send product updates, process payments, and for customer support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. Data Sharing</h2>
            <p className="text-gray-700">
              We do not sell your data. We may share it with trusted vendors (like payment processors or analytics tools) under strict data protection agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Your Rights</h2>
            <p className="text-gray-700">
              You can request to access, correct, or delete your data. Users in the EU and California have specific rights under GDPR and CCPA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Data Security</h2>
            <p className="text-gray-700">
              We use SSL encryption and industry-standard security practices to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Contact</h2>
            <p className="text-gray-700">
              If you have any questions, email us at{" "}
              <a href="mailto:support@clientnesthq.com" className="text-blue-600 underline">
                support@clientnesthq.com
              </a>
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
