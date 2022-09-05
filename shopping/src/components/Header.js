import React from 'react'
import './stylesheets/Header.css'
import {ReactComponent as HomeIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/home-heart.svg'
import {ReactComponent as ShopIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/shopping-outline.svg'
import {ReactComponent as CartIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/cart-outline.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <Link to={"/"}><div className="store-logo">Online Retailer</div></Link>
        <ul>
            <Link to={"/"}><li className='home'>Home <div className='home-icon'><HomeIcon /></div></li></Link>
            <Link to={"/shop"}><li className='shop'>Shop <div className='shop-icon'><ShopIcon /></div></li></Link>
            <li className='cart'>Cart <div className='cart-icon'><CartIcon /></div></li>
        </ul>
    </header>
  )
}
