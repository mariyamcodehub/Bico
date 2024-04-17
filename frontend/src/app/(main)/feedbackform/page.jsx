'use client';
import React from 'react'

import { useFormik } from 'formik';
import './page.css'

import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

const feedbackform = () => {

    const router = useRouter();



    const feedbackform = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async (values, { resetForm }) => {


            setTimeout(() => {
                console.log(values);
                resetForm();
            }, 2000)

            const res = await fetch("http://localhost:5000/user/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar("user addedsuccessfully", { variant: "success" })
                router.push("/about")
            } else {
                enqueueSnackbar("somthing went worng", { variant: "warning" })
            }
        },

    })
    return (
        <>
            <div className="hero bg min-h-screen md:justify-end ">
                <div className="hero-content  mr-48 w-full">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 ">
                        <form onSubmit={feedbackform.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="name" placeholder="Name" id='username' className="input input-bordered" onChange={feedbackform.handleChange} value={feedbackform.values.username} />
                                {
                                    feedbackform.touched.username &&
                                    <small className="text-red-500">{feedbackform.errors.username}</small>
                                }

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" id="email"
                                    onChange={feedbackform.handleChange}
                                    value={feedbackform.values.email} required />
                                {
                                    feedbackform.touched.email &&
                                    <small className="text-red-500">{feedbackform.errors.email}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Message</span>
                                </label>
                                <input type="text" placeholder="Write your message" className="textarea textarea-info textarea-lg" id="message"
                                    onChange={feedbackform.handleChange}
                                    value={feedbackform.values.message} required />

                            </div>
                            <div className="text-center my-2">
                                <button className='btn btn-primary'>Send</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default feedbackform;