import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterPrice } from './FilterPrice'
import { FilterRating } from './FilterRating'
import './stylesheets/FilterSideBar.css'


export const FilterSideBar = ({category, setCategory}) => {
  return (
    <div className='sidebar'>
        <FilterCategory 
        category={category}
        setCategory={setCategory}
        />
        <FilterPrice 
        
        />
        <FilterRating 
         
        />
        <div className='filter-reset'>
          Reset Filters
        </div>
    </div>
  )
}
