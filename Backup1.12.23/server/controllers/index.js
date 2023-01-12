import url from 'url'
import needle from 'needle'

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY_NAME = "appid"
const API_KEY_VALUE = "19ccca3e45c18e560e3ca5d2eaec5964"


export const getWeather = async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        })

        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}