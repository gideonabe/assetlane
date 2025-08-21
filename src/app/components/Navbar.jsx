import React from 'react'
import Image from 'next/image'
// import unlock from '../../../public/img/unlock.png'

const Navbar = () => {
  return (
    <div className='mt-5 relative z-10 mx-auto bg-white gap-2 md:gap-6 flex justify-between items-center border-2 border-gray-100 rounded-full px-2 py-2'>
      <div className='flex gap-0.5 md:gap-1 ml-5 justify-center items-center'>

        <div className='relative w-6 h-6'>
          <Image 
            src="/favicon.png" 
            alt='Assetlane Logo' 
            sizes='20px' 
            fill 
            className='object-contain'/>
        </div>

        {/* <Image src="/favicon.png" width={29} height={15} alt='Assetlane'/> */}
        <h1 className='text-sm md:text-[17px] font-bold'>Assetlane</h1>
      </div>

      <div className='flex gap-8 text-sm  font-medium justify-center items-center'>
        <p>Features</p>
        <p>Pricing</p>
        <p>About</p>
        <p>Contact</p>
        <div className='flex gap-2 bg-blue-100 px-2 py-2 md:px-8 md:py-5 rounded-full justify-center items-center'>
          {/* <Image src={unlock} width={20} height={25} alt='Unlock'/> */}

          <div className='relative w-6 h-6'>
          <Image 
            src="/img/unlock.png"
            alt='Unlock icon' 
            sizes='15px' 
            fill 
            className='object-contain'/>
        </div>
          <p className='text-white text-xs'>Start 14-Day Trial</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar