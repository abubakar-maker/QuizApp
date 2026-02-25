import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connetDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })
)

connetDB();

app.use('/api/auth',userRouter )
app.use('/api/results' ,resultRouter)


app.get('/', (req,res) => {
    res.send("Api Working ")
})



app.listen(port, ()=> {
    console.log(`server satrted at http://localhost:${port}`);
    
})