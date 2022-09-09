import React from 'react'
import './stylesheets/Cart.css'
import { CartItem } from './CartItem'


export const Cart = ({cart}) => {
  return (
    <div className='transparent-background'>
        <div className="cart">
            <div className='cart-name'>Shopping Cart</div>
                {cart.map(item => (
                    <CartItem cartItem={item} />
                ))}
        </div>
    </div>
  )
}
