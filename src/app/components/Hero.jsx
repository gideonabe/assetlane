import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className='relative h-full max-w-full flex flex-col items-center justify-start bg-white overflow-hidden mb-10'>
      <div className="w-[90%] mb-10">
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

      <div className="relative z-10 flex text-center justify-center items-center flex-col gap-4">
        <div className='flex gap-2 bg-white justify-center items-center p-1 pr-4 rounded-full shadow-lg'>
          <div className='flex'>
            <img src="/img/pic1.png" alt="First image" />
            <img src="/img/pic2.png" alt="First image" />
            <img src="/img/pic3.png" alt="First image" />
          </div>
          <p className='font-semibold text-black-100 text-sm'>2.3k+ agencies sign up</p>
        </div>

        <h1 className='text-[60px] font-bold w-[60%] leading-17 text-black -tracking-[2px]'>Manage Listings. Track Clients. Drive Closings.</h1>

        <p className='w-[45%] text-black text-sm'>Assetlane is a real estate dashboard that helps agents and managers simplify operations, stay organized, and move faster — all from one clean interface.</p>

        <div className='flex gap-2 mt-4'>
          <div className='flex gap-2 bg-blue px-1 py-0.5 md:px-11 md:py-4 rounded-full justify-center items-center'>
            <img src="/img/unlock.png" alt="Unlock icon" width={18} height={18}/>
            <p className='text-white text-xs'>Start 14-Day Trial</p>
          </div>
          <div className='flex gap-2 border-2 border-gray-200 px-1 py-0.5 md:px-8 md:py-4 rounded-full justify-center items-center'>
            <img src="/img/play.png" alt="Play icon" width={18} height={18}/>
            <p className='text-black-100 text-xs font-semibold'>Watch Product Demo</p>
          </div>
        </div>
      </div>

      <div className='mt-10 relative z-10 max-w-[80%] mx-auto'>
        <img src="/img/dashboard.png" alt="Multiple Dashboards" />
      </div>

    </section>
  )
}

export default Hero