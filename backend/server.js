import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connetDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();

// --- UPDATED CORS BLOCK ---
const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173',
  'https://quizapp-production-f8fc.up.railway.app', // Your specific Railway Frontend
  /\.onrender\.com$/,                              // Allows Render URLs
  /\.up\.railway\.app$/                             // Automatically allows any Railway URL
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.some(allowed => {
      if (allowed instanceof RegExp) return allowed.test(origin);
      return allowed === origin;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log("CORS blocked for origin:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
// ------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connetDB().catch(err => {
  console.error("Failed to connect to database:", err);
});

app.use('/api/auth', userRouter);
app.use('/api/results', resultRouter);

app.get('/', (req, res) => {
    res.send("Backend is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;