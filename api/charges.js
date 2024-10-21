import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
import emailjs from "emailjs-com";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://www.raisingconsciousness.co.za/",
  })
);
app.use(bodyParser.json());

const sendConfirmationEmail = async (userEmail, donationAmount) => {
  const serviceID = "service_2o5q5p9";
  const templateID = "template_sj40agl";
  const userID = "9jfKsifhXUcbK9RZH";

  const emailParams = {
    to_email: userEmail,
    company_email: "info@raisingconsciousness.co.za",
    donation_amount: donationAmount,
    message: `Thank you for your generous donation of ${donationAmount} ZAR!`,
  };

  try {
    console.log(`Sending confirmation email to: ${userEmail}`);
    await emailjs.send(serviceID, templateID, emailParams, userID);
    console.log("Confirmation email sent successfully!");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

app.post("api/checkouts", async (req, res) => {
  const { amountInCents, cancelUrl, successUrl, failureUrl, email } = req.body;
  const secretKey = process.env.VITE_APP_YOCO_SECRET_KEY;

  // Log incoming request data
  console.log("Received payment request:", req.body);
  console.log(
    `Using Yoco secret key: ${secretKey ? "Present" : "Not present"}`
  );

  try {
    const response = await axios.post(
      "https://payments.yoco.com/api/checkouts",
      {
        amount: amountInCents,
        currency: "ZAR",
        cancelUrl: cancelUrl,
        successUrl: successUrl,
        failureUrl: failureUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    // Log Yoco API response
    console.log("Yoco API response:", response.data);

    // Check if payment was successful
    if (response.data.status === "successful") {
      console.log("Payment successful. Sending confirmation email.");
      await sendConfirmationEmail(email, amountInCents / 100);
    } else {
      console.log("Payment not successful:", response.data.status);
    }

    res.status(200).json(response.data);
  } catch (error) {
    // Log error details for debugging
    console.error("Error processing payment:", error);
    console.error("Error response from Yoco API:", error.response?.data);
    res
      .status(400)
      .json({ message: error.response?.data?.message || error.message });
  }
});

export default app;
