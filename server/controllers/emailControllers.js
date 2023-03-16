import axios from "axios"
import ApiToken from "../models/apiToken.js"
import * as dotenv from 'dotenv'
dotenv.config()

export const postEmails = async (req, res) => { //sending email through gmail
    
    const GToken = await ApiToken.findOne({media: "google"})

    var data = JSON.stringify(req.body) //the email from the client
    //console.log(data)
      var config = {
        method: 'post',
        url: 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        headers: {
          'Authorization': 'Bearer '+ GToken.access_token,
          'Content-Type': 'application/json'
        },
        data : data
      };

      await axios(config)
              .then(function(response) {
                //console.log(response.body)
                res.status(200).json(data)
              })
              .catch(function(error) {
              res.status(500).json({ error })
              })
}

export const getEmails = async (req, res) => { //sending email through gmail
    
  const GToken = await ApiToken.findOne({media: "google"})

    var config = {
      method: 'get',
      url: 'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=20&key='+process.env.gapiKey,
      headers: {
        'Authorization': 'Bearer '+ GToken.access_token,
        'Content-Type': 'application/json'
      }
    };

    await axios(config)
            .then(function(response) {
              console.log('what')
              console.log(response)
              res.status(200).json(response.data)
            })
            .catch(function(error) {
              console.log(error)
              res.status(500).json({ error })
            })
}