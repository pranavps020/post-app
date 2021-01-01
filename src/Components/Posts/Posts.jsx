import {useState,React} from 'react'
import {Grid} from '@material-ui/core'
import Post from './Post'
import Data from './data.json'

function Posts() {
    
   const [PostData, setPostData] = useState(Data)
    
   const handleDelete = (id) => {
       setPostData(PostData =>PostData.filter(post => post.id!== id));
    }
   
    const HandleHeadUpdate = (text,id) => {
        const items = PostData;
        items.map(item=>{      
          if(item.id===id){
            item.head= text;
          }
        })}

    return (
        <div>
        <Grid container justify="center" spacing={4}>
        {PostData.map((post) => (
            <Grid key={post.id} item  xs={12} sm={6} md={4} lg={3}> 
             <Post handleDelete={handleDelete} id={post.id} head={post.title} body={post.body}/>
            </Grid>))}
        </Grid>
        </div>
    )
}

export default Posts
