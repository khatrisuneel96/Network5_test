import mongoose from "mongoose"

const secretSchema = mongoose.Schema({
    media: String,
    client_id: String,
    secret: String,
    redirect_uri: String,
})
const Secret = mongoose.model('Secret', secretSchema)
export default Secret