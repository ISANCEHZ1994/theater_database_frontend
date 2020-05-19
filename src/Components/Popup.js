import React from 'react';




export default function Popup({ selected, closedPopUp }){

    return(
       <section className='popup' >
           <div className='content'>
                <h2> 
                    {selected.Title} <span> {selected.Year} </span>
                </h2>
                <p className='rating' >
                    Rating: {selected.imdbRating}
                </p>
                <div className='plot'>
                    <img src={selected.Poster} alt='movie_poster'/>
                    <p> {selected.Plot} </p>
                </div>
                <button className='close' onClick={closedPopUp}> Close </button>
           </div>
       </section>
    )
};