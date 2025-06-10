import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Success!</h1>
        <p className="text-lg mb-4">
          Thanks for signing up! We&apos;ll reach out as soon as we launch.
        </p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}
