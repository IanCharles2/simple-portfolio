import React from 'react'
import heroimage from '../assets/ian.jpg' //to be added <
import { TypeAnimation } from 'react-type-animation'
import ianresume from '../assets/ian resume.pdf'
import Contact from './Contact'




const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
<div className= 'col-span-1 my-auto mx-auto w-[300px] h-auto 1g:w-[400px]'>

<img src={heroimage} alt="hero image"/>
</div>

<div className="col-span-2 px-5 my-auto">
<h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
  <span className="primary-color">
    I'm a
  </span> 
  <br />
  <TypeAnimation
    sequence={[
      "Gamer", 
      1000,
      "Procrastinator", 
      1000,
      "Webdesigner", 
      1000,
      "Daydreamer",
      1000,
      "Spaceglider", 
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h1>
<p className='text-white sm:text-lg my-6 lg:text-xl'>Hi, my name is Ian Charles Brillantes, I'am 22 years old, and
    I have good experience in Web Development.
</p>
<div className='my-8'>
<a href={ianresume} className="px-6 py-3 w-full rounded-xl mr-4
bg-gradient-to-br from-red-500 to orange-500 text-white">
    Download CV
</a>

</div>
</div>
    </div>
  )
}

export default Hero