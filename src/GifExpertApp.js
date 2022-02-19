

import React, { useState } from 'react';
import { AddCategory } from './componenst/addCategory';
import { GifGrid } from './componenst/GifGrid';



export const GifExpertApp = () => {

  // const categories = ['One Punch','Samurai X','Dragon Ball'];
  const [categories, setCategories] = useState(['Dragon Ball']);
  // const handleAdd =() =>{
  //     // setCategories([...categories,'Hunter x Hunter']);
  //     setCategories(cats=> [...cats,'Henry Alvarado Morales'])
  // }

  return (
      <>
      
      <h1> GifExpertApp</h1>
       <AddCategory setCategories={setCategories}/>
       <hr></hr>

        <ol>
          {
            categories.map((category) =>(
               <GifGrid 
                  category ={category} 
                  key={category}
              />
            )
            )
          }

        </ol>
      
      </>
      );
    
};
