import React from 'react'

const Values = () => {
  return (
    <section className='mt-8 max-w-[90%] mx-auto bg-lightblue-100 p-8'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-4 justify-start items-start text-left'>
          <h1 className='px-4 py-1 rounded-full bg-black text-white text-sm'>OUR VALUES</h1>
          <h1 className='text-2xl font-semibold'>What truly makes Assetlane different</h1>
        </div>

        <div className='flex gap-4 mt-4 h-[450px]'>
          <div className='flex flex-col gap-6 bg-white px-10 py-6 justify-between'>
            <img src="/favicon.png" alt="Assetlane logo" width={35} height={5} className='mt-4'/>

            <p className='text-3xl font-semibold'>Smarter Listings Management</p>
            <p className='text-[16px]'>Browse, search, and filter property listings in seconds — with real-time updates, clean data views, and built-in status tracking for every listing.</p>

            <p className='btn-custom'>Try Assetlane</p>
          </div>
          <div className='flex flex-col gap-6 bg-white px-10 py-6 justify-between'>
            <img src="/favicon.png" alt="Assetlane logo" width={35} className='mt-4'/>

            <p className='text-3xl font-semibold'>Centralized Appointments</p>
            <p className='text-[16px]'>All your meetings, showings, and calls in one view. Agents can schedule, reschedule, and update appointments in real time.</p>

            <p className='btn-custom'>Try Assetlane</p>
          </div>
          <div className='flex flex-col gap-6 justify-between bg-white px-10 py-6'>
            <img src="/favicon.png" alt="Assetlane logo" width={35} height={5} className='mt-4'/>

            <p className='text-3xl font-semibold'>Live Reports & Insights</p>
            <p className='text-[16px]'>Visualize your team's performance, track sales, and understand what's working — all through clean, real-time reports that actually make sense.</p>

            <p className='btn-custom'>Try Assetlane</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values