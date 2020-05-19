import React from 'react';




export default function Popup({ selected, closedPopUp }){

    return(
       <section className='popup' >
           <div className='content'>
                <h2>
                    {selected.Title} 
                    <span>
                        {selected.Year}
                    </span>
                </h2>
           </div>
       </section>
    )
};