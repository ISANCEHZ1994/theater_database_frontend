import React, {useState} from 'react';
import Search from './Components/Search';
import Results from './Results';
import axios from 'axios';

export default function App() {

  const [state, setState] = useState({ // we are using hooks and giving 
    s:"", // a string to search the movie you are looking for
    results: [], // where we want to put our search results into
    selected: {} // when selecting a SPECIFIC movie - we want to see a everything that has to do with that movie
  });

  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=91302107';

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

  console.log(state.s)
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
          <Results results={state.results}/>
        </main>
    </div>
  );
};

