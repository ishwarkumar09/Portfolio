import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-6xl sm:text-4xl font-semibold'>
          <h1 className='text-secondary i '>I</h1>
          <h1 className='text-white k '>K</h1>
          <h1 className='text-tertiary p '>P</h1>
        </div>
    </div>
  )
}

export default Loader