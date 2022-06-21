import conntectToDb from "../../../utils/connectDb"
import PostModel from "../../../models/postModel"


export default async function getPostById(req, res) {
    await conntectToDb()
    const { id } = req.query
    const post = await PostModel.findById(id)
    res.status(200).json(post)
}