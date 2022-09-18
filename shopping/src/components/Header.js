import React, { useState, useEffect } from 'react'
import './stylesheets/Header.css'
import {ReactComponent as HomeIcon} from './images/home-heart.svg'
import {ReactComponent as ShopIcon} from './images/shopping-outline.svg'
import {ReactComponent as CartIcon} from './images/cart-outline.svg'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { Cart } from './Cart'

export const Header = ({search, change, setChange, searchItem, setSearchItem, updateShopPage, setUpdateShopPage}) => {
 const [cart, setCart] = useState(!localStorage.cart ? [] : JSON.parse(localStorage.getItem('cart')));
 const [display, setDisplay] = useState('no-display');

  useEffect(() => {
    if (!localStorage.cart) {
      setCart([]);
    } else {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  },[change])

  let totalQuantity = 0;
  if (cart && cart.length > 1) {
    cart.forEach(item => {
     totalQuantity += item.quantity;
    });
  } else if (cart && cart.length === 1) {
    totalQuantity = cart[0].quantity;
  }

  const handleCartDisplay = () => {
    setDisplay('');
    const html = document.querySelector('html');
    html.classList.toggle('overflow-hidden');
    const cartDisplay = document.querySelector('.cart');
    cartDisplay.classList.toggle('cart-transition');
    const background = document.querySelector('.transparent-background');
    background.classList.toggle('display-none');
  }
  
  return (
    <header>
        <Link to={"/"}><div className="store-logo">Online Retailer</div></Link>
        {search ? <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} /> : null}
        <ul>
            <Link to={"/"}><li className='home'>Home <div className='home-icon'><HomeIcon /></div></li></Link>
            <Link to={"/shop"}><li className='shop'>Shop <div className='shop-icon'><ShopIcon /></div></li></Link>
            <li className='cart-button' onClick={handleCartDisplay}>
              Cart 
              <div className='cart-icon'>
                <CartIcon />
                {totalQuantity ? <div className='quantity-icon'>{totalQuantity}</div> : null}
              </div>
            </li>
        </ul>
            <div className={display}>
              {<Cart
                cart={cart}
                change={change}
                setChange={setChange}
                setDisplay={setDisplay}
                totalQuantity={totalQuantity}
                updateShopPage={updateShopPage}
                setUpdateShopPage={setUpdateShopPage}
              />}
            </div>
    </header>
  )
}
