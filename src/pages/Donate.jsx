import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Carousel from "../components/Carousel";

const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (window.YocoSDK) {
      window.yoco = new window.YocoSDK({
        publicKey: import.meta.env.VITE_YOCO_PUBLIC_KEY,
      });
    }
  }, []);

  const handleDonate = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    if (!window.yoco) {
      toast.error("Yoco SDK is not loaded.");
      return;
    }

    window.yoco.showPopup({
      amountInCents: amount * 100,
      currency: "ZAR",
      name: "Raising Consciousness",
      description: "Donation to Raising Consciousness",
      callback: async (result) => {
        if (result.error) {
          toast.error(`Payment failed: ${result.error.message}`);
        } else {
          try {
            const apiUrl =
              import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
            console.log(`API URL being used: ${apiUrl}`);

            const response = await axios.post(`${apiUrl}/api/checkouts`, {
              token: result.id,
              amountInCents: amount * 100,
              email: email,
            });

            console.log("Backend response:", response.data);

            if (response.data.redirectUrl) {
              window.location.href = response.data.redirectUrl;
            } else {
              toast.error("Failed to initiate payment. Please try again.");
            }
          } catch (error) {
            console.error(
              "Error during donation:",
              error.response?.data || error.message
            );
            toast.error(
              `Error: ${error.response?.data?.message || error.message}`
            );
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
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-color-1 text-white rounded-lg hover:bg-color-2 hover:text-black hover:font-bold transition-colors"
          >
            Donate Now
          </button>
        </form>
      </div>

      <Carousel />
    </div>
  );
};

export default Donate;
