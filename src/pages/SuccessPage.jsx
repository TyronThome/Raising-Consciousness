import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect to home page after a few seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">
          <span className="gradient-animation">Payment Successful! 🎉</span>
        </h1>
        <p className="text-xl mb-6">
          Thank you for your generous donation! Your support means the world to
          us.
        </p>
        <p className="text-lg mb-8 text-gray-300">
          You should receive a confirmation email shortly. Your contribution
          helps us continue our mission to raise consciousness.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-color-1 text-white rounded-lg hover:bg-color-2 hover:text-black hover:font-bold transition-colors"
        >
          Return to Home
        </button>
        <p className="text-sm text-gray-400 mt-4">
          You will be automatically redirected to the home page in a few
          seconds.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
