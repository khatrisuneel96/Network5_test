import axios from "axios";

const postUrl = 'http://localhost:5000/posts' //the specific route that the client is accessing in the server
const emailUrl = 'http://localhost:5000/email'
const calendarUrl = 'http://localhost:5000/calendar'

//creating the fetchPosts and createPost functions that are used in actions
export const fetchPosts = () => axios.get(postUrl)
export const createPost = (newPost) => axios.post(postUrl, newPost)

export const postEmail = (config) => axios.post(emailUrl, config)
.then((response) => {
    console.log(response)
})

export const postCalendarEvent = (config) => axios.post(calendarUrl, config)
.then((response) => {
    console.log(response)
})