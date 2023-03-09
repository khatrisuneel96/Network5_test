import axios from 'axios'
import ApiToken from "../models/apiToken.js"

export const postEvents = async (req, res) => {

    const GToken = await ApiToken.findOne({media: "google"})

    var data = JSON.stringify(req.body) //the event from the client
      var config = {
        method: 'post',
        url: 'https://www.googleapis.com/calendar/v3/calendars/benmoxon256@gmail.com/events',
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


export const getEvents = async (req, res) => { //sending email through gmail
    
  const GToken = await ApiToken.findOne({media: "google"})

    var config = {
      method: 'get',
      url: 'https://www.googleapis.com/calendar/v3/calendars/benmoxon256%40gmail.com/events?timeMax=2023-08-27T17%3A52%3A58.000Z&timeMin=2023-07-27T17%3A52%3A58.000Z&key='+process.env.gapiKey,
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

