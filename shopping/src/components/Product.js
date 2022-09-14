import React from 'react'
import './stylesheets/Product.css'

export const Product = ({image, price, title}) => {
  return (
    <div className='product'>
        <img src={image} alt={title} />
        <div className='product-text'>
            <h3 className='title'>{title}</h3>
            <p className='price'>${Number(price).toFixed(2)}</p>
        </div>
    </div>
  )
}
