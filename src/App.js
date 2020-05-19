import React, {useState, useEffect} from 'react';
import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';
import axios from 'axios';

export default function App() {

  const [state, setState] = useState({ // we are using hooks and giving 
    s:"", // a string to search the movie you are looking for
    results: [], // where we want to put our search results into
    selected: {} // when selecting a SPECIFIC movie - we want to see a everything that has to do with that movie
  });

  const apiUrl = 'http://www.omdbapi.com/?apikey=91302107';
  // useEffect(()=>{
  //   console.log('should show after every render')
  //   console.log(state)
  // })
  const search = (e) => {
    if(e.key === "Enter"){ // make sure the e in Enter is CAPITALIZE 
      axios(apiUrl + "&s=" + state.s).then( ({ data }) => { // we want to destructure the data variable because we only want to use some specifc data
        let results = data.Search

        setState( prevState => {
          return {...prevState, results: results} // the search function will take the information from the axios(technically a fetch) and store it into the array 'results'
        })
        console.log(data)
        
      }) // closes then
    }; // closes if
  }; // closes function

  const handleInput = (e) => { 
    let s = e.target.value

    setState(preState => { // setState is the method that we made in the hooks above because we - since App function is not a class - a this. is not required
      return { ...preState, s: s} 
    })
  };

  const openPopUp = (id) => {
    // console.log(id)
    // axios(apiUrl + "&i=" + id)
    // .then(({data})=> console.log(data))
    axios(apiUrl + "&i=" + id).then( ({ data }) => {
      let result = data

      console.log(result)

      setState(prevState => {
        return {...prevState, selected: result}
      })

    })
  };

  const closedPopUp = () => {
    setState( prevState => {
      return { ...prevState, selected: {} }
    })
  };

  // console.log(state.s)
  return (
    <div className="App">
        <header>
          <h1> Entertainment DataBase </h1>
        </header>
        <main>
          <Search 
          handleInput={handleInput}
          search={search}
          />
          <Results 
          results={state.results} 
          openPopUp={openPopUp}
          />
          
          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closedPopUp={closedPopUp} /> : false}
        </main>
    </div>
  );
};

