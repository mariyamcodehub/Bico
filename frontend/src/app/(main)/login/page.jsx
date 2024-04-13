'use client'

import './page.css'
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
const Login = () => {

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
    <>

      <div className="hero min-h-screen bg-blend-luminosity">
        <div className="flex items-center justify-center bg-transparent">
          <div className={`transition-opacity duration-700 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-8 transition-all transform bg-transparent  shadow-2xl rounded-lg scale-95 hover:scale-100">
              <h2 className="text-2xl font-semibold text-center text-white">Login</h2>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-8 space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 5a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 7.414V14a1 1 0 11-2 0V7.414L7.707 9.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 5zm-8 9a1 1 0 100-2h16a1 1 0 100 2H2z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {isSubmitting ? 'Submitting...' : 'Login'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Login;