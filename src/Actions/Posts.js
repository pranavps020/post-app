import * as api from '../api/index'

export const getPosts = () => async (dispatch) => {
    try {
      const  {data}  = await api.fetchPosts();
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }
  export const deletePost = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
 
  export const addPost = (postData) => async (dispatch) => {
    try {
      dispatch({ type: 'ADD_POST', payload: postData });
      console.log(postData)
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateTitle = (id,Title) => async (dispatch) => {
    try {
      dispatch({ type: 'UPDATE_TITLE', payload: {id:id, newTitle:Title}});
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateBody = (id,value) => async (dispatch) => {
    try {
      dispatch({ type: 'UPDATE_BODY', payload: {id:id, newBody:value}});
    } catch (error) {
      console.log(error.message);
    }
  };