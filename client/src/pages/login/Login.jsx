import React from 'react'
import MainLayout from '../../components/MainLayout'
const Login = () => {
  return (
    <MainLayout>
    <div>
        <form action="">
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder='Enter your name' />
                </div>
        </form>
    </div>
    </MainLayout>
  )
}

export default Login