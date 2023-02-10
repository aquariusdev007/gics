import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Slider2 from "./Slider2"



const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Slider2 />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
