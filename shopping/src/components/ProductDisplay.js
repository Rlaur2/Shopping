import React from 'react'
import { Product } from './Product';
import './stylesheets/ProductDisplay.css'
import { Link } from 'react-router-dom';

export const ProductDisplay = ({products}) => {
  
  
  
    return (
    <div className='all-products'>
        <ul className='products'>
        {!products.length ? 
        <div className='no-products-message'>No products to display</div> : 
        products[0].title === 'loading' ? 
        <div className='loading-product'>Loading...<div className='loader'></div></div> : 
        products.map(item => (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>
                <Product 
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              </Link>   
            </li>
        ))}
        </ul>
    </div>
  )
}
