import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, user} = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [navigate, user]);
    
    const handleLogIn = (e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(async () => {
             fetch(`http://localhost:5000/users/${email}`,{
                    method: "PUT",
                    headers: {
                      "content-type": "application/json"
                    },
                    body: JSON.stringify({email})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("token", `bearer ${data.token}`)
                })
            toast.success("LogIn Successful")})
        .catch(err=>{
            console.log(err.message)
            toast.error("LogIn Fail")})
    }
    return (
        <div className="d-flex justify-center items-center p-12">
      <form action="" onSubmit={handleLogIn}>
        <div className="p-2">
          <input
          name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="p-2">
          <input
          name="password"
            type="text"
            placeholder="Password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div>
        <button className="btn w-full max-w-xs">Log In</button>
        </div>
      </form>
    </div>
    );
};

export default Login;