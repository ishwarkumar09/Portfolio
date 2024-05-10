import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start sm:mx-5 justify-center gap-7 py-10'>
        <h1 className='text-white'>Hi , I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ishwar Kumar Patel</h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I build things for the web.</h1>
        <p className='text-white '>
            I am Fullstack Web Developer .Currently I am working as a react Developer in India . Also sharing my knowledge to the students that I have gained in my carrier through online teaching across the world.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    
    </div>
  )
}

export default Intro