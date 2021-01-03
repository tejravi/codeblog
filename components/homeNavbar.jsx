import Link from 'next/link';

const Navbar=(props)=>{
return(
    <div className="container-fluid bg-dark  sticky-top mt-0  p-2 ">
    <div className="row">
        <div className="col-sm-3">
            <h2 className="text-light float-right">
                Code Blog
            </h2>
        </div>
        <div className="col-sm-9">
            <input type="text" className="form-control w-50 d-inline float-left" placeholder="search..." />
            <Link href="/"><button className="btn btn-danger mr-5 float-right">Logout</button></Link> 
           <Link href="/addblog"><button className="btn  btn-primary float-right mr-3">Write Post</button></Link> 
<Link href={props.link}><button className="btn  btn-primary float-right mr-3">{props.post}</button></Link> 
        </div>
    </div>
</div>
);
}
export default Navbar;