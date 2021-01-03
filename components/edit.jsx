import { useState } from "react";
import {  useRouter } from 'next/router'
function EditBlog(props){
    const router = useRouter();
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

   const init=async(event)=>{
    const data= await  fetch('/api/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:event.target.id}),
      });
     const response= await data.json();
    setTitle(response.user[0].title);
    setDescription(response.user[0].data);
   }
   const addBlog=async(id,title,description)=>{
    const data= await  fetch('/api/editdata', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({id:id,title:title, description:description}),
     });
     return data.json();
}

    const handleSubmit=async(form)=>{
        form.preventDefault();
        const response =await addBlog(form.target.id,form.target[2].value,form.target[3].value);
        response.addBlog?router.push('/'+response.user):null;
      
    }
    const handleChange=async(form)=>{
 
    }

    return(
        <div className="container mt-3 mb-2" key={props.id}>
        <h1 className="mb-3">Edit Blog  </h1>
        <form className="form-control bg-light" id={props.id}   onSubmit={handleSubmit}>
            <h6 className="text-primary mb-2" onClick={init} id={props.id}> Click Here to get previous blog</h6>
            <input type="text"className="form-control"id={props.id} readOnly={true}  name="title" value={title} onChange={handleChange} required placeholder="Previous title Name"
                autoComplete="off"/>
            <textarea  className="form-control mt-2"  readOnly={true} name="description" rows="7" cols="70"
              value={description}  placeholder="previous Description"></textarea><br/>
                 <input type="text"className="form-control" name="title"   required placeholder="Enter New title "
                autoComplete="off"/><br/>
                 <textarea  className="form-control"  name="description" rows="7" cols="70"
                placeholder="Enter new Description"></textarea><br/>
            <input type="submit" className="form-control btn-primary"/>
        </form>

    </div>
    )
}
export default EditBlog;