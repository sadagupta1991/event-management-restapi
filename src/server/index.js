import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "../routes/routes.js";


dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

app.use("/", routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
