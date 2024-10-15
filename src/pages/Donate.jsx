import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  // Initialize Yoco SDK on component mount
  useEffect(() => {
    if (window.YocoSDK) {
      window.yoco = new window.YocoSDK({
        publicKey: import.meta.env.VITE_YOCO_PUBLIC_KEY,
      });
    }
  }, []);

  const sendConfirmationEmail = (userEmail, donationAmount) => {
    const serviceID = "service_2o5q5p9";
    const templateID = "template_sj40agl";
    const userID = "9jfKsifhXUcbK9RZH";

    const emailParams = {
      to_email: userEmail, // Ensure this matches your EmailJS template
      company_email: "info@raisingconsciousness.co.za", // Company email
      donation_amount: donationAmount, // Pass the donation amount
      message: `Thank you for your generous donation of ${donationAmount} ZAR!`, // Optional custom message
    };

    emailjs
      .send(serviceID, templateID, emailParams, userID)
      .then(() => {
        toast.success("Confirmation email sent!");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        toast.error("Failed to send confirmation email.");
      });
  };

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
          // Send the token, amount, and email to the backend for processing
          try {
            const response = await axios.post(
              "http://localhost:5000/v1/charges",
              {
                token: result.id,
                amountInCents: amount * 100,
              }
            );
            console.log("Backend response:", response);

            if (response.data.status === "successful") {
              // Show success notification
              toast.success("Donation successful! Thank you for your support.");

              // Send confirmation email
              sendConfirmationEmail(email, amount);

              // Reset the amount and email input
              setAmount(0);
              setEmail("");

              // Redirect to home screen
              navigate("/"); // Redirect to the home screen
            } else {
              toast.error("Donation failed. Please try again.");
            }
          } catch (error) {
            console.error("Error:", error);
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
        Donate to Our Cause
      </h1>
      <p className="text-lg text-center mb-8">
        Your contributions help us continue our mission to raise consciousness.
      </p>
      <div className="flex justify-center">
        <form onSubmit={handleDonate} className="flex flex-col gap-8 m-4 py-2">
          <div className="form-group flex gap-5">
            <label htmlFor="amount">Donation Amount (ZAR)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group flex gap-5">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-color-1 text-white rounded-lg hover:bg-color-2 transition-colors"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
