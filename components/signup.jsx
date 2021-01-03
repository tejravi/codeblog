import React from 'react';
import {  useRouter } from 'next/router'
import { useState } from "react";
import { useCookies } from "react-cookie";

function Signup(){
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

const addNewUser=async(name,userName,password)=>{
   const data= await  fetch('/api/signup', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({name:name, userName:userName,password:password}),
     });
     return data.json();
}
const addCookieToUser=(userName)=>{
  try {
 setCookie("user", userName, {
   path: "/",
   maxAge: 3600, // Expires after 1hr
   sameSite: true,
 });
} catch (err) {
 console.error(err);
}
}
const handleSubmit=async(form)=>{
       form.preventDefault();
       let password = await encryptPassword(form.target[2].value);
       const response =await addNewUser(form.target[0].value,form.target[1].value,password.password);
       console.log(response)
       response.addUser?addCookieToUser(form.target[1].value):null;
       response.addUser?router.push('/'+form.target[1].value):setStatus("Username already exists");
}
   const handleChange=()=>{
       setStatus("");
   }
 return(
    <React.Fragment>
        <div className="container mt-4 p-5">
        <h1 className="mb-4">Signup  <span  className="text-primary">CODE BLOG</span></h1>
        <h6 className="text-danger">{status}</h6>
        <form method="POST" onSubmit={handleSubmit} onChange={handleChange}>
            <div className="form-group">
                <input type="text" placeholder="Enter your Name" className="form-control w-75" name="name" autoComplete="off" id="name" required></input>
            </div>
            <div className="form-group">
                <input type="email" placeholder="Enter your Email" className="form-control w-75" autoComplete="off" name="userName" id="userName" required></input>
             </div>
            <div className="form-group">
                 <input type="password" placeholder="Enter your password" className="form-control w-75" name="password" id="password" required></input>
            </div>
            <button type="submit" className="btn btn-primary m-3">Signup</button>
            <a href="/" className="btn btn-danger mt-1 ">Cancel </a>
        </form>
    </div>
    </React.Fragment>
     )
       
}
export default Signup;