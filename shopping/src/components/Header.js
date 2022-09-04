import React from 'react'
import './stylesheets/Header.css'

export const Header = () => {
  return (
    <header>
        <div className="store-logo">Online Retailer</div>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    </header>
  )
}
