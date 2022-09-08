import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'



export const ProductInfo = ({match}) => {
  const [product, setProduct] = useState({category: 'women\'s clothing',description:'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',id:17,image:'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',price:39.99,rating:{rate: 3.8,count:679},title:'Rain Jacket Women Windbreaker Striped Climbing Raincoats'})
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
  },[])

    return (
    <div>
        Product page
    </div>
  )
}
