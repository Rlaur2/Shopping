import React, { useState } from 'react'
import { Product } from './Product';
import './stylesheets/ProductDisplay.css'
import { Link } from 'react-router-dom';

export const ProductDisplay = ({products}) => {
  
  
  
    return (
    <div className='all-products'>
        <ul className='products'>
        {products.length ? products.map(item => (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>
                <Product 
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              </Link>   
            </li>
        )) : <div className='no-products-message'>No products to display</div>}
        </ul>
    </div>
  )
}
