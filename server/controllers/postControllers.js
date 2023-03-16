import axios from "axios"
import Page from "../models/page.js";

export const postFbPosts = async (req, res) => { //webook endpoints

    const FbPageToken = await Page.findOne({name: "Network_Test"})

    var config = {
        method: 'post',
        url: 'https://graph.facebook.com/101989732541801/photos?url=https://source.unsplash.com/user/c_v_r&access_token='+FbPageToken.access_token,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error)
        res.status(500).json({ error })
      })
}