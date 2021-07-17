import React from 'react'
import { useState } from 'react';
import { GiAlmond } from "react-icons/gi";
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import {  Link } from 'react-router-dom';
import Home from '../pages/Home'
// import About from '../pages/About'
// import Project from '../pages/Project'
import Work from '../pages/Work'
import '../css/header.css';

export default function Header() {

    const [click,setClick]=useState(false)
    const clickHandler = () =>setClick(!click)
    const closeMenu =() =>setClick(false)

  return (
      <div className='navbar'>
         <Link to={'/'}>
        <div className='logo'>
       
          <GiAlmond className='logo-icon' size='55px'/>
          <h2>Heading</h2>
      
        </div>
        </Link>
        <ul className={click?'nav-list-mobile' :'nav-list'}>
        <li className='list' onClick={closeMenu}>
            <Link to='/'>home</Link>
          </li>
          <li className='list' onClick={closeMenu}>
            <Link to='/About'>ABOUT</Link>
          </li>
          <li className='list' onClick={closeMenu}>
            <Link to='/Project'>PROJECT</Link>
          </li>
          <li className='list' onClick={closeMenu}>
            <Link to='/Work'>Our Work</Link>
          </li>
          <li className='list' onClick={closeMenu}>
            <Link to='/Contact'>Contact Us</Link>
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

  )
}


