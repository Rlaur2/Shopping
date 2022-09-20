# Shopping Website

## Table of Contents

- [Overview](#overview)
    - [Images](#images)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)

## Overview

The aim of this project was to create an e-commerce online retail website created with React. This project uses information from [https://fakestoreapi.com/] (Fake Store API) to display products that can be filtered through by name, price range, customer rating, and category and sorted by price and name. Users can add and delete products from a cart that can be accessed anywhere on the site and will remember you cart when revisiting page.

### Images

- ![Opening Page](/shopping/src/components/images/OpeningPage.png)
- ![Filtered Shop](/shopping/src/components/images/FilteredShop.png)
- ![Open Cart](/shopping/src/components/images/OpenCart.png)

### Links

- Repository URL: [https://github.com/Rlaur2/shopping](https://github.com/Rlaur2/shopping)
- Live Site: [https://rlaur2.github.io/shopping/](https://rlaur2.github.io/shopping/)

## My Process

This shopping website is a project assignment from [The Odin Project](https://www.theodinproject.com/lessons/javascript-shopping-cart). I started by thinking about the different components and functionalities I would need. I knew I wanted a sticky header on each page that kept track of what was in the cart, and a cart that would slide in from the right. I needed three seperate "pages", the opening page, the shop page, and a dynamic product page, so I had to utilize React Router to accomplish this. I started this project by styling most of the components first, which required mock states to fill in the needed product information for the product cards, product page, and items in cart. With the javascript, I started by first implementing the cart logic. I decided to use local storage for the cart data as the data needed to survive page reloads and it also solves the problem of passing the cart data to sibling components. In the product page, the quantity input controls how many items are added into the cart, however in the cart itself the quantity input controls the *actual* quantity so keeping both in sync was tricky. After that, I started on implementing the various filters and sorting methods that can be found on the shop page. I then chained the filters and sorting methods on to the array of products that are passed into the products display component so that only the filtered products are shown.     

### Built With

- React
- React Router v6
- Hooks:
    - useState
    - useEffect
    - useParams