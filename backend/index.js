import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'

import connectDB from './connect.js';
import productRoute from './routes/product.route.js'



const app = express();


const port = process.env.PORT||8000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));

app.use('/api/v1/products',productRoute)


app.listen(port,()=>{
    connectDB();
    console.log(`server is listning at ${port}`);
})

