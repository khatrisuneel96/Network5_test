import axios from "axios"
import ApiToken from "../models/apiToken.js"

export const getAnalytics = async (req, res) => { //webook endpoints

    const FbToken = await ApiToken.findOne({media: "facebook"})

    var config = {
        method: 'get',
        url: 'https://graph.facebook.com/17841422229166819/insights?metric=profile_views&period=day&since=2022-12-31&until=2023-01-10',
        headers: { 
          'Authorization': 'Bearer '+ FbToken.access_token
        }
      };
      
      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error })
      });
}