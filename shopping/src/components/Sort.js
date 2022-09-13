import React from 'react'
import './stylesheets/Sort.css'

export const Sort = ({setSort}) => {
  
  const handleSort = (e) => {
    setSort(e.target.value);
  }
  
  return (
    <div className='sort-dropdown'>
        <label htmlFor="sort">Sort by:</label>
        <select onChange={handleSort} name="sort" id="sort">
            <option  value="price-low">Price: (lowest first)</option>
            <option  value="price-high">Price: (highest first)</option>
            <option  value="name-a">Name: (A-Z)</option>
            <option  value="name-z">Name: (Z-A)</option>
        </select>
    </div>
  )
}
