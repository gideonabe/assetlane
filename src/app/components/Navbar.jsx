import React from 'react'
import Image from 'next/image'
// import logo from '../../../public/favicon.png'
import unlock from '../../../public/img/unlock.png'

const Navbar = () => {
  return (
    <div className='mt-5 relative z-10 mx-auto bg-white gap-2 md:gap-6 flex justify-between items-center border-2 border-gray-100 rounded-full px-2 py-2'>
      <div className='flex gap-0.5 md:gap-1 ml-5 justify-center items-center'>
        <Image src="/favicon.png" width={29} height={5} alt='Assetlane'/>
        <h1 className='text-sm md:text-[17px] font-bold'>Assetlane</h1>
      </div>

      <div className='flex gap-8 text-sm  font-medium justify-center items-center'>
        <p>Features</p>
        <p>Pricing</p>
        <p>About</p>
        <p>Contact</p>
        <div className='flex gap-2 bg-blue px-2 py-2 md:px-8 md:py-5 rounded-full justify-center items-center'>
          <Image src={unlock} width={20} height={25} alt='Unlock'/>
          <p className='text-white text-xs'>Start 14-Day Trial</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar