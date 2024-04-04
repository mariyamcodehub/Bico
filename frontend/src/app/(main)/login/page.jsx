import React from 'react';
import './page.css'
const Login = () => {

  return (
    <>

      <div className="hero min-h-screen bg-blend-luminosity">
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-50">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-50">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-slate-50">Forgot password?</a>
              </label>
            </div>
            <button type='submit' className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>



    </>
  )
}

export default Login;