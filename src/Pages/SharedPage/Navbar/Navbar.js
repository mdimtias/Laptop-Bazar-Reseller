import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = (e)=>{
    e.preventDefault();
    logOut()
    .then(()=>{
      toast.success("Successfully log out")
    })
    .catch(error=>console.log(error.message))
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Second Hand</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/" className='px-2'>{user?.displayName || user?.email}</Link>
   {user?.email ?  <Link to="/" className="btn px-2"><button onClick={handleLogOut}>Log Out</button></Link> :
   <>
    <Link to="/login" className="btn m-2">Login</Link>
    <Link to="/signup" className="btn m-2">Sign Up</Link>
   </>
   }
    {user?.photoURL ? <div className="avatar px-2"><div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"><img src={user?.photoURL} alt="" /></div></div> : <></>}
  </div>
  <label tabIndex={1}  htmlFor="dashboard-drawer"  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Navbar;