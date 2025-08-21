import axios from "axios";
import { sendConfirmationEmail } from "../../utils/sendConfirmationEmail.js";

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amountInCents, email, token } = req.body;

  if (!amountInCents || !email || !token) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const secretKey = process.env.YOCO_SECRET_KEY;

  if (!secretKey) {
    console.error("YOCO_SECRET_KEY environment variable is not set");
    return res.status(500).json({
      message: "Server configuration error - missing secret key",
    });
  }

  console.log("Processing direct payment:", {
    amount: amountInCents,
    email: email,
    tokenLength: token?.length,
  });

  try {
    // Process the payment directly using the token from the popup
    const requestData = {
      token,
      amountInCents,
      currency: "ZAR",
    };

    const requestHeaders = {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    };

    console.log("Making direct charge request to Yoco");

    // Use the charges endpoint for direct payment processing
    const response = await axios.post(
      "https://online.yoco.com/v1/charges/",
      requestData,
      { headers: requestHeaders }
    );

    console.log("Yoco charge response:", response.data);

    // Check if payment was successful
    if (response.data.status === "successful") {
      console.log("Payment successful. Sending confirmation email.");
      try {
        await sendConfirmationEmail(email, amountInCents / 100);
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the payment if email fails
      }

      res.status(200).json({
        success: true,
        status: "successful",
        message: "Payment processed successfully",
        chargeId: response.data.id,
      });
    } else {
      console.log("Payment failed:", response.data.status);
      res.status(400).json({
        success: false,
        message: "Payment was not successful",
        status: response.data.status,
      });
    }
  } catch (error) {
    console.error("Error processing payment:", error.message);
    console.error("Error response data:", error.response?.data);
    console.error("Error status:", error.response?.status);

    res.status(400).json({
      success: false,
      message: error.response?.data?.message || error.message,
      debug: {
        status: error.response?.status,
        data: error.response?.data,
      },
    });
  }
}
