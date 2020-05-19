import React from 'react';
import Result from './Result';


export default function Results({ results }) {

    return(
        <section className='results' >
            {results.map( result => ( // not curly boys but regular boys
                <Result key={result.imdbID} result={result}  />
            )
            )}
        </section>
    )
};

