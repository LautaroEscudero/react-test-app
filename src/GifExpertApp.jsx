import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( category ) => {
    if (categories.length > 1 && categories.find( cat => cat.toLowerCase() === category.toLowerCase() )) return;
    setCategories( [ category, ...categories, ] );
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  };

  const onRemoveCategory = () => {
    setCategories([ categories.length > 1 ? categories.pop() : [] ]);
  };

  const onResetCategories = () => {
    setCategories([]);
  };

  return (
   <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory } />
      <button onClick={ onRemoveCategory }>Remove last</button>
      <button onClick={ onResetCategories }>Reset</button>
      { categories?.map( category => (
          <GifGrid 
             key={ category }
             category={ category } 
          />
      )) }
     
   </>
  )
}
