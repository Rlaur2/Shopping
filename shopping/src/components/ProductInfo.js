import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './stylesheets/ProductInfo.css'
import { StarRatings } from './StarRatings'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'
import { Link } from 'react-router-dom'
import { Header } from './Header'


export const ProductInfo = ({match}) => {
  const [product, setProduct] = useState({category: 'women\'s clothing', description:'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',id:15,image:'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',price:56.99,rating:{rate:2.6,count:235},title:'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats'})
  const [cartAmount, setCartAmount] = useState(1);
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
        <Header />
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
