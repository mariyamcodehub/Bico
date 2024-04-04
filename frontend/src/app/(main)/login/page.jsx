import React from 'react';
import './page.css'
const Login = () => {

  return (
    <>

      <div className="hero min-h-screen bg-blend-luminosity">

        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold ms-8 text-white">Login now!</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login;