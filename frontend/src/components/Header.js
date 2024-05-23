import React from 'react'
import { useNavigate } from "react-router-dom";

 function Header() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center bg-primary'>
    
    <div className='p-5  flex '>
        <h1 className='text-secondary text-4xl font-semibold header'>I</h1>
        <h1 className='text-white text-4xl font-semibold header'>K</h1>
        <h1 className='text-tertiary text-4xl font-semibold header'>P</h1>
        </div>
        
        <div >
      <button
          className="border-2 border-tertiary text-tertiary px-5 py-2 rounded m-2"
          onClick={() => {
            navigate("/admin-login");
          }}
        >
          Admin
        </button>
      </div>
        </div>
  )
}

export default Header;
