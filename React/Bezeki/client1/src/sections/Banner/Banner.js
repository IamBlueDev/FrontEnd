import './Banner.scss'
import React, { Component } from 'react';
import img2 from '../../images/img2.jpeg';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
class Banner extends Component {
  render() {
    const items= 0;
        return(
        <header>

        <div className="Banner"> 

        <div className="Content-left">
          <div className="Deal">
         <h1 className="DealTitle"> Current speical deal title</h1>
         <h4>Deal description goes here.</h4>
         </div>
        </div>
        <img src={img2} />
        </div>

        
        <div className="mainMenu">
        <ul>
          <li className="active">Shop <FontAwesomeIcon icon={faStore} /></li>
          <li className="">Our Vision</li>
          <img src={logo}></img>
          <li className="">Contact Us</li>
          <li className=""><FontAwesomeIcon icon={faShoppingBasket} /> ({items})</li>
          <hr/>
        
        </ul>
        
        </div> 
        </header>
        );
    }
  }

export default Banner;

{/* <div className="Banner"> 

<div className="Content-left">
  
  Hello, welcome to Beziki
</div>
</div>
<div className="mainMenu">
<ul>
  <li>Shop</li>
  <li>Our Vision</li>
  <logo></logo>
  <li>Contact Us</li>
  <li>Basket</li>

</ul>

</div> */}