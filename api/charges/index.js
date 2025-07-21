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

  // Comprehensive environment debugging
  console.log("=== ENVIRONMENT DEBUG ===");
  console.log(
    "All env keys:",
    Object.keys(process.env).filter((key) => key.includes("YOCO"))
  );
  console.log("YOCO_SECRET_KEY exists:", !!process.env.YOCO_SECRET_KEY);
  console.log(
    "YOCO_SECRET_KEY length:",
    process.env.YOCO_SECRET_KEY?.length || 0
  );
  console.log(
    "YOCO_SECRET_KEY starts with sk_:",
    process.env.YOCO_SECRET_KEY?.startsWith("sk_")
  );
  console.log(
    "Raw env value (first 10 chars):",
    process.env.YOCO_SECRET_KEY?.substring(0, 10)
  );
  console.log("========================");

  const secretKey = process.env.YOCO_SECRET_KEY;

  if (!secretKey) {
    console.error("YOCO_SECRET_KEY environment variable is not set");
    return res.status(500).json({
      message: "Server configuration error - missing secret key",
      debug: {
        envKeys: Object.keys(process.env).filter((key) => key.includes("YOCO")),
        hasKey: !!secretKey,
      },
    });
  }

  console.log("Received payment request:", {
    amount: amountInCents,
    email: email,
    tokenLength: token?.length,
  });

  try {
    const requestData = {
      token,
      amount: amountInCents,
      currency: "ZAR",
      email: email,
      cancelUrl: "https://www.raisingconsciousness.co.za/cancel",
      successUrl: "https://www.raisingconsciousness.co.za/success",
      failureUrl: "https://www.raisingconsciousness.co.za/failure",
    };

    const requestHeaders = {
      "X-Auth-Secret-Key": secretKey,
      "Content-Type": "application/json",
    };

    console.log("Making request to Yoco with headers:", {
      hasSecretKey: !!requestHeaders["X-Auth-Secret-Key"],
      secretKeyPrefix: requestHeaders["X-Auth-Secret-Key"]?.substring(0, 7),
    });

    const response = await axios.post(
      "https://payments.yoco.com/api/checkouts",
      requestData,
      { headers: requestHeaders }
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
    console.error("Error processing payment:", error.message);
    console.error("Error response data:", error.response?.data);
    console.error("Error status:", error.response?.status);

    res.status(400).json({
      message: error.response?.data?.message || error.message,
      debug: {
        status: error.response?.status,
        data: error.response?.data,
      },
    });
  }
}
