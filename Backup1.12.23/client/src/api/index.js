import axios from "axios";

const postUrl = 'http://localhost:5000/posts' //the specific route that the client is accessing in the server
const weatherUrl = 'http://localhost:5000/api?q=Boston'

//creating the fetchPosts and createPost functions that are used in actions
export const fetchPosts = () => axios.get(postUrl)
export const createPost = (newPost) => axios.post(postUrl, newPost)

export const fetchWeather = () => axios.get(weatherUrl)