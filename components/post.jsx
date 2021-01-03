
const Post=(props)=>{
    return(
        <div className="container-fluid bg-light mt-3 mb-3" key={props.id}>
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                 <h6>{props.userName}</h6>
                <h6><small>{props.date}</small></h6>
                </div>
                <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.data}</p>
                    <a href={props.id} className="btn btn-primary">Like</a>
                    <button href={props.id} className="btn btn-danger ml-3">Dislike</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Post;