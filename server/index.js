import express from "express";
import router from "./router/index.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 7000;
const corsOption = {
    origin: process.env.URL, // allow the 'https://client-domain.com' to send requests
    credentials: true, // allow the browser to include cookies & auth.headers
}

app.use("/", router);
app.use(cors(corsOption));

try {
  app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.log("Server start is failed: ", error.message);
  }
}
