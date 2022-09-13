import React from 'react'
import './stylesheets/SearchBar.css'


export const SearchBar = ({searchItem, setSearchItem}) => {
  return (
    <div className='search-bar' >
        <input 
            placeholder='Search...'
            id='search'
            type='text'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} 
        />
    </div>
  )
}
