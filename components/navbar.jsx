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
            <Link href="/signUp"><button className="btn btn-primary mr-5 float-right">SignUp</button></Link> 
           <Link href="/login"><button className="btn  btn-light float-right mr-3">Login</button></Link> 
        </div>
    </div>
</div>
);
}
export default Navbar;