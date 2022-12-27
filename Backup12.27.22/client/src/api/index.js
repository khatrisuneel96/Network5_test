import axios from "axios";

const url = 'http://localhost:5000/posts' //the specific route that the client is accessing in the server

//creating the fetchPosts and createPost functions that are used in actions
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)