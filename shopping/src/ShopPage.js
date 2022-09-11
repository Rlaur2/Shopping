import React, { useState } from 'react'
import { FilterSideBar } from './components/FilterSideBar'
import { Header } from './components/Header'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'
import './components/stylesheets/ShopPage.css'

export const ShopPage = () => {
  const [change, setChange] = useState(false);
  
  return (
    <div>
      <Header 
        search={true}
        change={change}
        setChange={setChange}
        />
      <Sort />
      <div className='main'>
        <FilterSideBar />
        <ProductDisplay />
      </div>
    </div>
  )
}

//The API call to gather the products should happen here I'm sure