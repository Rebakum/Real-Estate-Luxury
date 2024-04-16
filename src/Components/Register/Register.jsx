
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {  toast } from 'react-toastify';

import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";



const Register = () => {
  const passwordChecker= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/

    const {createUser} = useContext(AuthContext);
    
    //navigation sistem
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) =>{
        
        const {email, password}= data;
        if(passwordChecker.test(password)){
          createUser(email, password)
          .then(result=>{
            console.log(result)
            toast.success('Register Success')          
            
          })
        }else{
          
          toast.warn('Invalid email or password')
        }
      
       
        };
   
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" name="name" className="input input-bordered"  {...register("FullName", { required: true })}  />
                {errors.FullName && <span className="text-red-500">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text"  placeholder="imade URL" name="image" className="input input-bordered" {...register("image")}  />
                {errors.image && <span className="text-red-500">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="emai" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Password" name="password" className="input input-bordered" {...register("password", { required: true })}  />
                {errors.password && <span className="text-red-500">This field is required</span>}

                
              </div>
              <div className="form-control mt-6">
                <button type="Submit" className="btn btn-primary">Register</button>
              </div>

              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
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