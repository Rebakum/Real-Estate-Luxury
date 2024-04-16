import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";




const Login = () => {
    const {signInUser} = useContext(AuthContext)
    
    //navigation sistem
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
         console.log(data);
         const {email, password} = data;
         signInUser(email, password)
         .then(result =>{
            if(result.user){
             navigate(from);
            }
  
          })

        }
      
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                   
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="emai" className="input input-bordered"  {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                       </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="Password" className="input input-bordered" {...register("password", { required: true })}/>
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                        </label>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

            </div>
    );
};

export default Login;