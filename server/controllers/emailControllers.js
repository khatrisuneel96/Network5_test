import axios from "axios"
import ApiToken from "../models/apiToken.js"

export const postEmails = async (req, res) => { //sending email through gmail
    
    const GToken = await ApiToken.findOne({media: "google"})

    var data = JSON.stringify({
        "raw":"U3ViamVjdDogVGVzdApUbzogYmVubW94b24yNTZAZ21haWwuY29tCgpUZXN0"
    })
      var config = {
        method: 'post',
        url: 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        headers: {
          'Authorization': 'Bearer '+ GToken.access_token, 
          'Content-Type': 'application/json'
        },
        data : data
      };

      console.log(GToken.access_token)
      await axios(config)
              .then(function(response) {
                console.log(response.body)
                res.status(200).json(data)
              })
              .catch(function(error) {
              //console.log(error.response)
              res.status(500).json({ error })
              })
}


/*
export const postEmails = async (req, res) => { //sending email through gmail
    try {
        const GToken = await ApiToken.findOne({media: "google"})
        console.log(GToken)
        const apiRes = await needle('get', 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        { headers: { "Authorization": 'Bearer' + GToken } },
        {
            "raw":"U3ViamVjdDogVGVzdApUbzogYmVubW94b24yNTZAZ21haWwuY29tCgpUZXN0"
        }
        )     //request made
        const data = apiRes.body
        console.log(apiRes.body)
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}
*/