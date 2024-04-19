'use client';
import React, { useState } from 'react'
import './page.css'
import { useFormik } from 'formik';

import Link from 'next/link';

import { enqueueSnackbar } from 'notistack';


const CampaignForm = () => {

    const [campaign, setCampaign] = useState([]);

    const uploadImage = async (e) => {
        const file = e.target.value[0];
        setCampaign(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file upload");
                enqueueSnackbar("image uploaded successfully", { variant: "success" })
            }
        });
    }

    const campainForm = useFormik({
        initialValues: {
            name: '',
            title: '',
            description: '',
            coverImage: '',
            incentive: ''
        },
        onSubmit: async (values, { resetForm }) => {

            values.coverImage = campaign.name;
            setTimeout(() => {
                console.log(values);

                resetForm();
            }, 2000)



            const res = await fetch("http://localhost:5000/campaign/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar("campaign added successfully", { variant: "success" })

            } else {
                enqueueSnackbar("something went worng", { variant: "warning" })
            }
        },

    })
    return (
        <>
            <div className="hero min-h-screen md:justify-end ">
                <div className="hero-content mr-48 w-full">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200   ">
                        <form onSubmit={campainForm.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Brand-Name</span>
                                </label>
                                <input type="name" placeholder="Brand-Name" id='name' className="input input-bordered" onChange={campainForm.handleChange} value={campainForm.values.name} />
                                {
                                    campainForm.touched.name &&
                                    <small className="text-red-500">{campainForm.errors.name}</small>
                                }

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Title</span>
                                </label>
                                <input type="text" placeholder="Title" className="input input-bordered" id="title"
                                    onChange={campainForm.handleChange}
                                    value={campainForm.values.title} required />
                                {
                                    campainForm.touched.title &&
                                    <small className="text-red-500">{campainForm.errors.title}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Description</span>
                                </label>
                                <input type="text" placeholder="Description" className="input input-bordered" id="description"
                                    onChange={campainForm.handleChange}
                                    value={campainForm.values.description} required />
                                {
                                    campainForm.touched.description &&
                                    <small className="text-red-500">{campainForm.errors.description}</small>
                                }
                            </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Upload Campaign</span>
                                    </label>
                                    <input type="file" placeholder="Upload Campaign" className="file-input input-bordered file-input-accent" onChange={uploadImage} required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Incentive</span>
                                    </label>
                                    <input type="text" placeholder="Incentive" className="input input-bordered" id='incentive'
                                        value={campainForm.values.incentive}
                                        onChange={campainForm.handleChange} required />
                                    {
                                        campainForm.touched.incentive &&
                                        <small className="text-red-500">{campainForm.errors.incentive}</small>
                                    }
                                </div>
                                <button disabled={campainForm.isSubmitting} type='submit' className="btn btn-primary mt-5 text-white">Uploade Campaign</button>
                            </div>
                        </form>
                        <p className='p-3  mx-auto'>Already Registered? <Link className='hover:text-green-600' href='/login'>Login Here</Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CampaignForm