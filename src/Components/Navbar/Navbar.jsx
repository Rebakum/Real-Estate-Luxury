import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import {FaUser } from "react-icons/fa";
import homeImg from "../../assets/images/home.jpg";



const Navbar = () => {
  const { logOut, currentUser } = useContext(AuthContext);

  const navLinks =
    <>
      <li className="mr-5 text-xl text-cyan-950 font-semibold"><NavLink to='/'>Home</NavLink></li>
      <li className="mr-5 text-xl text-cyan-950 font-semibold"><NavLink to='/userProfile'>User Profile</NavLink></li>
      <li className="mr-5 text-xl text-cyan-950 font-semibold"><NavLink to='/updateProfile'>Update Profile</NavLink></li>
      <li className="mr-5 text-xl text-cyan-950 font-semibold"><NavLink to='/gallery'>Gallery</NavLink></li>
      <li className="mr-5 text-xl text-cyan-950 font-semibold"><NavLink to='/about'>About</NavLink></li>
    </>
    console.log(currentUser)

  return (
    
    <div className="navbar bg-base-100 fixed z-10 h-18 top-0 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <img className="w-20 h-20" src={homeImg} alt="" />
       
        <a className="btn btn-ghost text-3xl text-orange-900 font-bold"> Luxury</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          currentUser?
            <div className='flex justify-center items-center gap-3'>
              <div className="tooltip tooltip-bottom" data-tip={`${currentUser?.displayName}`}>
                <div className="flex justify-center items-center">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full flex justify-center items-center">
                      {
                        
                          <img alt="user photo" src={currentUser?.photoURL} />
                      }
                    </div>
                  </div>

                </div>
              </div>
              <button
               onClick={logOut}
                className='btn btn-ghost text-xl text-cyan-950 font-semibold'>Log Out</button>
            </div>
            :
            <Link to={"/login"} className='tooltip-top btn btn-ghost text-xl font-semibold text-cyan-950 '>Login</Link>
        }
      </div>
    </div>

      
   
  );
};

export default Navbar;
