import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className='relative h-screen max-w-full flex flex-col items-center justify-between bg-white overflow-hidden'>
      <div className="w-[90%]">
        <Navbar />
      </div>

      <img 
        src="/img/blueellipse.png" 
        alt="Blue Ellipse" 
        className='absolute left-0 top-1/2 -translate-y-1/2 object-cover pointer-events-none select-none'
      />

      <img 
        src="/img/pinkellipse.png" 
        alt="Pink Ellipse" 
        className='absolute right-0 top-1/2 -translate-y-1/2 object-cover pointer-events-none select-none'
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        {/* <p className="mt-4 text-lg text-gray-600">About to fuck some shit up</p> */}
      </div>

      <div className="relative z-10 text-center">
        <p className="mb-8 text-lg text-gray-600">About to fuck some shit up</p>
      </div>

    </section>
  )
}

export default Hero