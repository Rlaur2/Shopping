import React, { useState } from 'react'
import { Product } from './Product';
import './stylesheets/ProductDisplay.css'

export const ProductDisplay = () => {
  const [products, setProducts] = useState([
    {category: 'jewelery',description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',id:6,image:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',price:168,rating:{rate:3.9, count:70},title:'Solid Gold Petite Micropave '},
    {category: 'electronics',description:'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',id:11,image:'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',price:109,rating: {rate:4.8,count:319},title:'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5'},
    {category: 'women\'s clothing',description:'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',id:17,image:'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',price:39.99,rating:{rate: 3.8,count:679},title:'Rain Jacket Women Windbreaker Striped Climbing Raincoats'}
]);
  
  
    return (
    <div>
        <ul className='products'>
        {products.map(item => (
            <li key={item.id}>
              <Product 
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />   
            </li>
        ))}
        </ul>
    </div>
  )
}
