import mongoose from "mongoose"

const tokenSchema = mongoose.Schema({
    media: String,
    access_token: String,
    token_type: String,
    expires_in: Number,
})
const ApiToken = mongoose.model('ApiToken', tokenSchema)
export default ApiToken

