import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import GuestsLove from '../../components/GuestsLove/GuestsLove'
import ExplorePlaces from '../../components/ExplorePlaces/ExplorePlaces'
import UniqueProperties from '../../components/UniqueProperties/UniqueProperties'
import Footer from '../../components/Footer/Footer'
// import Carousal from '../../components/demo/Carousal'

function Home() {
  return (
    <>
      <Navbar/>
      <Header type="home"/>
      <GuestsLove/>
      <ExplorePlaces/>
      <UniqueProperties/>
      <Footer/>
      {/* <Carousal/> */}
    </>
  )
}

export default Home