import React from 'react'
import './stylesheets/Cart.css'
import { CartItem } from './CartItem'
import {ReactComponent as WindowClose} from '/home/pavel/Projects/Shopping/shopping/src/images/window-close.svg'


export const Cart = ({cart, change, setChange, setDisplay, totalQuantity}) => {

  let subTotal = 0;
  if (cart && cart.length > 1) {
     cart.forEach(item => {
      subTotal += item.quantity * item.price;
    });
    subTotal = subTotal.toFixed(2);
  } else if (cart && cart.length === 1) {
    subTotal = (cart[0].quantity * cart[0].price).toFixed(2);
  }

  const handleCartDisplay = () => {
    setDisplay('no-display');
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
  }

  return (
        <>
        <div onClick={(e) => {handleCartDisplay()}} className='transparent-background'></div>
            <div className="cart">
                <div className='close-button' onClick={handleCartDisplay}><WindowClose /></div>
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
                    {cart.length ? 
                    <div className="checkout">
                        Checkout (Subtotal: ${subTotal} - {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})
                    </div> : null}
            </div>
        </>
  )
}
