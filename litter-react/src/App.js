import React, {useState, useEffect} from 'react';
import Sidebar from "./Components/Sidebar";
import MainMessages from "./Components/MainMessages";
import DetailPage from "./Components/DetailPage";
import { Route } from "react-router-dom";
import './App.css';


function App() {
const [data, setData] = useState([])

useEffect(() => {

  fetch("/users")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err.message))

  
}, [])

console.log("DATA", data)


  return (
    <div className="App d-flex">
      <Route exact path="/"><Sidebar /></Route>
      <Route exact path="/" render={(props) => <MainMessages data={data} {...props} />}/>

      {/* <Route path="/detail/:id?" render={(props) => <DetailPage data={data} {...props} />}/> */}
    </div>
  );
}

export default App;

