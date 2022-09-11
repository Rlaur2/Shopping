import React, { useState, useEffect } from 'react'
import './stylesheets/Header.css'
import {ReactComponent as HomeIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/home-heart.svg'
import {ReactComponent as ShopIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/shopping-outline.svg'
import {ReactComponent as CartIcon} from '/home/pavel/Projects/Shopping/shopping/src/images/cart-outline.svg'
import { Link, useParams } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { Cart } from './Cart'

export const Header = ({search, change, setChange}) => {
  const [cart, setCart] = useState(!localStorage.cart ? [] : JSON.parse(localStorage.getItem('cart')));
  useEffect(() => {
   setCart(JSON.parse(localStorage.getItem('cart')));
  },[change])
  
  return (
    <header>
        <Link to={"/"}><div className="store-logo">Online Retailer</div></Link>
        {search ? <SearchBar /> : null}
        <ul>
            <Link to={"/"}><li className='home'>Home <div className='home-icon'><HomeIcon /></div></li></Link>
            <Link to={"/shop"}><li className='shop'>Shop <div className='shop-icon'><ShopIcon /></div></li></Link>
            <li className='cart-button'>Cart <div className='cart-icon'><CartIcon /></div></li>
        </ul>
            <Cart 
              cart={cart}
              change={change}
              setChange={setChange}
              />
    </header>
  )
}
