let posts = (posts = [], action) => {
    switch (action.type) {                 //shows what to do in each function case     
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}
export default posts