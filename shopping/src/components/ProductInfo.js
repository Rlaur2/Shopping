import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './stylesheets/ProductInfo.css'
import { StarRatings } from './StarRatings'
import {ReactComponent as Minus} from '/home/pavel/Projects/Shopping/shopping/src/images/minus-circle.svg'
import {ReactComponent as Plus} from '/home/pavel/Projects/Shopping/shopping/src/images/plus-circle.svg'



export const ProductInfo = ({match}) => {
  const [product, setProduct] = useState({category: 'women\'s clothing',description:'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',id:17,image:'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',price:39.99,rating:{rate: 3.8,count:679},title:'Rain Jacket Women Windbreaker Striped Climbing Raincoats'})
  const [cartAmount, setCartAmount] = useState(1);
  //params.id gives me the url to will be used to fetch this specific item
  const params = useParams();

  useEffect(() => {
    
  },[])

    return (
    <div>
        <div className="go-back">
            Back To Products
        </div>
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
                    <StarRatings rating={product.rating.rate} />
                    <div>{product.rating.count} reviews</div>
                </div>
                <div className="product-price">
                    ${product.price}
                </div>
                <div className="add-to-cart">
                    <Minus />{cartAmount}<Plus />
                    <div className="add-to-cart-button">
                        Add To Cart
                    </div>
                </div>
                <div className="product-info-description">
                    Description: {product.description}
                </div>
            </div>
        </div>
    </div>
  )
}
