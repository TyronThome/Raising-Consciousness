import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace this with your frontend's address
  })
);
app.use(bodyParser.json());

// Sample Payment Charge Route
app.post("/v1/charges", async (req, res) => {
  const { token, amountInCents } = req.body;
  const secretKey = process.env.VITE_APP_YOCO_SECRET_KEY; // Store your secret key securely

  try {
    const response = await axios.post(
      "https://online.yoco.com/v1/charges/",
      {
        token: token,
        amountInCents: amountInCents,
        currency: "ZAR",
      },
      {
        headers: {
          "X-Auth-Secret-Key": secretKey,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error processing payment:", error);
    res
      .status(400)
      .json({ message: error.response?.data?.message || error.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
