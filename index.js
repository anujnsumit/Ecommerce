import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import dbConnect from "./config/db.js";
import router from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import cors from "cors";

// dotenv
dotenv.config({path:'./config/config.env'});

const app=express();

// database connection
dbConnect();

// middleware
app.use(express.json());
// app.use(morgan('dev'))
app.use(cors());

// Routes
app.use('/api/v1/auth',router);
app.use('/api/v1/category',categoryRoute);

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`sever is running at ${PORT} enviorment ${process.env.NODE_ENV}`.bgCyan.white))