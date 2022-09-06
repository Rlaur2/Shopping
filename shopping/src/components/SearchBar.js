import React from 'react'
import './stylesheets/SearchBar.css'


export const SearchBar = () => {
  return (
    <div className='search-bar' >
        <input 
            placeholder='Search...'
            id='search'
            type={"text"} 
        />
    </div>
  )
}
