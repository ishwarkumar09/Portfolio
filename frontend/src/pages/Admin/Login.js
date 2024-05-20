import React, { useState } from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[user , setUser] = useState({
    userName:"",
    password:""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
     e.preventDefault();
   
     const login = async()=>{
        try {
            dispatch(ShowLoading())
            const res = await fetch('/api/portfolio/admin/admin-login',{
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(user)
            } )

            const data = await res.json();
            dispatch(HideLoading());
            if(res.ok){
                message.success(data.message);
                localStorage.setItem("portfolio-admin" , JSON.stringify(data));
                navigate('/admin'); 
            } else {
                message.error(data.message || 'Login failed');
              }
           
            
        } catch (error) {
          message.error(error.message);
          dispatch(HideLoading());
        }
     }

     login();
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen bg-primary">
          <div className=" p-6 rounded-lg ">
       <h1 className="text-3xl font-semibold text-center text-tertiary my-3">
              Ishwar - Login
               <span className="text-secondary"> Admin</span>
            </h1>
        <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-tertiary">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" 
                    value={user.userName}
                    onChange={(e)=>setUser( {...user,userName:e.target.value})}/>
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text text-tertiary">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10"
                    value={user.password}
                    onChange={(e) =>{setUser({...user , password:e.target.value})}} />
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className=" mt-3 bg-tertiary px-3 py-2 hover:text-white rounded">
                    Login
                    </button>
                </div>
                </form>
             </div> 
    </div>
  )
}

export default Login