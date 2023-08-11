import React from 'react'
// import UserSignUP from '../components/UserSignUP'
import CompanieSignUP from '../components/CompanieSignUP'
import Navbar from '../components/Navbar'
import SignUP from '../assets/SignUP.png'


const SignUp = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex w-[100vw] h-[100vh] pt-[12vh]'>
        {/* <UserSignUP/> */}
        <div>
          <img src={SignUP} alt="" />
        </div>
        <CompanieSignUP/>
    </div>
    </div>
  )
}

export default SignUp
