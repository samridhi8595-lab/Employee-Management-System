import React from 'react'
import Header from '../other/Header'
import CraeteTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
    <Header/>
    <CraeteTask/>
    <AllTask/>
    
      
    </div>
  )
}

export default AdminDashboard
