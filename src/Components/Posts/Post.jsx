import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Input } from '@material-ui/core';
import {updateTitle,updateBody} from '../../Actions/Posts';
import {useDispatch} from 'react-redux';
import {useState} from 'react'



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });

function Post({id,title,body,handleDelete}) {
  const [Update, setUpdate] = useState(false)
  const [Title, setTitle] = useState(title)  
  
  const classes = useStyles();
  const dispatch = useDispatch();
    
    const toggleUpdate=()=>{
        setUpdate(!Update);
    }

   const handleChange=(e)=>{
      setTitle(e.target.value);
    }
 
    const renderTitle = ()=>{
      if(Update){
        return <Input multiline='true' fullWidth='true'  value={Title} onChange={handleChange} ></Input>
      } else{
        return <h4>{Title}</h4>
      }
    }

    const renderButtons = ()=>{
      if(Update){
       return <Button onClick={(id)=>handleSubmit(id)} variant="contained" color="secondary" size="small">Submit</Button>

      } else{
        return <Button onClick={()=>toggleUpdate()} variant="contained" color="secondary" size="small">Update</Button>
      }
    }

    const handleSubmit = (id) => {
     toggleUpdate()
     dispatch(updateTitle(id,Title))
    }

    return (
        <div>
        <Card className={classes.root}>
        <CardContent>
            {renderTitle()}
          <Input multiline='true' fullWidth='true' disableUnderline='true' value={body} onChange={(e)=>{
            dispatch(updateBody(id,e.target.value))}}></Input>
        </CardContent>
        <CardActions>
           {renderButtons()}
          <Button startIcon={<DeleteIcon />} onClick={()=>handleDelete(id)} variant="contained" color="secondary" size="small">Delete</Button>
        </CardActions>
      </Card>
        </div>
    )
}

export default Post
