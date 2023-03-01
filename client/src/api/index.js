import axios from "axios";

const postUrl = 'http://localhost:5000/posts' //the specific routes that the client is accessing in the server
const FbLoginUrl = 'http://localhost:5000/login/fb'
const GLoginUrl = 'http://localhost:5000/login/g'
const DcLoginUrl = 'http://localhost:5000/login/dc'
const emailUrl = 'http://localhost:5000/email'
const calendarUrl = 'http://localhost:5000/calendar'
const analyticsUrl = 'http://localhost:5000/analytics'



//creating the fetchPosts and createPost functions that are used in actions
export const fetchPosts = () => axios.get(postUrl)
export const createPost = (newPost) => axios.post(postUrl, newPost)

export const getFbLogin = (config) => axios.post(FbLoginUrl, config)
.then((response) => {
    return response
})

export const getGLogin = (config) => axios.post(GLoginUrl, config)
.then((response) => {
    return response
})

export const getDcLogin = (config) => axios.post(DcLoginUrl, config)
.then((response) => {
    return response
})

export const postEmail = (config) => axios.post(emailUrl, config)
.then((response) => {
    return response
})

export const postCalendarEvent = (config) => axios.post(calendarUrl, config)
.then((response) => {
    return response
})

export const getAnalytics = (config) => axios.get(analyticsUrl, config)
.then((response) => {
    console.log(response)
    return response
})