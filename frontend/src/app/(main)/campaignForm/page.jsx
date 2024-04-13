'use client'
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './page.css'


const campaignForm = ({ coverImage, coverTitle, coverDescription }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        // Your submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 img">

            <div className={`transition-opacity duration-700 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="p-8 transition-all transform bg-white shadow-xl rounded-lg scale-95 hover:scale-100">
                    <h2 className="text-2xl font-semibold text-center text-indigo-600">Add Campaign</h2>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="mt-8 space-y-3">
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Brand</label>
                                    <Field
                                        id="brand"
                                        name="name"
                                        type="text"
                                        placeholder="Brand"
                                        className="mt-1 input input-bordered input-xs w-full max-w-xs"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</label>
                                    <Field
                                        id="title"
                                        name="title"
                                        type="name"
                                        placeholder="Title"
                                        className="mt-1 input input-bordered input-sm w-full max-w-xs"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Description</label>
                                    <Field
                                        id="description"
                                        name="description"
                                        type="text"
                                        placeholder="description"
                                        className="textarea textarea-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Choose file</label>
                                    <Field
                                        id="file"
                                        name="file"
                                        type="file"

                                        className="file-input file-input-bordered file-input-xs w-full max-w-xs "
                                    />
                                </div>
                                <div>
                                    <label htmlFor="incentive" className="block text-sm font-medium text-gray-700">Incentive</label>
                                    <Field
                                        id="incentive"
                                        name="incentive"
                                        type="number"
                                        placeholder="incentive"
                                        className="mt-1 w-full rounded-md input input-bordered input-xs max-w-xs shadow-sm  sm:text-sm"
                                    />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 7.414V14a1 1 0 11-2 0V7.414L7.707 9.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 5zm-8 9a1 1 0 100-2h16a1 1 0 100 2H2z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {isSubmitting ? 'Submitting...' : 'Sign In'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default campaignForm;
