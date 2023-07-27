import React from 'react'
import UserSignUP from '../components/UserSignUP'
import CompanieSignUP from '../components/CompanieSignUP'


const SignUp = () => {
  return (
    <div>
      <div className='flex w-[100vw] h-[100vh] pt-[12vh]'>
        <UserSignUP/>
        <CompanieSignUP/>
    </div>
    </div>
  )
}

export default SignUp
