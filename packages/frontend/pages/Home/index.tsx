import React from 'react'
import NavbarNoWallet from '../components/NavbarNone'
import Footer from '../components/Footer'
import MainIntro from './MainIntro'
import Info from './Info'
import Features from './Features'
import Design from './Design'

function Home() {
  return (
    <>
        <NavbarNoWallet />
        <MainIntro />
        {/* <Design /> */}
        <Features />
        <Info />
        <Footer />
    </>
  )
}

export default Home