import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser?.photoURL)
    return (
        <div className="flex justify-center items-center  mt-[100px]">

            <div className="card shrink-0 w-full  max-w-md shadow-2xl bg-base-200 p-10 border-2 border-sky-500 " data-aos="fade-up" data-aos-delay="200">
                <h1 className="text-4xl font-bold text-center mb-10 text-blue-950">YOUR PROFILE</h1>

                <div className="min-w-40 h-40 rounded-full flex justify-center items-center text-center mx-auto" data-aos="fade-up" data-aos-delay="400">
                    <img className="min-w-40 h-40 rounded-full" src={currentUser?.photoURL || "https://images.freeimages.com/images/large-previews/c0d/gerbera-series-1-1486599.jpg"} alt="" />
                </div>
                <div className="flex justify-center items-center gap-2 flex-col" >
                    <p className="text-center text-3xl text-slate-950" data-aos="fade-up" data-aos-delay="800">{currentUser?.displayName
                        || 'user Name is not found'} </p>

                    <Link to='/updateProfile'>
                        <button className="btn bg-blue-950 text-white tex-xl " data-aos="fade-up" data-aos-delay="1000">Edit</button>
                    </Link>
                </div>
            </div>


        </div >
    );
};

export default UserProfile;