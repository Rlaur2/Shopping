import React from 'react'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'

export const ShopPage = () => {
  return (
    <div>
      <Sort />
      <ProductDisplay />
    </div>
  )
}
