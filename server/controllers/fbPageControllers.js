import needle from 'needle'
import ApiToken from "../models/apiToken.js"
import FbPage from "../models/fbPage.js"

export const getFbPages = async (req, res) => { //getting fb pages for getting ig login
    try {
        const FbToken = await ApiToken.findOne({media: "facebook"})
        await FbPage.deleteMany({media: "facebook"})                                        //delete old values
        const apiRes = await needle('get', `https://graph.facebook.com/v14.0/me/accounts?`,
        { headers: { "Authorization": 'Bearer ' + FbToken.access_token } })
        const data = apiRes.body.data.map(media => ({...media, media:'facebook'}))
        data.forEach(async element => {
            const newPage = new FbPage(element)            //setting the value for mongodb (FIX FOREACH)
            await newPage.save()                          //saving the value to mongodb 
        })
        //const newPage = new FbPage(data)            //setting the value for mongodb
        //await newPage.save()                          //saving the value to mongodb   
        //console.log(data)     
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}