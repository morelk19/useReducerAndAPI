import React, {useReducer} from "react";
import apiReducer from "./reducers/apiReducer.js";
import { Postcards } from "./components/Postcards.js";

//https://jsonplaceholder.typicode.com/posts

function App() {

const [posts, dispatch] = useReducer(apiReducer, [])

const getPostData = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(apiReducer)
    dispatch({
      type: 'get-all-posts',
      payload: data
    })
  }


 //https://jsonplaceholder.typicode.com/users

 const getUserdata = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  dispatch({
    type: 'add-all-users',
    payload: data
  })
}

const getToDosdata = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  dispatch({
    type: 'add-all-todos',
    payload: data
  })
}
console.log(posts);
 return(
  <div>
  <h1>API Data</h1>
  <div>
    <label htmlFor="ChooseAPIData">Choose API Data</label>
     
      <button onClick={getPostData}>Posts</button>
      <button onClick={getToDosdata}>ToDos</button>

      <button onClick={getUserdata}>Users</button>
      
    </div>
    {
    posts.map((element) => {
      return(
    <Postcards userId={element.userId}
    id={element.id}
    title ={element.title}
    body = {element.body}
    completed= {element.completed}
    name= {element.name}
    username= {element.username}
    email= {element.email}  
    />

      )
    })
}

  </div>
 )
}
 
export default App;
