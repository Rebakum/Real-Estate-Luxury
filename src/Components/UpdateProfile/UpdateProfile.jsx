
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {

    const navigate = useNavigate()
    const redirect = () => {
        window.location.reload()


    }

    const handelUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(name, photo)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                setTimeout(redirect, 0)
                navigate('/userProfile')
            })

    }

    return (
        <div className="flex justify-center items-center  mt-[100px]">



            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-200 p-10 border-2 border-sky-500 " data-aos="fade-up" data-aos-delay="300" >
                <h1 className="text-4xl font-bold text-center text-blue-950">UPDATE  PROFILE</h1>


                <form onSubmit={handelUpdate} className="card-body">

                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text text-xl ">Name:</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered outline-none border-none text-xl" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo URL:</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered outline-none text-xl border-none" />

                    </div>

                    <div className="form-control mt-6" data-aos="fade-up" data-aos-delay="1200">

                        <button className="btn bg-blue-950 text-white text-xl">Update Now</button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default UpdateProfile;










































