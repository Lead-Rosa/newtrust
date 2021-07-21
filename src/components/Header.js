import React from 'react'
import { useState } from 'react';
import { GiAlmond } from "react-icons/gi";
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import {  Link } from 'react-router-dom';
import img from '../img/handshake.png'
import '../css/header.css';

export default function Header() {

    const [click,setClick]=useState(false)
    const clickHandler = () =>setClick(!click)
    const closeMenu =() =>setClick(false)

  return (
    <div className='main-navbar'>
            <div className='navbar'>
         <Link to={'/'}>
        <div className='logo'>
        <img src={img} className='logo-icon'/>
          {/* <GiAlmond className='logo-icon' size='55px'/> */}
          <h2>Head</h2>
      
        </div>
        </Link>
        <ul className={click?'nav-list-mobile' :'nav-list'}>
        <li className='list' onClick={closeMenu}>
          <div className='nav-list-item'>
            <Link to='/'>home</Link>
            </div>
          </li>
          <li className='list' onClick={closeMenu}>
          <div className='nav-list-item'>
            <Link to='/About'>about</Link>
            </div>
          </li>
          <li className='list' onClick={closeMenu}>
          <div className='nav-list-item'>
            <Link to='/Project'>project</Link>
            </div>
          </li>
          <li className='list' onClick={closeMenu}>
          <div className='nav-list-item'>
            <Link to='/Work'>Work</Link>
            </div>
          </li>
          <li className='list' onClick={closeMenu}>
          <div className='nav-list-item'>
            <Link to='/Contact'>contact</Link>
            </div>
          </li>
        </ul>
        <ul className='sign-up'>
          <li className='sign'>
            <a href='#'>Sign-UP</a>
            </li>
          <li className='sign'>
            <a href='#'>Donate</a>
          </li>
        </ul>
        <div className='menu-icon' onClick={clickHandler}>
          {click?
          (<AiOutlineClose className='menu' size='40px'/>)
          :
          (<AiOutlineMenu className='menu'size='40px'/>)
          }
        </div>
      </div>
</div>
  )
}


