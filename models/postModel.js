import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    date:String,
    preface:String
})

const Posts = mongoose.models.Posts || mongoose.model("Posts",postSchema)

export default Posts