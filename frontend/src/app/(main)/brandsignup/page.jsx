'use client'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import './page.css'


const brandSignup = () => {

    const signupValidationSchema = Yup.object().shape({
        email: Yup.string().email('email is invalid').required('email is required'),
        name: Yup.string().required('name is required'),
        password: Yup.string().required('password is required').min(6, 'too short').matches(/[a-z]/, 'password must contain lowercase letter').matches(/[A-Z]/, 'password must contain uppercase letter').matches(/[0-9]/, 'password must contain a number').matches(/\W/, 'password must contain special symbol'),
        cpassword: Yup.string().required('confirm password is required').oneOf([Yup.ref('password'), null], 'password must match')
    })

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            website: ''
        },
        onSubmit: (values, { resetForm }) => {
            setTimeout(() => {
                console.log(values);
                resetForm();
            }, 2000)
        },
        validationSchema: signupValidationSchema
    })
    return (
        <>
            <div className="hero md:justify-end  w-full ">
                <div className="hero-content mr-20 w-full">


                    <div className="card shrink-0 shadow-2xl bg-slate-500 opacity-75 hover:opacity-100 ">
                        <form onSubmit={signupForm.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Brand Name</span>
                                </label>
                                <input type="name" placeholder="Brand Name" id='name' className="input input-bordered " onChange={signupForm.handleChange} value={signupForm.values.name} />
                                {
                                    signupForm.touched.name &&
                                    <small className="text-red-500">{signupForm.errors.name}</small>
                                }

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" id="email"
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.email} required />
                                {
                                    signupForm.touched.email &&
                                    <small className="text-red-500">{signupForm.errors.email}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Create Password</span>
                                </label>
                                <input type="password" placeholder="Create Password" className="input input-bordered" id="password"
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.password} required />
                                {
                                    signupForm.touched.password &&
                                    <small className="text-red-500">{signupForm.errors.password}</small>
                                }
                            </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Confirm Password</span>
                                    </label>
                                    <input type="cpassword" placeholder="Confirm password" className="input input-bordered" id='cpassword' onChange={signupForm.handleChange}
                                        value={signupForm.values.cpassword} required />
                                    {
                                        signupForm.touched.cpassword &&
                                        <small className="text-red-500">{signupForm.errors.cpassword}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Website-Link</span>
                                    </label>
                                    <input type="website" placeholder="Website-Link" className="input input-bordered" id='website' required />
                                </div>
                                <button disabled={signupForm.isSubmitting} type='submit' className="btn btn-primary mt-5">Sign Up</button>
                            </div>
                        </form>
                        <p className='p-3 text-white mx-auto'>Already Registered? <Link className='hover:text-green-600' href='/login'>Login Here</Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default brandSignup