import axios from "axios";

var baseurl = "172.31.21.180:5000"

if (window.location.origin.includes("localhost")) {
    baseurl = "http://localhost:5000"
} else {
     baseurl = "172.31.21.180:5000"
}

export const base_url = baseurl

const postUrl = baseurl+'/posts' //the specific routes that the client is accessing in the server
const FbLoginUrl = baseurl+'/login/fb'
const GLoginUrl = baseurl+'/login/g'
const DcLoginUrl = baseurl+'/login/dc'
const emailUrl = baseurl+'/email/send'
const calendarUrl = baseurl+'/calendar/post'
const analyticsUrl = baseurl+'/analytics'
const profileUrl = baseurl+'/profiles/post'



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

export const postProfile = (config) => axios.post(profileUrl, config)
.then((response) => {
    return response
})