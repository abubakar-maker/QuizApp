import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connetDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();

// --- ONLY USE THIS ONE CORS BLOCK ---
const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173',
  /\.onrender\.com$/ 
];

app.use(cors({
  origin: allowedOrigins,
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