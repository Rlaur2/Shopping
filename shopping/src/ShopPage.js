import React from 'react'
import { FilterSideBar } from './components/FilterSideBar'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'

export const ShopPage = () => {
  return (
    <div>
      <Sort />
      <FilterSideBar />
      <ProductDisplay />
    </div>
  )
}
