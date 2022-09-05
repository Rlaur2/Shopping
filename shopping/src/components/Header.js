import React from 'react'
import './stylesheets/Header.css'
import {ReactComponent as HomeIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/home-heart.svg'
import {ReactComponent as ShopIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/shopping-outline.svg'
import {ReactComponent as CartIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/cart-outline.svg'

export const Header = () => {
  return (
    <header>
        <div className="store-logo">Online Retailer</div>
        <ul>
            <li className='home'>Home <div className='home-icon'><HomeIcon /></div></li>
            <li className='shop'>Shop <div className='shop-icon'><ShopIcon /></div></li>
            <li className='cart'>Cart <div className='cart-icon'><CartIcon /></div></li>
        </ul>
    </header>
  )
}
