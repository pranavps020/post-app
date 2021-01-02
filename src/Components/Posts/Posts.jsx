import {React} from 'react';
import {Grid} from '@material-ui/core';
import Post from './Post';
import {useSelector, useDispatch} from 'react-redux';
import {deletePost} from '../../Actions/Posts';

function Posts() {
    
   const PostsCollection = useSelector((state) => state.posts )
   const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    }

    return (
        <div>
        <Grid container justify="center" spacing={4}>
        {PostsCollection.map((post) => (
            <Grid key={post.id} item  xs={12} sm={6} md={4} lg={3}> 
             <Post handleDelete={handleDelete} id={post.id} head={post.title} body={post.body}/>
            </Grid>))}
        </Grid>
        </div>
    )
}

export default Posts
