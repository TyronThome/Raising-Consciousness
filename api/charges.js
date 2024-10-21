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
    await emailjs.send(serviceID, templateID, emailParams, userID);
    console.log("Confirmation email sent successfully!");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

app.post("/v1/charges", async (req, res) => {
  const { amountInCents, cancelUrl, successUrl, failureUrl, email } = req.body;
  const secretKey = process.env.VITE_APP_YOCO_SECRET_KEY;

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

    if (response.data.status === "successful") {
      await sendConfirmationEmail(email, amountInCents / 100);
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error processing payment:", error);
    res
      .status(400)
      .json({ message: error.response?.data?.message || error.message });
  }
});

export default app;
