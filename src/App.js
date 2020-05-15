import React, {useState} from 'react';
import Search from './Components/Search';

export default function App() {

  const [state, setState] = ({
    s:"", // a string to search the movie you are looking for
    results: [], // where we want to put our search results into
    selected: {} // when selecting a SPECIFIC movie - we want to see a everything that has to do with that movie
  });

  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=91302107';

  handleInput = (e) => { 
    let s = e.target.value

    setState(preState => { // setState is a function special to React that changes the state of a given variable - 
      return { ...preState, s: s} 
    })
  };

  return (
    <div className="App">
        <header>
          <h1> Movie DataBase </h1>
        </header>
        <main>
          <Search />
        </main>
    </div>
  );
};

