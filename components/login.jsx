import React from 'react';
import {  useRouter } from 'next/router'
import { useState } from "react";
import { useCookies } from "react-cookie";

function Login() {

     const [status,setStatus]=useState("");
     const router = useRouter();
     const [cookie, setCookie] = useCookies(["user"]);


    const encryptPassword=async(password)=>{
    password= await  fetch('/api/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({password:password}),
      });
      return password.json();
}

const authenticateUser=async(userName,password)=>{
    const data= await  fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName:userName,password:password}),
      });
      return data.json();
}
const addCookieToUser=(userName)=>{
   try {
  setCookie("user", userName, {
    path: "/",
    maxAge: 3600, 
    sameSite: true,
  });
} catch (err) {
  console.error(err);
}
}
const handleSubmit=async(form)=>{
        form.preventDefault();
        let password = await encryptPassword(form.target[1].value);
        const response =await authenticateUser(form.target[0].value,password.password);
        response.user?addCookieToUser(form.target[0].value):null;
        response.user?router.push('/'+form.target[0].value):setStatus("Username or password is incorrect");
 }
    const handleChange=()=>{
        setStatus("");
    }
     return(
        <React.Fragment>
            <div className="container mt-4 p-5">
            <h1 className="mb-4">Login <span  className="text-primary">CODE BLOG</span></h1>
            <h6 className="text-danger">{status}</h6>
            <form  onSubmit={handleSubmit} onChange={handleChange}  method="POST">
            <div className="form-group">
            <input type="email" className="form-control w-75" placeholder="Enter your Email" name="userName" id="email" required autoComplete="on"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control w-75" placeholder="Enter your password" name="password" id="password" required></input>
            </div>
            <button type="submit" className="btn btn-primary m-3">Login</button>
            <a href="/" className="btn btn-danger mt-1">Cancel </a>
            </form>
        </div>
        </React.Fragment>
     );

}

export default Login;