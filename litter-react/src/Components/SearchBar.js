

import React, {useState, useEffect} from 'react';
import './App.css';


function SearchBar() {
const [users, setUsers] = useState({})
const [messages, setMessages] = useState({})

// ---please modify if necessary
const [loading, setLoading] = useState(false);
const [userInput, setUserInput] = useState("");
const [searchResult, setSearchResults] = useState("");

       
        //---user inputs-----
        const handleUserInput = (e) => {
              //  console.log(e.target.value);
               setUserInput(e.target.value);
           };
      
        //  ---handle user inputs with enter key

         const handleEnter = (e) => {
             if (e.key === "Enter") {
               search();
            }
            // console.log('clicked')
          };

         const handleClick = (e) =>  { 
            e.preventDefault();
            // console.log('clicked')
             search();


          }
           //----handle search
          const search = () =>   { 
              //---logic based on what the user inputs 
              console.log('searched') 

          }

         
           //----call back to handle errors if any during the api call
              //  const displayError = () => {
              //  alert("sorry we have problem completing your litter request");
            // };


  return (

       <>

          {/* search field */}

          <div className="App">
                    <h2>LITTER</h2>
            <div className="search">
               <input onChange={handleUserInput} onKeyDown={handleEnter} type="text" />
               <button  onClick={handleClick}
               >Search litter</button>
          </div>
          </div>
       </>
  );
}

export default SearchBar;
















