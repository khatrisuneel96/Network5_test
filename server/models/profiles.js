import mongoose from "mongoose"

const profileSchema = mongoose.Schema({
    user: String,
    img1: String,
    org_name: String,
    img2: String,
    contact: String,
    img3: String,
    description: String,
    img4: String
})
const Profile = mongoose.model('Profile', profileSchema)
export default Profile