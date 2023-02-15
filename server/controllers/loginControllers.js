import url from 'url'
import needle from 'needle'
import axios from 'axios'
import ApiToken from "../models/apiToken.js"
import Secret from '../models/secrets.js'
import Page from "../models/page.js"

export const getFbLogin = async (req, res) => { //facebook login fucntion
    try {
        const fbvalues = await Secret.findOne({media: "facebook"})         //get parameter values from database
        const params = new URLSearchParams({                              //set parameter values
            ['redirect_uri']: fbvalues.redirect_uri,
            ['client_id']: fbvalues.client_id,
            ['client_secret']: fbvalues.secret,
            ...url.parse(req.url, true).query
        })
        await ApiToken.deleteMany({media: "facebook"})                                        //delete old values
        const apiRes = await needle('get', `https://graph.facebook.com/v15.0/oauth/access_token?${params}`)     //request made
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

export const getGLogin = async (req, res) => {  //google login fucntion
    try {
        const gvalues = await Secret.findOne({media: "google"})         //get parameter values from database
        const params = new URLSearchParams({                              //set parameter values
            ['redirect_uri']: gvalues.redirect_uri,
            ['client_id']: gvalues.client_id,
            ['client_secret']: gvalues.secret,
            ['grant_type']: 'authorization_code',
            ...url.parse(req.url, true).query
        })
        await ApiToken.deleteMany({media: "google"})                                        //delete old values
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

export const getIgLogin = async (req, res) => { //instagram login function
    try {
        const PageId = req.body.id                  //get Fb page Id that was past from client
        const FbToken = await ApiToken.findOne({media: "facebook"})
        await ApiToken.deleteMany({media: "instagram"})                                        //delete old values
        const apiRes = await needle('get', 'https://graph.facebook.com/v14.0/'+PageId+'?fields=instagram_business_account',
        { headers: { "Authorization": 'Bearer ' + FbToken.access_token } })                 //request made
        console.log(apiRes.body)
        const newToken = new ApiToken()            //setting the value for mongodb
        newToken.media = 'instagram'
        const FbPageMatch = await Page.findOne({id: PageId})  //Getting the fbpage element that has the ig account attached
        newToken.access_token = FbPageMatch.access_token  //saving fb page access token as ig access token in database
        await newToken.save()                          //saving the value to mongodb    
        await Page.deleteMany({media: "instagram"}) //creating new page element in database for ig page
        const newPage = new Page()
        newPage.media = 'instagram'
        newPage.name = FbPageMatch.name             //setting the ig page to have the same name as its matching facebook page
        newPage.access_token = FbPageMatch.access_token //setting the ig page to have the same access token as its matching facebook page
        newPage.id = apiRes.body.instagram_business_account.id //setting the ig page to have the ig page id
        await newPage.save()
        res.status(200).json(newToken)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const getDiscLogin = async (req, res) => {  //discord login function
    try {
        const dcvalues = await Secret.findOne({media: "discord"})         //get parameter values from database
        const params = new URLSearchParams({                              //set parameter values
            ['redirect_uri']: dcvalues.redirect_uri,
            ['client_id']: dcvalues.client_id,
            ['client_secret']: dcvalues.secret,
            ['grant_type']: 'authorization_code',
            ...url.parse(req.url, true).query
        })
        await ApiToken.deleteMany({media: "discord"})                                        //delete old values
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
