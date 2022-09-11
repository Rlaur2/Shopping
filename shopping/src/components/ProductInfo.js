import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './stylesheets/ProductInfo.css'
import { StarRatings } from './StarRatings'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'
import { Link } from 'react-router-dom'
import { Header } from './Header'


export const ProductInfo = ({match}) => {
  const [product, setProduct] = useState({category: 'men\'s clothing', description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', id: 0, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 109.95, rating: {rate:3.9,count:120},title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'})
  const [cartAmount, setCartAmount] = useState(1);
  const [change, setChange] = useState(false);
  //params.id gives me the url to will be used to fetch this specific item
  const params = useParams();

  useEffect(() => {
    /*const locations = !localStorage.newLocation ? [] : JSON.parse(localStorage.getItem('newLocation'))
    localStorage.setItem('newLocation', JSON.stringify([...locations,`I've been to the ${product.title} page!`]))
    the above code works, you can save an array in local storage and pull it from anywhere on the site */
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
  },[])

  const handleCartAddition = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const checkCart = currentCart.filter(item => {
        if (item.id === product.id) {
            return item;
        }
        });
        console.log(currentCart, checkCart);
    if (checkCart.length) {
        const newStorage = currentCart.map(item => {
            if (item.id === product.id) {
                item.quantity += cartAmount;
                return item;
            } else return item;
        });
        localStorage.setItem('cart', JSON.stringify(newStorage));
        console.log(newStorage, 'already in cart');
    } else {
        currentCart.push({...product, quantity: cartAmount});
        localStorage.setItem('cart', JSON.stringify(currentCart));
        console.log(currentCart, 'first time going to cart');
    }
    setChange(true);
  }

  const handleCartIncrease = () => {
    if (cartAmount === 99) {
        return;
    }
    let newCount = cartAmount;
    newCount += 1;
    setCartAmount(newCount);
  }

  const handleCartDecrease = () => {
    if (cartAmount === 1) {
        return;
    }
    let newCount = cartAmount;
    newCount -= 1;
    setCartAmount(newCount);
  }


    return (
    <div>
        <Header 
            change={change}
            setChange={setChange} 
            />
        <Link to={'/shop'}> 
            <div className="go-back">
                Back To Products
            </div>
        </Link>
        <div className='product-container'>
            <div className="product-info">
                <img src={product.image} alt={product.title} />
                <div className="product-details">
                    <div className="product-info-title">
                        {product.title}
                    </div>
                    <div className="product-info-category">
                        Category: {product.category}
                    </div>
                    <div className="product-info-rating">
                        <div className="review-stars"><StarRatings rating={product.rating.rate} /></div>
                        <div className='review-count'>{product.rating.count} reviews</div>
                    </div>
                    <div className="product-price">
                        ${product.price}
                    </div>
                    <div className="add-to-cart">
                        <div className='cart-increaser'><Minus onClick={handleCartDecrease} /><div className='cart-amount'>{cartAmount}</div><Plus onClick={handleCartIncrease} /></div>
                        <div onClick={handleCartAddition} className="add-to-cart-button">
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info-description">
                    {product.description}
            </div>
        </div>
    </div>
  )
}
