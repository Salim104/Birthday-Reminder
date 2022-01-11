import React from 'react';

const List = ({people}) => {
   
    return <>{ 
           people.map((person)=>{
            const {image,name,age,id} =person;

            
            return(
                 <article className='wrapper' key={id}>
               <img src={image}></img>
               <div className="info">
                   <h4>{name}</h4>
               <p> {age} years</p> 
               </div>

           </article>
        )
         })

    }
    </>
};

export default List;
