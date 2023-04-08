import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import dbConnect from "./config/db.js";

// dotenv
dotenv.config({path:'./config/config.env'});

const app=express();

// database connection
dbConnect();

// middleware
app.use(express.json());
// app.use(morgan('dev'))


const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`sever is running at ${PORT} enviorment ${process.env.NODE_ENV}`.bgCyan.white))