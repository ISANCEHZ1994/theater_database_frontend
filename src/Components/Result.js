import React from 'react';


export default function Result({ result, openPopUp }){

    return(
        <div className='result' onClick={() => openPopUp(result.imdbID) }> {/* the first letter must be capitalized to work properly */}
            <img src={result.Poster} alt="movie poster" />
            <h3> {result.Title}</h3>


            
        </div>
    )
};