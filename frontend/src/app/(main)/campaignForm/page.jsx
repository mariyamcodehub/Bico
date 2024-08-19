'use client';
import React from 'react';
import './page.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';


const CampaignForm = () => {

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        console.log(file);
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file upload");
                campainForm.setFieldValue('image', file.name);
                enqueueSnackbar("image uploaded successfully", { variant: "success" })
            }
        });
    }

    const campainForm = useFormik({
        initialValues: {
            name: '',
            title: '',
            description: '',
            image: '',
            incentive: '',

        },
        onSubmit: async (values, { resetForm }) => {

            // setTimeout(() => {
            //     console.log(values);
            //     resetForm();
            // }, 2000)

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
                resetForm();
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
                                    <span className="label-text ">Title</span>
                                </label>
                                <input type="text" placeholder="Title" className="input input-bordered" id="title"
                                    onChange={campainForm.handleChange}
                                    value={campainForm.values.title} required />

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Required-Follower</span>
                                    </label>
                                    <input type="name" placeholder="Brand-Name" id='name' className="input input-bordered" onChange={campainForm.handleChange} value={campainForm.values.name} />


                                </div>
                            </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Upload Image</span>
                                    </label>
                                    <input type="file" placeholder="Upload Campaign" id='image' className="file-input input-bordered file-input-accent" onChange={uploadImage} required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Incentive</span>
                                    </label>
                                    <input type="text" placeholder="Incentive" className="input input-bordered" id='incentive'
                                        value={campainForm.values.incentive}
                                        onChange={campainForm.handleChange} required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Description</span>
                                    </label>
                                    <textarea type="text" placeholder="Description" className="textarea textarea-bordered textarea-sm w-full max-w-xs" id="description"

                                        onChange={campainForm.handleChange}
                                        value={campainForm.values.description} required />

                                </div>
                                <button disabled={campainForm.isSubmitting} type='submit' className="btn btn-outline mt-5 text-white">Upload Campaign</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CampaignForm