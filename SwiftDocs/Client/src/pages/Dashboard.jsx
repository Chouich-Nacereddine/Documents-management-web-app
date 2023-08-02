import React from 'react'
import UserDashboard from '../components/UserDashboard'
import AdminDashboard from '../components/AdminDashboard'
import CompanyDashboard from '../components/CompanyDashboard'

const Dashboard = () => {
  return (
    <div>
        <UserDashboard/>
        {/* <AdminDashboard/>
        <CompanyDashboard/> */}
    </div>
  )
}

export default Dashboard
