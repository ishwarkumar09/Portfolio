import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
       <div className='flex flex-col items-center '> 
       <div className='flex flex-col gap-5 sm:flex-row sm:mt-10 sm:gap-10'>
        <a href='https://www.instagram.com/im_ishwar9?igsh=MWg3c3d4ajR3MGd1OQ=='><i className="ri-instagram-fill text-gray-500 text-xl"></i></a>
        <a href='https://www.linkedin.com/in/ishwar-kumar-918a7a262'>
        <i className="ri-linkedin-box-fill text-gray-500 text-xl"></i>
        </a>
        <a href='https://www.ishwarborana4600@gmail.com'>
        <i className="ri-mail-fill text-gray-500 text-xl"></i>
        </a>
        
        <a href='https://github.com/ishwarkumar09'>
        <i className="ri-github-fill text-gray-500 text-xl"></i>
        </a>
        
        </div>
        <div className='w-[1px] h-52 bg-[#125f63] sm:hidden'>

        
        </div>
       </div>
    </div>
  )
}

export default LeftSider;