import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterPrice } from './FilterPrice'
import { FilterRating } from './FilterRating'
import './stylesheets/FilterSideBar.css'


export const FilterSideBar = () => {
  return (
    <div className='sidebar'>
        <FilterCategory />
        <FilterPrice />
        <FilterRating />
        <div className='filter-reset'>
          Reset Filters
        </div>
    </div>
  )
}
