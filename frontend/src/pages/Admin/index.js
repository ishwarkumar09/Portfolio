import React from 'react'
import { Tabs } from 'antd';
import Header from '../../components/Header'
import AdminIntro from './AdminIntro.js';
import AdminAbout from './AdminAbout.js';
import { useSelector } from 'react-redux';
import Experience from './Experience.js';
const {TabPane} =Tabs;


function Admin() {
 const{portfolioData} = useSelector((state)=> state.root)

    const items = [
        { key: '1', title: 'Intro', component: AdminIntro },
        { key: '2', title: 'About', component: AdminAbout },
        { key: '3', title: 'Experience', component: Experience },
        // Add more items as needed
      ];
return (
<div>
    <Header />
    {portfolioData && <div className='mt-5 p-5'>
  <Tabs defaultActiveKey={items[0].key}>
    {items.map(item => (
      <Tabs.TabPane tab={item.title} key={item.key}>
        <item.component />
      </Tabs.TabPane>
    ))}
  </Tabs>
</div>}
</div>
  )
}

export default Admin