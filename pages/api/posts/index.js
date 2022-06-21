import conntectToDb from "../../../utils/connectDb"
import PostModel from "../../../models/postModel"


export default async function getPosts(req, res) {
    await conntectToDb()
    const posts = await PostModel.find()
    res.status(200).json(posts)
}
