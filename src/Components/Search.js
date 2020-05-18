import React from 'react';


export default function Search ({handleInput,search}) { // destructuring assignment - we're diving deeper into the props program where we dont need to pass props
        return(
          <section className='searchbox-wrap'>
              <input 
                    type='text' 
                    placeholder='Search For A Movie...' 
                    className='searchbox' 
                    onChange={handleInput} 
                    onKeyPress={search}
              /> {/* this makes it look cleaner */}
          </section>
        )
};