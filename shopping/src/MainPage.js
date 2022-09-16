import React from 'react'
import chevron from './components/images/chevron-right.svg'
import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <div className='background'>
      <div className='intro'>
        <div className='store-title'>Online Retailer</div>
        <div className="blurb">Apparel, jewlery, and the latest electronics</div>
        <Link to={"/shop"}><div className="shop-button">Shop Now <img className='shop-button-arrow' alt='directional-indicator' src={chevron}></img></div></Link>
      </div>
    </div>
  )
}
