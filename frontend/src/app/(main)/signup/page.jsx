import React from 'react'
import './page.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('email is invalid').required('email is required'),
    name: Yup.string().required('name is required'),
    password: Yup.string().required('password is required').min(6, 'too short').matches(/[a-z]/)
  })

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      social: ''
    },
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 2000)
    }
  })
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ms-8">Sign Up!</h1>
            <p className="py-8 px-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="Name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Create Password</span>
                </label>
                <input type="Create Password" placeholder="Create Password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input type="Confirm password" placeholder="Confirm password" className="input input-bordered" required />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Social-Link</span>
                  </label>
                  <input type="Social-Link" placeholder="Social-Link" className="input input-bordered" required />
                </div>
                <button type='submit' className="btn btn-primary mt-5">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup