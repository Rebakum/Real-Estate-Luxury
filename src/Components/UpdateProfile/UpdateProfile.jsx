import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { register } from "swiper/element";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebaseConfig";



const UpdateProfile = () => {
    const {

        handleSubmit,
        formState: { errors },
    } = useForm();

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        const { fullName, image } = data;
       return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image
        }).then(() => {
            console.log(currentUser)
            navigate('./UserProfile')
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }


    return (
        <div className="flex justify-center items-center  mt-[100px]">



            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-200 p-10 border-2 border-sky-500 " data-aos="fade-up" data-aos-delay="300" >
                <h1 className="text-4xl font-bold text-center text-blue-950">UPDATE  PROFILE</h1>


                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control" data-aos="fade-up" data-aos-delay="600">
                        <label className="label">
                            <span className="label-text text-xl ">Name:</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered outline-none border-none text-xl"  {...register("FullName", { required: true })} />
                    </div>

                    <div className="form-control" data-aos="fade-up" data-aos-delay="900">
                        <label className="label">
                            <span className="label-text text-xl">Photo URL:</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered outline-none text-xl border-none"  {...register("FullName", { required: true })} />

                    </div>

                    <div className="form-control mt-6" data-aos="fade-up" data-aos-delay="1200">
                        <Link to='/UserProfile'>
                            <button className="btn bg-blue-950 text-white text-xl">Update Now</button>
                        </Link>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default UpdateProfile;