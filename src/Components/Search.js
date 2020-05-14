import React from 'react';


// export default class Search extends React.Component{

//     render(){
//         return(
//             <>
//             </>
//         )
//     };

// };

export default function Search(){
        return(
          <section className='searchbox-wrap'>
              <input type='text' placeholder='Search For A Movie...' className='searchbox'/>
          </section>
        )
};