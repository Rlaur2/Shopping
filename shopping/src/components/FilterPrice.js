import React from 'react'
import { useState } from 'react';
import './stylesheets/FilterPrice.css'

export const FilterPrice = ({priceFilter, setPriceFilter, change, setChange}) => {
    const [update, setUpdate] = useState(false);
    const handlePriceFilter = (e) => {
        const newPriceFilter = priceFilter;
        newPriceFilter[e.target.value] = !newPriceFilter[e.target.value]
        setPriceFilter(newPriceFilter);
        setUpdate(!update);
        setChange(!change);
    };
    
    return (
    <form className='price-filter'>
        <div className="filter-title">Price</div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter}
                type="checkbox" 
                name="price-filter"
                id="0-99"
                value={'0-99.99'}
                checked={priceFilter['0-99.99']} 
            />
            <label htmlFor="0-99">$0 - $99.99</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter}
                type="checkbox" 
                name="price-filter" 
                id="100-199"
                value={'100-199.99'}
                checked={priceFilter['100-199.99']}

            />
            <label htmlFor="100-199">$100 - $199.99</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter} 
                type="checkbox" 
                name="price-filter" 
                id="200-299"
                value={'200-299.99'}
                checked={priceFilter['200-299.99']}
            />
            <label htmlFor="200-299">$200 - $299.99</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter}
                type="checkbox" 
                name="price-filter" 
                id="300-399" 
                value={'300-399.99'}
                checked={priceFilter['300-399.99']}
            />
            <label htmlFor="300-399">$300 - $399.99</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter} 
                type="checkbox" 
                name="price-filter" 
                id="400-499"
                value={'400-499.99'}
                checked={priceFilter['400-499.99']}
            />
            <label htmlFor="400-499">$400 - $499.99</label>
        </div>
        <div className='filter-select'>        
            <input 
                onChange={handlePriceFilter} 
                type="checkbox" 
                name="price-filter" 
                id="500+"
                value={'500+'}
                checked={priceFilter['500+']}
            />
            <label htmlFor="500+">$500+</label>
        </div>
    </form>
  )
}
