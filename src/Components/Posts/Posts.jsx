import {React,useState} from 'react';
import {Grid,Button,Container} from '@material-ui/core';
import Post from './Post';
import {useSelector, useDispatch} from 'react-redux';
import {deletePost} from '../../Actions/Posts';


function Posts() {
   const [Visible, setVisible] = useState(4)    
   const PostsCollection = useSelector((state) => state.posts )
   const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    }
    
    const LoadMore = () =>{
        setVisible((prevValue)=>prevValue+4)
    }
    return (
        <div>
        <Grid  container justify="center" spacing={4}>
        {PostsCollection.slice(0,Visible).map((post) => (
            <Grid key={post.id} item  xs={12} sm={6} md={4} lg={3}> 
             <Post handleDelete={handleDelete} id={post.id} title={post.title} body={post.body}/>
            </Grid>))}
        </Grid>
        <Button style={{margin:'0 auto',display:'block'}} onClick={LoadMore} >Load more</Button>
        </div>
    )
}

export default Posts
