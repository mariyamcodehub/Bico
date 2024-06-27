// BrandLoginForm.js
'use client'
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { BrandAuthContext } from '@/context/BrandAuthContext';

const BrandLoginForm = () => {
  const router = useRouter();
  const { login } = useContext(BrandAuthContext);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch("http://localhost:5000/brand/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.status === 200) {
        const data = await res.json();
        login(data.token); // Store token in context and local storage
        enqueueSnackbar("Brand manager logged in successfully", { variant: "success" });
        resetForm();
        router.push("/");
      } else {
        enqueueSnackbar("Invalid credentials", { variant: "error" });
      }
    },
  });

  return (
    <div className="hero min-h-screen md:justify-end">
      <div className="hero-content mr-48 w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 opacity-75 hover:opacity-100">
          <form onSubmit={loginForm.handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                id="email"
                name="email"
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                value={loginForm.values.email}
                required
              />
              {loginForm.touched.email && loginForm.errors.email ? (
                <small className="text-red-500">{loginForm.errors.email}</small>
              ) : null}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                id="password"
                name="password"
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                value={loginForm.values.password}
                required
              />
              {loginForm.touched.password && loginForm.errors.password ? (
                <small className="text-red-500">{loginForm.errors.password}</small>
              ) : null}
            </div>
            <div className="text-center my-2">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandLoginForm;