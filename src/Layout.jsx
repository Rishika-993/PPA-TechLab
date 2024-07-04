import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import Service from './components/Body/Service'
import Customer from './components/Body/Customer'
import Calender from './components/Body/Calender'
import CommunityUpdates from './components/Body/CommunityUpdates'

function Layout() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Service/>
    <Calender />
    <Customer />
    <CommunityUpdates />
    <Footer />
    </>
  )
}

export default Layout
