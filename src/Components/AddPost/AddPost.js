import React from 'react'
import{Button ,Container,TextField } from '@material-ui/core'

function AddPost() {
    return (
       <Container >
        <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          id="header"
          label="Header"
          name="header"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="post"
          label="Post"
          type="text"
          id="post"
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
