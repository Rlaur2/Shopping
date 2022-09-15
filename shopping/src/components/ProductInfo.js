import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './stylesheets/ProductInfo.css'
import { StarRatings } from './StarRatings'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { products as productsAPI } from './productsFromApi'


export const ProductInfo = () => {
  const [product, setProduct] = useState({category: '',description: '',id:'',image:'',price:'',rating:{rate:'', count:''},title:''})
  const [cartAmount, setCartAmount] = useState(1);
  const [change, setChange] = useState(false);
  //params.id gives me the url to will be used to fetch this specific item
  const params = useParams();

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    setTimeout(fetchRawProduct, 300);
    //fetchProduct();
  },[])

  const fetchRawProduct = () => {
    const returnedProduct = productsAPI.filter(item => {
        if (Number(params.id) === item.id) {
            return item;
        } 
    });
    setProduct(returnedProduct[0]);
  }

  /*
    The API constantly goes down. productsAPI is the raw information.
    const fetchProduct = async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const response = await product.json();
    setProduct(response);
  }*/

  const handleCartAddition = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const checkCart = currentCart.filter(item => {
        if (item.id === product.id) {
            return item;
        }
        });
    if (checkCart.length) {
        const newStorage = currentCart.map(item => {
            if (item.id === product.id) {
                item.quantity += cartAmount;
                return item;
            } else return item;
        });
        localStorage.setItem('cart', JSON.stringify(newStorage));
    } else {
        currentCart.push({...product, quantity: cartAmount});
        localStorage.setItem('cart', JSON.stringify(currentCart));
    }
    setChange(!change);
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
        {!product.title ? <div className='loading-product'>Loading...<div className="loader"></div></div> :<div className='product-container'>
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
                        ${Number(product.price).toFixed(2)}
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
        </div>}
    </div>
  )
}
