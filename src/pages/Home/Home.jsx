import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import GuestsLove from '../../components/GuestsLove/GuestsLove'
// import Carousal from '../../components/demo/Carousal'

function Home() {
  return (
    <>
      <Navbar/>
      <Header type="home"/>
      <GuestsLove/>
      {/* <Carousal/> */}
    </>
  )
}

export default Home