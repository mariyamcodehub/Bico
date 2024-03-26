import React from 'react';
import './page.css'
const Login = () => {
  return (
    <>
      <div className='w-full h-full bg-white place-content-center py-10 flex md:flex-row flex-col '>
        <div className='md:w-3/5 h-96 bg-gray-200 from-gray-200 flex md:flex-row flex-col-reverse py-8'>
          <div className='md:w-2/5 w-dvw h-80 bg-gray-50 text-black ml-0 md:ml-auto'>
            <form>
              <h2 className='md:text-2xl text-base font-semibold px-3 py-4' >Login to your account</h2>
              <div className='p-3 flex flex-col py-5'>
                <label htmlFor="email">email</label>
                <input className='py-3' type="text" placeholder='enter your email' name='name' required />
                <label htmlFor="psw">Password</label>
                <input className='py-3' type="password" placeholder="Enter Password" name="psw" required></input>

              </div>
              <button className='bg-blue-600 text-white p-2 rounded-xl ml-3' type="submit">Login</button>
            </form>
          </div>
          <div className='md:w-2/4 w-dvw h-80 bg-blue-200 text-black md:mr-auto mr-0 back-img  '>
            <div className='text-6xl text-slate-300 mt-9 md:ml-20'>welcome back!</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login;