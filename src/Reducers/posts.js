
export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'ADD_POST' :
            return [...posts, action.payload];    
        case 'DELETE' :
            return posts.filter((post) => post.id !== action.payload);
        case 'UPDATE_TITLE' :{
          return posts.map((post) => {
            if (post.id !== action.payload.id) {
              return post
            }
            return {
              ...post.title,
              ...action.payload.newTitle
            }
          })
         }
        case 'UPDATE_BODY' :{
          return posts.map((post) => {
            if (post.id !== action.payload.id) {
              return post
            }
            return {
              ...post.body,
              ...action.payload.newBody
            }
          })
         }
        default: return posts;
            break;
    }
}

