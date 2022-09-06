import React from 'react'
import './stylesheets/FilterCategory.css'

export const FilterCategory = () => {
  return (
    <div className='category-filter'>
        <div className='filter-title'>Category</div>
        <div>
            <input type="radio" name="category" id="all-filter" defaultChecked />
            <label htmlFor="all-filter">All</label>
            </div>
        <div>
            <input type="radio" name="category" id="jewelery-filter" />
            <label htmlFor="jewelery-filter">Jewelery</label>
        </div>
        <div>        
            <input type="radio" name="category" id="electronics-filter" />
            <label htmlFor="electronics-filter">Electronics</label>
        </div>
        <div>        
            <input type="radio" name="category" id="womens-filter" />
            <label htmlFor="womens-filter">Women's Clothing</label>
        </div>
        <div>
            <input type="radio" name="category" id="mens-filter" />
            <label htmlFor="mens-filter">Men's Clothing</label>
        </div>
    </div>
  )
}
