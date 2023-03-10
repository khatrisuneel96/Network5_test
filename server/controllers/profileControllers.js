import Profile from "../models/profiles.js"
import User from "../models/userModel.js"

export const postProfile = async (req, res) => { //sending email through gmail

    var data = req.body //the email from the client
    //console.log(req.body.user)
    await Profile.deleteMany({user: req.body.user})                                        //delete old profile


    const newProfile = await new Profile(data)

    try {
        await newProfile.save()

        res.status(201).json(newProfile)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}