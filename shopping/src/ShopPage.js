import React from 'react'
import { FilterSideBar } from './components/FilterSideBar'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'
import './components/stylesheets/ShopPage.css'

export const ShopPage = () => {
  return (
    <div>
      <Sort />
      <div className='main'>
        <FilterSideBar />
        <ProductDisplay />
      </div>
    </div>
  )
}
