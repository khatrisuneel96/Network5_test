import axios from "axios"

export const postWebhooks = async (req, res) => { //webook endpoints
    let body = req.body;

    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });
}