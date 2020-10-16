import React, {useState, useEffect} from 'react';
import './App.css';

const usersData = [
  {
    name: "user 1",
    id: "1",
    picture: "pic 1",
    message: "Smelly cat, smelly cat..."
  },

  {
    name: "user 2",
    id: "2",
    picture: "pic 2",
    message: "What are they feeding you."
  },

  {
    name: "user 3",
    id: "3",
    picture: "pic 3",
    message: "Smelly cat, smelly cat, it's not your faauuult."
  }
]

function App() {
const [users, setUsers] = useState({})
const [messages, setMessages] = useState({})

  return (
    <div className="App">
      <h2>LITTER</h2>
    </div>
  );
}

export default App;
