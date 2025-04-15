import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './connect.js';
import productRoute from './routes/product.route.js'



const app = express();


const port = process.env.PORT;

app.use(express.json());

app.use('/api/v1/products',productRoute)


app.listen(port,()=>{
    connectDB();
    console.log(`server is listning at ${port}`);
})

