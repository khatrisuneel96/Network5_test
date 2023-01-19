import url from 'url'
import needle from 'needle'
import ApiToken from "../models/apiToken.js"

const API_BASE_URL = "https://graph.facebook.com/v15.0/oauth/access_token"
const REDIRECT_URI_VALUE = "https://localhost:3000/"
const CLIENT_ID_VALUE = "354529376664526"
const CLIENT_SECRET_VALUE = "ba91e8888b4701951acb94f5b6698eb7"

export const getFbLogin = async (req, res) => { 
                                                        //facebook login fucntion
    try {
        const params = new URLSearchParams({
            ['redirect_uri']: REDIRECT_URI_VALUE,
            ['client_id']: CLIENT_ID_VALUE,
            ['client_secret']: CLIENT_SECRET_VALUE,
            ...url.parse(req.url, true).query
        })
        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)     //request made
        const data = apiRes.body
        data.media = 'facebook'
        const newToken = new ApiToken(data)            //setting the value for mongodb
        await newToken.save()                          //saving the value to mongodb     
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const getGLogin = async (req, res) => { 
    //facebook login fucntion
    try {
        const params = new URLSearchParams({
            ['redirect_uri']: 'https://localhost:3000',
            ['client_id']: '419138563147-lblak6s03v4i6lssberpm1vr4gqg000b.apps.googleusercontent.com',
            ['client_secret']: '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',
            ['grant_type']: 'authorization_code',
            ...url.parse(req.url, true).query
        })
        const apiRes = await needle('post', `https://oauth2.googleapis.com/token?${params}`)     //request made
        const data = apiRes.body 
        data.media = 'google'
        const newToken = new ApiToken(data)            //setting the value for mongodb
        await newToken.save()                          //saving the value to mongodb        
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const getFbGroups = async (req, res) => { 
    //facebook login fucntion
    try {
        const FbToken = await ApiToken.findOne()
        console.log('Bearer ' + FbToken.access_token)
        const apiRes = await needle('get', `https://graph.facebook.com/v14.0/me/accounts?`,
        { headers: { "Authorization": 'Bearer ' + FbToken.access_token } })
        const data = apiRes.body       
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const getDiscLogin = async (req, res) => { 
    //discord login function
    try {
        const params = new URLSearchParams({
            ['redirect_uri']: 'https://localhost:3000',
            ['client_id']: '1012896743429513367',
            ['client_secret']: 'bfB6pwvECCtyqFUXb7eOf3iy5-udTVMo',
            ['grant_type']: 'authorization_code',
            ...url.parse(req.url, true).query
        })
        const apiRes = await needle('post', 'https://discord.com/api/v10/oauth2/token', `${params}`)     //request made
        const data = apiRes.body
        data.media = 'discord'
        const newToken = new ApiToken(data)            //setting the value for mongodb
        await newToken.save()                          //saving the value to mongodb     
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}