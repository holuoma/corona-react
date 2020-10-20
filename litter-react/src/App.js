import React, {useState, useEffect} from 'react';
import Sidebar from "./Components/Sidebar";
import MainMessages from "./Components/MainMessages";
import DetailPage from "./Components/DetailPage";
import { Route } from "react-router-dom";
import './App.css';
//import SearchBar from './Components/SearchBar';


// /messages                    -> GET all messages (SELECT)
// /messages/:id           -> GET specific message by message.id (const {id} = req.params)
// /users/:id/messages  -> GET all messages for specific user by user.id
// /users                         - > GET all users (SELECT)
// /users/:id                   -> GET specific user by ID (const {id} = req.params)
// /me                              -> GET give random user



function App() {
const [data, setData] = useState([])
const [me, setMe] = useState([])
const [messages, setMessages] = useState([])

useEffect(() => {

  fetch("/users")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err.message))

  fetch("/me")
    .then(res => res.json())
    .then(data => setMe(data))
    .catch(err => console.log(err.message))

  fetch("/messages")
    .then(res => res.json())
    .then(data => setMessages(data))
    .catch(err => console.log(err.message))
  
}, [])

console.log("DATA", messages)





  return (

    <>
    <SearchBar/>
    <div className="App d-flex">
      <Route exact path="/" render={(props) => <Sidebar me={me} {...props} />}/>
      <Route exact path="/" render={(props) => <MainMessages messages={messages} data={data} {...props} />}/>
      <Route path="/detail/:id?" render={(props) => <DetailPage {...props} />}/>
      

    </div>

    </>
  );
}

export default App;

