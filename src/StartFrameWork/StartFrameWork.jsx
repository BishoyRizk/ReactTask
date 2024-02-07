import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import FooterTwo from '../FooterTwo/FooterTwo'

export default function StartFrameWork() {
  return <>
  <Navbar/>



  
  <Outlet></Outlet>
 
 
  
  <Footer/>
  {/* <FooterTwo/> */}
  </>
}
