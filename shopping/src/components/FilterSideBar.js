import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterPrice } from './FilterPrice'

export const FilterSideBar = () => {
  return (
    <div>
        <FilterCategory />
        <FilterPrice />
    </div>
  )
}
