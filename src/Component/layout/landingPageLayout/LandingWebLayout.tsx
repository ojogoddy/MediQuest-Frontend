import React from 'react'
import Header from '../../blocks/landingPageBlock/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../blocks/landingPageBlock/Footer'

const LandingWebLayout:React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingWebLayout