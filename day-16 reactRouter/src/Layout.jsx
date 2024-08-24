import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> //The outlet in the Layout component helps to create a dynamic website. 
      //It allows the user to navigate to different pages without reloading the entire website.
    <Footer />
    </>
  )
}

export default Layout
