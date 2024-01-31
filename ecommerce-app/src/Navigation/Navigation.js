import React,{useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom";
import {signout} from "../Firebase/Firebase.utils"
import CartIcon from '../Components/Cart-Icon/CartIcon';
import CartItems from '../Components/Cart-Items/CartItems';
import {useSelector,useDispatch} from "react-redux"
import { CartisCartOpen } from '../store/Cart/Cart.Selelctor';
import { setIsCartOpen } from '../store/Cart/Cart.Action';

const Navigation = () => {

const current = useSelector((state)=>state.user.current)

const isCartOpen = useSelector(CartisCartOpen)
const dispatch = useDispatch()

  return (
    <>
    <div className='nav-main-container'>
      <Link className='logo-container' to = "/">
        <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt=""  height = " 100px" width = " 150px"/><span style = {{fontSize:"25px",color:"orangered",position:"relative",bottom:"40px",fontWeight:"bold" ,textShadow:" 2px 2px #0c8000"}}>ABHISAT CLOTHING</span>
      </Link>
      <div className='links-container'>
        <Link  to = "/shop" className='shopofroute' onClick={()=>dispatch(setIsCartOpen(false))}>SHOP</Link>
        <Link  to = "/contact" className='contact'>CONTACT</Link>
        {
          current? <Link  to = "/sign-in" className='sign-in' onClick = {signout}>SIGN OUT</Link>: <Link  to = "/sign-in" className='sign-in'>SIGN IN</Link>
        }
       <CartIcon  />
      </div>
      {
           isCartOpen && <CartItems />
      }
   
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation
