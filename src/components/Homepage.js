import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Homepage (){
  return (
    <main className="bmf-flex">     
      <Hero/>
      <Specials/>
      <Testimonials/> 
      <About/>
    </main>
  )
}



export default Homepage;