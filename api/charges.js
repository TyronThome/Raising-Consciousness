import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://www.raisingconsciousness.co.za/",
  })
);
app.use(bodyParser.json());

app.post("/v1/charges", async (req, res) => {
  const { token, amountInCents } = req.body;
  const secretKey = process.env.VITE_APP_YOCO_SECRET_KEY;

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

export default app;
