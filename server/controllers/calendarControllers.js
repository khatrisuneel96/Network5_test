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

