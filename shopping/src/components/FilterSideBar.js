import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterPrice } from './FilterPrice'
import { FilterRating } from './FilterRating'
import './stylesheets/FilterSideBar.css'


export const FilterSideBar = ({category, setCategory, priceFilter, setPriceFilter, starFilter, setStarFilter, change, setChange}) => {
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
        <div className='filter-reset'>
          Reset Filters
        </div>
    </div>
  )
}
