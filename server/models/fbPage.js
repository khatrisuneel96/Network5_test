import mongoose from "mongoose"

const fbPageSchema = mongoose.Schema({
    media: String,
    name: String,
    id: String,
    access_token: String,
})
const FbPage = mongoose.model('FbPage', fbPageSchema)
export default FbPage