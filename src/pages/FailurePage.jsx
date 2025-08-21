import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FailurePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect to donate page after some time
    const timer = setTimeout(() => {
      navigate("/donate");
    }, 15000); // Redirect after 15 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">
          <span className="gradient-animation">Payment Failed ❌</span>
        </h1>
        <p className="text-xl mb-6">
          Unfortunately, your payment was unsuccessful. This can happen for
          various reasons.
        </p>
        <div className="text-lg mb-8 text-gray-300 space-y-3">
          <p>Common reasons for payment failure:</p>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>Insufficient funds</li>
            <li>Card details entered incorrectly</li>
            <li>Bank security restrictions</li>
            <li>Network connectivity issues</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/donate")}
            className="px-8 py-3 bg-color-1 text-white rounded-lg hover:bg-color-2 hover:text-black hover:font-bold transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            Return to Home
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Need help? Contact our support team or you&apos;ll be redirected to
          try again in a few seconds.
        </p>
      </div>
    </div>
  );
};

export default FailurePage;
