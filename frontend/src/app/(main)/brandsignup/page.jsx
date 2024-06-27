'use client'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './page.css'
import { enqueueSnackbar } from 'notistack';

const brandSignup = () => {

  const router = useRouter();

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('email is invalid').required('email is required'),
    name: Yup.string().required('name is required'),
    password: Yup.string().required('password is required').min(6, 'too short').matches(/[a-z]/, 'password must contain lowercase letter').matches(/[A-Z]/, 'password must contain uppercase letter').matches(/[0-9]/, 'password must contain a number').matches(/\W/, 'password must contain special symbol'),
    cpassword: Yup.string().required('confirm password is required').oneOf([Yup.ref('password'), null], 'password must match')
  })


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    // console.log(file);
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file upload");
        signupForm.setFieldValue('image', file.name);
        enqueueSnackbar("image uploaded successfully", { variant: "success" })
      }
    });
  }
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      image: '',
      website: ''
    },
    onSubmit: async (values, { resetForm }) => {


      // setTimeout(() => {
      //   console.log(values);
      //   resetForm();
      // }, 2000)

      const res = await fetch("http://localhost:5000/brand/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar("user addedsuccessfully", { variant: "success" })
        router.push("/login")
      } else {
        enqueueSnackbar("somthing went worng", { variant: "warning" })
      }
    },
    validationSchema: signupValidationSchema
  })
  return (
    <>
      <div className="hero md:justify-end   ">
        <div className="hero-content mr-20 ">


          <div className="card w-full shadow-2xl bg-base-100 ">
            <form onSubmit={signupForm.handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="title text-sky-800 font-semibold  ">Brand Name</span>
                </label>
                <input type="name" placeholder="Brand Name" id='name' className="input bg-slate-100 " onChange={signupForm.handleChange} value={signupForm.values.name} />
                {
                  signupForm.touched.name &&
                  <small className="text-red-500">{signupForm.errors.name}</small>
                }

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title text-sky-800 font-semibold  ">Email</span>
                </label>
                <input type="email" placeholder="email" className="input bg-slate-100" id="email"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.email} required />
                {
                  signupForm.touched.email &&
                  <small className="text-red-500">{signupForm.errors.email}</small>
                }
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title font-semibold text-sky-800  ">Create Password</span>
                </label>
                <input type="password" placeholder="Create Password" className="input bg-slate-100" id="password"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password} required />
                {
                  signupForm.touched.password &&
                  <small className="text-red-500">{signupForm.errors.password}</small>
                }
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="title text-sky-800 font-semibold  ">Confirm Password</span>
                </label>
                <input type="cpassword" placeholder="Confirm password" className="input bg-slate-100" id='cpassword' onChange={signupForm.handleChange}
                  value={signupForm.values.cpassword} required />
                {
                  signupForm.touched.cpassword &&
                  <small className="text-red-500">{signupForm.errors.cpassword}</small>
                }
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="title text-sky-800 font-semibold  ">Profile Image</span>
                </label>
                <input type="file" placeholder="Brand logo" className="input bg-slate-100" id='image' onChange={uploadImage} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="title text-sky-800 font-semibold  ">Website-Link</span>
                </label>
                <input type="website" placeholder="Website-Link" className="input bg-slate-100" id='website' required />
              </div>
              <button disabled={signupForm.isSubmitting} type='submit' className="btn btn-outline mt-5">Sign Up</button>

            </form>
            <p className='p-3  mx-auto'>Already Registered? <Link className='hover:text-green-600' href='/login'>Login Here</Link></p>
          </div>
        </div>

      </div>
    </>
  )
}


export default brandSignup
