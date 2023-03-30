import mongoose from "mongoose"

const pageSchema = mongoose.Schema({
    media: String,
    name: String,
    id: String,
    user: String,
    access_token: String,
})
const Page = mongoose.model('Page', pageSchema)
export default Page