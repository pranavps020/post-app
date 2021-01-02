export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'ADD_POST' :
            return [...posts, action.payload];    
        case 'DELETE' :
            return posts.filter((post) => post.id !== action.payload);    
        default: return posts;
            break;
    }
}

