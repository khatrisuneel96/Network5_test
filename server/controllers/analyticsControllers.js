import axios from "axios"
import ApiToken from "../models/apiToken.js"
import Page from "../models/page.js"

export const getIgAnalytics = async (req, res) => { //webook endpoints

    const FbToken = await ApiToken.findOne({media: "facebook"})

    var config = {
        method: 'get',
        url: 'https://graph.facebook.com/17841422229166819/insights?metric=profile_views,reach,impressions&period=day&since=2023-01-31&until=2023-02-27',
        headers: { 
          'Authorization': 'Bearer '+ FbToken.access_token
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error })
      });
}

export const getFbAnalytics = async (req, res) => { //webook endpoints

  const FbToken = await Page.findOne({id: "101989732541801"})

  var config = {
      method: 'get',
      url: 'https://graph.facebook.com/101989732541801/insights?metric=page_engaged_users,page_consumptions_by_consumption_type,page_fans_online',
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