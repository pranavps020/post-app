import './App.css';
import Posts from './Components/Posts/Posts';
import {Container,Button} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddPost from './Components/AddPost/AddPost'
import Post from './Post'


function App() {
  return (<div>
      
      <Container >
        <Button mb={3} size='large'>Add post<AddCircleRoundedIcon/></Button>
        <Posts />
      </Container>
      <AddPost />
    </div>
  );
}

export default App;
