import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')}className={activeNav==='#'? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active':""}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active':""}><AiOutlineBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#services'? 'active':""}><RiServiceFill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active':""}><AiFillMessage/></a>

    </nav>
  )
}

export default Nav