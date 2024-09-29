import React from 'react'
import Header from '../../07reactRouter/src/components/Header/Header'
import Footer from '../../07reactRouter/src/components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
