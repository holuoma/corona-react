import React, {useState, useEffect} from 'react';
import Sidebar from "./Components/Sidebar";
import MainMessages from "./Components/MainMessages";
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
const [data, setData] = useState([])

useEffect(() => {
  setData(usersData)
}, [])
console.log(data)


  return (
    <div className="App d-flex">
      <Sidebar />
      <MainMessages data={data} />
    </div>
  );
}

export default App;
