import {useEffect} from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import {Container,Button} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddPost from './Components/AddPost/AddPost'
import { Link, Route } from "react-router-dom";
import{ useDispatch} from 'react-redux'
import { getPosts } from './Actions/Posts'

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }
  ,[dispatch])

  return (<div>
      <Container >
       <Link to="/addpost"> <Button mb={3} size='large'>Add post<AddCircleRoundedIcon/></Button> </Link>
       <Link to="/"> <Button mb={3} size='large'>Home</Button> </Link>
       <Route exact path="/" >  <Posts /> </Route>
      </Container>
      <Route path="/addpost" > <AddPost /> </Route> 
    </div>
  );
}

export default App;
