import React, { useState } from 'react'
import './stylesheets/Cart.css'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'
import {ReactComponent as Trash} from '/home/pavel/Projects/Shopping/shopping/src/images/trash-can.svg'

export const CartItem = ({cartItem, change, setChange}) => {
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleQuantityIncrease = () => {
        if (quantity === 99) {
            return;
        }
        let newCount = quantity;
        newCount += 1;
        setQuantity(newCount);
        const currentCart = JSON.parse(localStorage.getItem('cart'));
        const newStorage = currentCart.map(item => {
            if (item.id === cartItem.id) {
                item.quantity = newCount;
                return item;
            } else return item;
        });
        localStorage.setItem('cart', JSON.stringify(newStorage));
        setChange(!change);
    }

    const handleQuantityDecrease = () => {
        if (quantity === 1) {
            return;
        }
        let newCount = quantity;
        newCount -= 1;
        setQuantity(newCount);
        const currentCart = JSON.parse(localStorage.getItem('cart'));
        const newStorage = currentCart.map(item => {
            if (item.id === cartItem.id) {
                item.quantity = newCount;
                return item;
            } else return item;
        });
        localStorage.setItem('cart', JSON.stringify(newStorage));
        setChange(!change);
    }

    const handleDelete = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart'));
        const newStorage = currentCart.filter(item => {
            if (item.id !== cartItem.id) {
                return item;
            }
        });
        localStorage.setItem('cart', JSON.stringify(newStorage));
        setChange(!change);
    }
  
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
            <div className='quantity-text'>Quantity:</div> <Minus onClick={handleQuantityDecrease} />{quantity}<Plus onClick={handleQuantityIncrease} />
        </div>
    </div>
    <div className="cart-price">
        ${cartItem.price}
    </div>
    <div className="cart-delete">
        <Trash onClick={handleDelete} />
    </div>
</div>
  )
}