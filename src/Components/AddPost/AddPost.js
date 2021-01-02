import React from 'react'
import{Button ,Container,TextField, Typography } from '@material-ui/core'
import {useState} from 'react'
import axios from 'axios'
import{ useDispatch} from 'react-redux'
import {addPost} from '../../Actions/Posts'

function AddPost() {
  const [postData, setPostData] = useState({ title: '', body: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch to state change with redux
    dispatch(addPost(postData));
    
    //Dummy POST request to API
    axios.post(' https://jsonplaceholder.typicode.com/posts/', postData)
    .then(response => console.log(response));


  }
    return (
       <Container >
       <Typography variant='h2'>Write your post here</Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          id="header"
          label="Header"
          name="header"
          value={postData.header}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="post"
          label="Post"
          value={postData.post}
          type="text"
          id="post"
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />
       
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Add 
        </Button>
        </form>
        </Container> 
    )
}

export default AddPost
