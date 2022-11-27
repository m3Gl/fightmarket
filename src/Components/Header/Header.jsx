import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { useSelector } from 'react-redux';


// добавить функционал изменения цвета и размера корзины
// если в ней более 0 
const Header = () => {

const state = useSelector((state)=> state.HandleCart)

  return (
    <section>
    <header>
     <div class="logo">
       <a href="/"><img src="logo.png" alt='whoops'/></a>
     </div>
     <nav>
     <ul>
       <li><a href="/">Home</a></li>
       <li> <a href="/products">Products</a></li>
       <li><a href="/contact">Contact</a></li>
       <li><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /> ({state.length})</a></li>
     </ul>
     </nav>
     <div>
    <a href="/" class="menu-trigger">Menu</a>
</div>
   </header>
 </section>
  )
}

export default Header
