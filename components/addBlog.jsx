import {  useRouter } from 'next/router'

function AddBlog(){

    const router = useRouter();
    const addBlog=async(title,description)=>{
    const data= await  fetch('/api/addblog', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({title:title, description:description,date:new Date()}),
     });
     return data.json();
}

const handleSubmit=async(form)=>{
       form.preventDefault();
       const response =await addBlog(form.target[0].value,form.target[1].value);
       response.addBlog?router.push('/'+response.user):null;
}


    return(
        <div className="container mt-3 mb-2">
        <h1 className="mb-3">Add New <span className="text-primary">CODE BLOG</span></h1>
        <form className="form-control bg-light" method="POST" onSubmit={handleSubmit}>
            <input type="text"className="form-control" name="title" required placeholder="Enter title Name"
                autoComplete="off"/><br/>
            <textarea id="w3review" className="form-control" name="description" rows="7" cols="70"
                placeholder="Enter Description"></textarea><br/>
            <input type="submit" className="form-control btn-primary"/>
        </form>

    </div>
    )
}
export default AddBlog;