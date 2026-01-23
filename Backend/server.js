import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import threadRoutes from "./routes/thread.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

//  DB connect function FIRST
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database");
  } catch (err) {
    console.log("Failed to connect with db", err);
  }
};

app.use("/api", threadRoutes);

app.post("/api/chat", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: "Hello"
        }
      ]
    })
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});
