import mongoose from "mongoose";


export default async function conntectToDb(){
    mongoose.connect(process.env.MONGO_URI)
}