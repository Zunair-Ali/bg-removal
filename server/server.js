import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';

// App COnfig
const PORT = process.env.PORT || 4000;
const app = express()

// initilize middleware
app.use(express.json())
app.use(cors())
await connectDB()

// Api Route
app.get('/',(req,res)=>res.send("API Working"))
app.listen(PORT,()=> console.log("Server running on port " + PORT)
)