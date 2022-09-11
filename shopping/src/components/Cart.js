import React from 'react'
import './stylesheets/Cart.css'
import { CartItem } from './CartItem'


export const Cart = ({cart, change, setChange}) => {
  let totalQuantity = 0;
  if (cart && cart.length > 1) {
    totalQuantity = cart.reduce((previous, current) => {
     return previous.quantity + current.quantity;
    });
  } else if (cart && cart.length === 1) {
    totalQuantity = cart[0].quantity;
  }

  return (
    
        <div className='transparent-background'>
            <div className="cart">
                <div className='cart-name'>Shopping Cart</div>
                    <div>
                      {cart && cart.length ? <div>{cart.map((item, index) => (
                        <CartItem 
                          key={index} 
                          cartItem={item}
                          setChange={setChange}
                          change={change} 
                          />
                    ))}</div> : <div className='empty-cart-message'>Your cart is empty...</div>}
                    </div>
                    {cart && cart.length ? 
                    <div className="checkout">
                        Proceed To Checkout ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})
                    </div> : null}
            </div>
        </div>
  )
}
