import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connetDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();

// CORS configuration - allow Netlify frontend
app.use(
  cors({
    origin: [
      "https://quizzzaappmain.netlify.app",
      "http://localhost:5173"  // local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connetDB();

app.use('/api/auth', userRouter);
app.use('/api/results', resultRouter);

app.get('/', (req, res) => {
    res.send("Backend is running");
});

export default app;