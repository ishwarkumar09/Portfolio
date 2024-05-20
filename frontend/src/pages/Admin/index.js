import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import Header from '../../components/Header'
import AdminIntro from './AdminIntro.js';
import AdminAbout from './AdminAbout.js';
import { useSelector } from 'react-redux';
import Experience from './Experience.js';
import project from './project.js';
import Contact from './Contact.js';
const {TabPane} =Tabs;


function Admin() {
 const{portfolioData} = useSelector((state)=> state.root)


    useEffect(()=>{
     if(!localStorage.getItem("portfolio-admin")){
      window.location.href="/admin-login"
     }
    },[])
    const items = [
        { key: '1', title: 'Intro', component: AdminIntro },
        { key: '2', title: 'About', component: AdminAbout },
        { key: '3', title: 'Experience', component: Experience },
        { key: '4', title: 'Project', component: project },
        { key: '5', title: 'Contact', component: Contact },
        // Add more items as needed
      ];
return (
<div>
    <Header />
   <div className='flex items-center justify-between px-5'>
    <h1 className='text-2xl my-5 text-primary'>Portfolio Admin</h1>
    <button className="cursor-pointer text-xl  text-primary"  onClick={() => {
            localStorage.removeItem("portfolio-admin");
            window.location.href = "/";  // Redirect to portfolio home page
          }}
    >Logout</button>
    </div>

    {portfolioData && <div className='mt-5 p-5'>
  <Tabs defaultActiveKey={items[0].key}   tabPosition="left">
    {items.map(item => (
      <Tabs.TabPane tab={item.title} key={item.key}  >
        <item.component />
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>}
</div>
  )
}

export default Admin