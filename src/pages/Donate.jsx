import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.YocoSDK) {
      window.yoco = new window.YocoSDK({
        publicKey: import.meta.env.VITE_YOCO_PUBLIC_KEY,
      });
    }
  }, []);

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!window.yoco) {
      toast.error("Yoco SDK is not loaded.");
      return;
    }

    setIsProcessing(true);

    window.yoco.showPopup({
      amountInCents: amount * 100,
      currency: "ZAR",
      name: "Raising Consciousness",
      description: "Donation to Raising Consciousness",
      callback: async (result) => {
        if (result.error) {
          toast.error(`Payment failed: ${result.error.message}`);
          setIsProcessing(false);
        } else {
          try {
            // Process the payment with the token from the popup
            const response = await axios.post("/api/charges", {
              token: result.id,
              amountInCents: amount * 100,
              email: email,
            });

            if (
              response.data.success &&
              response.data.status === "successful"
            ) {
              toast.success("Payment successful! Thank you for your donation.");
              // Redirect to success page
              navigate("/success");
            } else {
              toast.error("Payment failed. Please try again.");
            }
          } catch (error) {
            console.error("Payment processing error:", error);
            toast.error(
              `Error: ${error.response?.data?.message || error.message}`
            );
            // Redirect to failure page on error
            navigate("/failure");
          } finally {
            setIsProcessing(false);
          }
        }
      },
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="gradient-animation">Donate to Our Cause</span>
      </h1>
      <p className="text-lg text-center mb-8">
        Your contributions help us continue our mission to raise consciousness.
      </p>
      <div className="flex justify-center">
        <form onSubmit={handleDonate} className="flex flex-col gap-8 m-4 py-2">
          <div className="flex gap-5">
            <label htmlFor="amount">Donation Amount (ZAR)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
              className="text-n-1"
              disabled={isProcessing}
            />
          </div>
          <div className="flex gap-5">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="text-n-1"
              disabled={isProcessing}
            />
          </div>
          <button
            type="submit"
            disabled={isProcessing}
            className={`px-8 py-3 bg-color-1 text-white rounded-lg hover:bg-color-2 hover:text-black hover:font-bold transition-colors ${
              isProcessing ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isProcessing ? "Processing..." : "Donate Now"}
          </button>
        </form>
      </div>

      <Carousel />
    </div>
  );
};

export default Donate;
