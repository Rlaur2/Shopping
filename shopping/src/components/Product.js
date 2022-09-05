import React from 'react'
import './stylesheets/Product.css'

export const Product = ({category, description, image, price, rating, title}) => {
  return (
    <div className='product'>
        <img src={image} alt={title} />
        <div>{title}</div>
        <div>${price}</div>
    </div>
  )
}
