import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import './layout.css'



export default function Layour() {

  const displayBTNWhenScroll=useRef(null)

  const handleScroll = () => {
    if(window.scrollY < 200 && displayBTNWhenScroll.current) {

      displayBTNWhenScroll.current.style.display='none'

    }


    else   {


      if(displayBTNWhenScroll.current) {

        displayBTNWhenScroll.current.style.display='flex'

      }

    }  
      

  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  document.addEventListener('scroll', handleScroll);


  return <>
  
  <button style={{display:"none",border:"none"}}  ref={displayBTNWhenScroll} className="scrollToTop" 
      onClick={scrollToTop}
      >
        
        <i style={{color:"white"}} className="fa-solid fa-arrow-up  "></i> </button>
  <Navbar/>
<div style={{marginTop:"92px"}} >  <Outlet/></div>
{/* <Footer/> */}
  


  </>
}
