import React from 'react'
import UserLogin from '../components/UserLogin'
import CompanieLogin from '../components/CompanieLogin'


const Login = () => {
  return (
    <div className='flex w-[100vw] h-[100vh] pt-[12vh]'>
        <UserLogin/>
        <CompanieLogin/>
    </div>
  )
}

export default Login
