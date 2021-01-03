import {  useRouter } from 'next/router'
import Link from 'next/link';
const UserPost=(props)=>{
    const router = useRouter();
    
const handleDelete=async(event)=>{
    const data= await  fetch('/api/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:event.target.id}),
      });
      const response = await data.json();
      response.user?router.push('/'+props.userName):null;
}

    return(
        <div className="container-fluid bg-light mt-3 mb-3" key={props.id}>
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h6>{props.title}</h6>
                    <h6><small>{props.date}</small></h6>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.data}</p>
                    <Link href={"/editblog/"+props.id}><a className="btn btn-primary">Edit</a></Link>
                    <a onClick={handleDelete} id={props.id} className="btn btn-danger ml-2">Delete</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default UserPost;