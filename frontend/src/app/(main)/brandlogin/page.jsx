'use client'
import React from 'react'
import './page.css'
import { useFormik } from 'formik';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

const brandlogin = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {

      email: '',
      password: ''

    },
    onSubmit: async (values, { resetForm }) => {


      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 2000)

      const res = await fetch("http://localhost:5000/brand/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar("user login successfully", { variant: "success" })
        const data = await res.json();
        sessionStorage.setItem('brand', JSON.stringify(data));
        router.push("/")
      } else {
        enqueueSnackbar("sothing went worng", { variant: "warning" })
      }
    },

  })
  return (
    <>
      <div className="hero min-h-screen md:justify-end ">
        <div className="hero-content mr-48 w-full">

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 opacity-75 hover:opacity-100  ">
            <form onSubmit={loginForm.handleSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" id="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email} required />
                {
                  loginForm.touched.email &&
                  <small className="text-red-500">{loginForm.errors.email}</small>
                }
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input type="password" placeholder=" Password" className="input input-bordered" id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password} required />
                {
                  loginForm.touched.password &&
                  <small className="text-red-500">{loginForm.errors.password}</small>
                }
              </div>
              <div className="text-center my-2">
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>


          </div>
        </div>

      </div>
    </>
  )
}

export default brandlogin