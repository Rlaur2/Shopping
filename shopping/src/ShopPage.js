import React, { useState } from 'react'
import { useEffect } from 'react'
import { FilterSideBar } from './components/FilterSideBar'
import { Header } from './components/Header'
import { ProductDisplay } from './components/ProductDisplay'
import { Sort } from './components/Sort'
import './components/stylesheets/ShopPage.css'
import { products as productsAPI } from './components/productsFromApi'

export const ShopPage = () => {
  const [change, setChange] = useState(false);
  const [products, setProducts] = useState([{category: '',description: '',id:'',image:'',price:'',rating:{rate:'', count:''},title:'loading'}]);

/*
  This API constantly goes down. productsAPI is the raw info.
  const fetchProducts = async () => {
  const products = await fetch('https://fakestoreapi.com/products');
  const response = await products.json();
  setProducts(response);
}*/

const fetchRawProducts = () => {
  setProducts(productsAPI); 
}

useEffect(() => {
  //the random timer and setTimeout simulates an API call
  const randomTimer = Math.floor(Math.random() * 600)
  setTimeout(fetchRawProducts, randomTimer + 370);
  //fetchProducts();
},[])

  const [category, setCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState({'0-99.99': false, '100-199.99': false, '200-299.99':false, '300-399.99':false, '400-499.99': false, '500+': false});
  const [starFilter, setStarFilter] = useState({five: false, four: false, three: false, two: false, one: false});
  const [sort, setSort] = useState('price-low');
  const [searchItem, setSearchItem] = useState('');


  
  return (
    <div>
      <Header 
        search={true}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        change={change}
        setChange={setChange}
        />
      <Sort 
        setSort={setSort}
      />
      <div className='main'>
        <FilterSideBar 
          category={category}
          setCategory={setCategory}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          starFilter={starFilter}
          setStarFilter={setStarFilter}
          change={change}
          setChange={setChange}
        />
        <ProductDisplay 
          products={
            products.filter(item => {
              if (category === 'all') {
                return item;
              } else if (item.category === category) {
                return item;
              }
            }).filter(item => {
              if (!priceFilter['0-99.99'] && !priceFilter['100-199.99'] &&
                  !priceFilter['200-299.99'] && !priceFilter['300-399.99'] &&
                  !priceFilter['400-499.99'] && !priceFilter['500+']) {
                    return item;
                  } 
              if(priceFilter['0-99.99']) {
                if (item.price >= 0 && item.price <= 99.99) {
                  return item;
                }
              }
              if(priceFilter['100-199.99']) {
                if (item.price >= 100 && item.price <= 199.99){
                  return item;
                }
              }
              if(priceFilter['200-299.99']) {
                if (item.price >= 200 && item.price <= 299.99){
                  return item;
                }
              }
              if(priceFilter['300-399.99']) {
                if (item.price >= 300 && item.price <= 399.99){
                  return item;
                }
              }
              if(priceFilter['400-499.99']) {
                if (item.price >= 400 && item.price <= 499.99){
                  return item;
                }
              }
              if(priceFilter['500+']) {
                if (item.price >= 500){
                  return item;
                }
              }
            }).filter(item => {
              if (!starFilter.five && !starFilter.four &&
                  !starFilter.three && !starFilter.two &&
                  !starFilter.one) {
                    return item;
                  }
              if (starFilter.five) {
                if(item.rating.rate >= 4.5) {
                  return item;
                }
              }
              if (starFilter.four) {
                if(item.rating.rate < 4.5 && item.rating.rate >= 3.5) {
                  return item;
                }
              }
              if (starFilter.three) {
                if(item.rating.rate < 3.5 && item.rating.rate >= 2.5) {
                  return item;
                }
              }
              if (starFilter.two) {
                if(item.rating.rate < 2.5 && item.rating.rate >= 1.5) {
                  return item;
                }
              }
              if (starFilter.one) {
                if(item.rating.rate < 1.5) {
                  return item;
                }
              }
            }).sort((a,b) => {
              if(sort === 'price-low') {
                return a.price - b.price;
              } else if (sort === 'price-high') {
                return b.price - a.price;
              } else if (sort === 'name-a') {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA > titleB) {
                  return 1;
                }
                if (titleA < titleB) {
                  return -1;
                }
                return 0;
              } else {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA > titleB) {
                  return -1;
                }
                if (titleA < titleB) {
                  return 1;
                }
                return 0;
              }
            }).filter(item => {
              if ((item.title.toUpperCase()).includes(searchItem.toUpperCase())) {
                return item;
              }
            })
          }
        />
      </div>
    </div>
  )
}
