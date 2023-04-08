import mongoose from "mongoose";

 const dbConnect=async()=>{
    const URI=process.env.MONGO_URI;
    try{
    const db=await mongoose.connect(URI);
    console.log(`${db.connection.host} connected`.bgMagenta.white);
    }catch{
    console.log("db connection failed")
    }
}

export default dbConnect;