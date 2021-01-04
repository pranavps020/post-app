import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Input } from '@material-ui/core';
import {updateTitle} from '../../Actions/Posts';
import {updateBody} from '../../Actions/Posts';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });

function Post({id,title,body,handleDelete}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
        <Card className={classes.root}>
        <CardContent>
          <Input multiline='true' fullWidth='true' value={title} color='secondary' onChange={(e)=>{
            dispatch(updateTitle(id,e.target.value))}}
            > </Input>       
          <Input multiline='true' fullWidth='true' disableUnderline='true' value={body} onChange={(e)=>{
            dispatch(updateBody(id,e.target.value))}}></Input>
        </CardContent>
        <CardActions>
          <Button startIcon={<DeleteIcon />} onClick={()=>handleDelete(id)} variant="contained" color="secondary" size="small">Delete</Button>
        </CardActions>
      </Card>
        </div>
    )
}

export default Post
