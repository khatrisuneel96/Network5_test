import PostMessage from "../models/postMessage.js"
import User from '../models/userModel.js'
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body
    //console.log(post.creator)
    const creator = await post.creator
    const user = await User.findOne({email: creator})
    //console.log(user.profile_pic)

    const newPost = new PostMessage(post)
    newPost.profile_pic = user.profile_pic
    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}


export const deletePost = async (req,res) => {
    const { id } = req.params

    await PostMessage.findByIdAndRemove(id)

    res.json({ message: 'Post deleted successfully'})
}