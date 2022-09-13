import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterPrice } from './FilterPrice'
import { FilterRating } from './FilterRating'
import './stylesheets/FilterSideBar.css'


export const FilterSideBar = ({category, setCategory, priceFilter, setPriceFilter, starFilter, setStarFilter, change, setChange}) => {
  
  const handleFilterReset = () => {
    setCategory('all');
    setPriceFilter({'0-99.99': false, '100-199.99': false, '200-299.99':false, '300-399.99':false, '400-499.99': false, '500+': false});
    setStarFilter({five: false, four: false, three: false, two: false, one: false});
    setChange(!change);
  }
  
  return (
    <div className='sidebar'>
        <FilterCategory 
        category={category}
        setCategory={setCategory}
        />
        <FilterPrice 
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          change={change}
          setChange={setChange}
        />
        <FilterRating 
          starFilter={starFilter}
          setStarFilter={setStarFilter}
          change={change}
          setChange={setChange}
        />
        <div onClick={handleFilterReset} className='filter-reset'>
          Reset Filters
        </div>
    </div>
  )
}
