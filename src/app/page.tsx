import React from 'react';

//import bgVideo from "../videos/SynapseRackPV.mp4"
import logo from "../images/SynapseRack-logo.png"
import bg_trans from "../images/bg_trans.png"

import Footer from "../components/footer"

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute w-full h-full bg-repeat z-1 mix-blend-multiply" style={{ backgroundImage: `url(${bg_trans})` }}></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center opacity-100">
          <source src = "/videos/SynapseRackPV.mp4" type="video/mp4"/>
        </video>  
          <img src={logo.src} alt="SynapseRack" className="absolute w-5/6  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <Footer/>
      </div>
    </main>
  )
}
