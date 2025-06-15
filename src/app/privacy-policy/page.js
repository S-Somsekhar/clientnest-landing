import Link from "next/link";
export const metadata = {
  title: "Privacy Policy – ClientNest",
  description: "How we handle your data at ClientNest.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-white min-h-screen py-24 px-6">
  <div className="max-w-3xl mx-auto text-gray-800">
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: June 10, 2025</p>
    </div>

    <p className="mb-10 text-gray-700">
      ClientNest (“we”, “us”, or “our”) respects your privacy. This policy explains how we collect, use, and protect your information.
    </p>

    <div className="space-y-10">
      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Personal Information (e.g., name, email, billing details)</li>
          <li>Lead and contact data you upload or enter</li>
          <li>Usage data, cookies, and analytics</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700">
          To provide and improve our services, send updates, process payments, and offer support.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">3. Data Sharing</h2>
        <p className="text-gray-700">
          We don’t sell your data. We only share it with trusted vendors (like Stripe) under data protection agreements.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">4. Your Rights</h2>
        <p className="text-gray-700">
          You may request access, edits, or deletion of your data. Users in the EU or California have additional rights under GDPR/CCPA.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We use SSL and industry-standard practices to protect your information.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">6. Contact</h2>
        <p className="text-gray-700">
          Questions? Reach out at{" "}
          <a href="mailto:support@clientnesthq.com" className="text-blue-600 underline">
            support@clientnesthq.com
          </a>
        </p>
      </div>
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
