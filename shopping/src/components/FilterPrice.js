import React from 'react'
import './stylesheets/FilterPrice.css'

export const FilterPrice = () => {
  return (
    <div className='price-filter'>
        <div className="filter-title">Price</div>
        <div>        
            <input type="checkbox" name="price-filter" id="0-99" />
            <label htmlFor="0-99">$0 - $99.99</label>
        </div>
        <div>        
            <input type="checkbox" name="price-filter" id="100-199" />
            <label htmlFor="100-199">$100 - $199.99</label>
        </div>
        <div>        
            <input type="checkbox" name="price-filter" id="200-299" />
            <label htmlFor="200-299">$200 - $299.99</label>
        </div>
        <div>        
            <input type="checkbox" name="price-filter" id="300-399" />
            <label htmlFor="300-399">$300 - $399.99</label>
        </div>
        <div>        
            <input type="checkbox" name="price-filter" id="400-499" />
            <label htmlFor="400-499">$400 - $499.99</label>
        </div>
        <div>        
            <input type="checkbox" name="price-filter" id="500+" />
            <label htmlFor="500+">$500+</label>
        </div>
    </div>
  )
}
