import React, { useState } from 'react'
import { FilterSideBar } from './components/FilterSideBar'
import { Header } from './components/Header'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'
import './components/stylesheets/ShopPage.css'

export const ShopPage = () => {
  const [change, setChange] = useState(false);
  const [products, setProducts] = useState([
    {category: 'jewelery',description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',id:6,image:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',price:168,rating:{rate:3.9, count:70},title:'Solid Gold Petite Micropave '},
    {category: 'electronics',description:'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',id:11,image:'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',price:109,rating: {rate:4.8,count:319},title:'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5'},
    {category: 'women\'s clothing',description:'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',id:17,image:'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',price:39.99,rating:{rate: 3.8,count:679},title:'Rain Jacket Women Windbreaker Striped Climbing Raincoats'},
    {category: 'men\'s clothing', description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', id: 0, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 109.95, rating: {rate:3.9,count:120},title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'},
    {category: 'men\'s clothing', description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',id: 3, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', price: 55.99, rating: {rate:4.7,count:500},title:'Mens Cotton Jacket'},
    {category: 'women\'s clothing', description:'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',id:15,image:'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',price:56.99,rating:{rate:2.6,count:235},title:'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats'}
]);

  const [category, setCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('');

  return (
    <div>
      <Header 
        search={true}
        change={change}
        setChange={setChange}
        />
      <Sort />
      <div className='main'>
        <FilterSideBar 
          category={category}
          setCategory={setCategory}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />
        <ProductDisplay 
          products={
            products.filter(item => {
              if (category === 'all') {
                return item;
              } else if (item.category === category) {
                return item;
              }
            })
          }
        />
      </div>
    </div>
  )
}

//The API call to gather the products should happen here I'm sure