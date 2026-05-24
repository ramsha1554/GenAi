import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRouter from "./routes/auth.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import connectDB from "./config/database.js";

dotenv.config();

connectDB();

const app = express();


// middleware FIRST
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use(cookieParser());


// routes AFTER middleware
app.use("/api/auth", authRouter);


app.use("/api/interview", interviewRouter);


app.get('/', (req, res) => {
  res.send('server is running successfully');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;