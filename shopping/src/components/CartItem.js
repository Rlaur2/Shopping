import React from 'react'
import './stylesheets/Cart.css'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'
import {ReactComponent as Trash} from '/home/pavel/Projects/Shopping/shopping/src/images/trash-can.svg'

export const CartItem = ({cartItem}) => {
  return (
    <div className="cart-item">
    <div className="cart-image">
        <img src={cartItem.image} alt={cartItem.title} />
    </div>
    <div className="cart-information">
        <div className="cart-title">
            {cartItem.title}
        </div>
        <div className="cart-quantity">
            <div className='quantity-text'>Quantity:</div> <Minus />{cartItem.quantity}<Plus />
        </div>
    </div>
    <div className="cart-price">
        ${cartItem.price}
    </div>
    <div className="cart-delete">
        <Trash />
    </div>
</div>
  )
}
