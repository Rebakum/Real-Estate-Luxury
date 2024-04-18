
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';

import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";



const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const passwordChecker = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/

  const { createUser, updateUserProfile, setCurrentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigation sistem
  const navigate = useNavigate();



  const from = '/'

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;
    console.log(name, photo)
    if (passwordChecker.test(password)) {


      createUser(email, password)
        .then(result => {
          if (result.user) {
           
            updateProfile(result.user, {
              displayName: name,
              photoURL: photo
            })
              .then(() => {
                setCurrentUser({
                  displayName: name,
                  photoURL: photo
                })
                navigate(from)

                toast.success(' Yeah You have registered successfully ')

              })
          }

        })


    }
    else {
      toast.warn('Failed to create user')

    }


  };

  return (

    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div  className="flex justify-center items-center mt-[100px]" data-aos="fade-up" data-aos-delay="300">

     

      <div className="card shrink-0 w-full max-w-screen-md shadow-2xl p-10  bg-base-100 border border-blue-500">
        <h1 className="text-center text-5xl font-bold text-blue-950">Register Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

          <div className="form-control text-xl">
            <label className="label">
              <span className="label-text text-xl">Full Name</span>
            </label>
            <input type="text" placeholder="Full Name" name="name" className="input input-bordered text-xl"  {...register("name", { required: true })} />
            {errors.FullName && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Photo</span>
            </label>
            <input type="text" placeholder="imade URL" name="photo" className="input input-bordered text-xl" {...register("photo")} />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input type="email" placeholder="Email" name="emai" className="input input-bordered text-xl" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" className="input input-bordered text-xl" {...register("password", { required: true })} />
            {errors.password && <span className="text-red-500">This field is required</span>}

            <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2/3 right-10'>
              {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }
            </span>


          </div>
          <div className="form-control mt-6">

            <button type="Submit" className="btn btn-primary text-xl">Register</button>

          </div>

          <label className="label flex justify-center items-center text-xl">
            Your have an account?{" "}
            <Link to="/login" className="label-text-alt link link-hover text-xl text-blue-950">
              Please Login
            </Link>
          </label>
        </form>
      </div>
    </div>
    </div>

  );
};

export default Register;