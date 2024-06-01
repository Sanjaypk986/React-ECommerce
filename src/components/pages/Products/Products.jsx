import React, { useState } from 'react'
import Categories from './Categories/Categories'
import Allproducts from './Allproducts/Allproducts'
import Men from './Men/Men'
import Women from './Women/Women'

const Products = () => {

  const [toggle,setToggle] = useState(4)

  const updateToggle=(id)=>{
      setToggle(id)
      console.log('Toggle state changed:', id);
  }

  return (

    <main>
      <Categories updateToggle = {updateToggle} />
      {
        toggle === 4 ? <Allproducts /> : null
      }
      {
        toggle === 1 ? <Men /> : null
      }
      {
        toggle === 2 ? <Women /> : null
      }
      {
        toggle === 3 ? <h1 className='text-center px-4 text-xl md:text-2xl font-semibold my-2 '>Nothing Available , Adding Soon...</h1> : null
      }
      
    </main>
  )
}

export default Products