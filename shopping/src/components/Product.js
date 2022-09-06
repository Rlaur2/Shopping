import React from 'react'
import './stylesheets/Product.css'

export const Product = ({category, description, image, price, rating, title}) => {
  return (
    <div className='product'>
        <img src={image} alt={title} />
        <div className='product-text'>
            <h3 className='title'>{title}</h3>
            <p className='price'>${price}</p>
        </div>
    </div>
  )
}
