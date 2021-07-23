import React from 'react'
import { useState } from 'react';
import classes from '../css/FoundationStyles.module.css';
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import {  Link } from 'react-router-dom';
import img from '../img/handshake.png'


export default function Header() {

    const [click,setClick]=useState(false)
    const clickHandler = () =>setClick(!click)
    const closeMenu =() =>setClick(false)

  return (
    <div className={classes.main_navbar}>
            <div className={classes.navbar}>
         <Link to={'/'}>
        <div className={classes.logo}>
        <img src={img} className={classes.logo_icon} alt=''/>
          <h2>Head</h2>
      
        </div>
        </Link>
        <ul className={click ? classes.nav_list_mobile : classes.nav_list }>
        <li className={classes.list} onClick={closeMenu}>
          <div className={classes.nav_list_item}>
            <Link to='/'>home</Link>
            </div>
          </li>
          <li className={classes.list} onClick={closeMenu}>
          <div className={classes.nav_list_item}>
            <Link to='/About'>about</Link>
            </div>
          </li>
          <li className={classes.list} onClick={closeMenu}>
          <div className={classes.nav_list_item}>
            <Link to='/Project'>project</Link>
            </div>
          </li>
          <li className={classes.list} onClick={closeMenu}>
          <div className={classes.nav_list_item}>
            <Link to='/Work'>Work</Link>
            </div>
          </li>
          <li className={classes.list} onClick={closeMenu}>
          <div className={classes.nav_list_item}>
            <Link to='/Contact'>contact</Link>
            </div>
          </li>
        </ul>
        <ul className={classes.sign_up}>
          <li className={classes.sign}>
            <a href='#'>Sign-UP</a>
            </li>
          <li className={classes.sign}>
            <a href='#'>Donate</a>
          </li>
        </ul>
        <div className={classes.menu_icon} onClick={clickHandler}>
          {click?
          (<AiOutlineClose className={classes.menu} size='40px'/>)
          :
          (<AiOutlineMenu className={classes.menu} size='40px'/>)
          }
        </div>
      </div>
</div>
  )
}


