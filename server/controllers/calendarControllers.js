import axios from 'axios'
import ApiToken from "../models/apiToken.js"
import { response } from 'express'

export const postEvents = async (req, res) => {

    const GToken = await ApiToken.findOne({media: "google"})

    var data = JSON.stringify({
        "summary": "Google I/O 2015",
        "location": "800 Howard St., San Francisco, CA 94103",
        "description": "A chance to hear more about Google developer products",
        "start": {
          "dateTime": "2023-02-02T09:00:00-07:00"
        },
        "end": {
          "dateTime": "2023-02-02T17:00:00-07:00"
        }
      })
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
                console.log(response.body)
                res.status(200).json(data)
              })
              .catch(function(error) {
              res.status(500).json({ error })
              })
}

