import React from 'react'
import './stylesheets/FilterCategory.css'

export const FilterCategory = ({category, setCategory}) => {
    
    const handleCategoryFilter = (e) => {
        setCategory(e.target.value);
    };


    return (
    <form  className='category-filter'>
        <div className='filter-title'>Category</div>
        <div className='filter-select'>
            <input 
                onChange={handleCategoryFilter} 
                type="radio" 
                name="category" 
                id="all-filter" 
                checked={category === 'all'} 
                value='all' 
            />
            <label htmlFor="all-filter">All</label>
        </div>
        <div className='filter-select'>
            <input 
                onChange={handleCategoryFilter} 
                type="radio" 
                name="category" 
                id="jewelery-filter" 
                checked={category === 'jewelery'} 
                value='jewelery' 
            />
            <label htmlFor="jewelery-filter">Jewelery</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handleCategoryFilter} 
                type="radio" 
                name="category" 
                id="electronics-filter" 
                checked={category === 'electronics'} 
                value='electronics' 
            />
            <label htmlFor="electronics-filter">Electronics</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handleCategoryFilter} 
                type="radio" 
                name="category" 
                id="womens-filter" 
                checked={category === 'women\'s clothing'} 
                value={'women\'s clothing'} 
            />
            <label htmlFor="womens-filter">Women's Clothing</label>
        </div>
        <div className='filter-select'>
            <input 
                onChange={handleCategoryFilter} 
                type="radio" 
                name="category" 
                id="mens-filter" 
                checked={category === 'men\'s clothing'} 
                value={'men\'s clothing'} 
            />
            <label htmlFor="mens-filter">Men's Clothing</label>
        </div>
    </form>
  )
}

