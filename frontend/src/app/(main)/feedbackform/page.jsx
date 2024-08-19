'use client';
import React from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import './feedback.css'

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

            const res = await fetch("http://localhost:5000/feedback/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar("feedback added successfully", { variant: "success" })
                router.push("/about")
            } else {
                enqueueSnackbar("somthing went worng", { variant: "warning" })
            }
        },

    })
    return (
        <>
            <div className="bg-clr md:flex justify-center py-5 hidden" >
                <div className="flex justify-end md:w-8/12 p-3 background" >

                    <div className="card max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={feedbackform.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-teal-600">Name</span>
                                </label>
                                <input type="text" placeholder="Name" id='name' className="input input-bordered bg-sky-100" onChange={feedbackform.handleChange} value={feedbackform.values.name} />
                                {
                                    feedbackform.touched.name &&
                                    <small className="text-red-500">{feedbackform.errors.name}</small>
                                }

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-teal-600">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-sky-100" id="email"
                                    onChange={feedbackform.handleChange}
                                    value={feedbackform.values.email} required />
                                {
                                    feedbackform.touched.email &&
                                    <small className="text-red-500">{feedbackform.errors.email}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-teal-600">Message</span>
                                </label>
                                <input type="text" placeholder="Write your message" className="textarea textarea-info textarea-lg bg-sky-100" id="message"
                                    onChange={feedbackform.handleChange}
                                    value={feedbackform.values.message} required />

                            </div>
                            <div className="text-center my-2">
                                <button className='btn btn-outline'>Send</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default feedbackform;