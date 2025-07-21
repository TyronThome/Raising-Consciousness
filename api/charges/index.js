import axios from "axios";
import { sendConfirmationEmail } from "../../utils/sendConfirmationEmail.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amountInCents, email, token } = req.body;

  if (!amountInCents || !email || !token) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.log("Received payment request:", req.body);

  try {
    const response = await axios.post(
      "https://payments.yoco.com/api/checkouts",
      {
        token,
        amount: amountInCents,
        currency: "ZAR",
        email: email,
        cancelUrl: "https://www.raisingconsciousness.co.za/donate/cancel",
        successUrl: "https://www.raisingconsciousness.co.za/donate/success",
        failureUrl: "https://www.raisingconsciousness.co.za/donate/failure",
      },
      {
        headers: {
          "X-Auth-Secret-Key": process.env.YOCO_SECRET_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Yoco API response:", response.data);

    if (response.data.status === "successful") {
      console.log("Payment successful. Sending confirmation email.");
      await sendConfirmationEmail(email, amountInCents / 100);
    } else {
      console.log("Payment not successful:", response.data.status);
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(400).json({
      message: error.response?.data?.message || error.message,
    });
  }
}
