import React from 'react';


export default function Result({ result }){

    return(
        <div className='result'> {/* the first letter must be capitalized to work properly */}
            <img src={result.Poster} alt="" />
            <h3> {result.Title}</h3>
        </div>
    )
};