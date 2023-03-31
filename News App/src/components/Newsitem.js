import React from 'react'

const Newsitem = (props)=> {
  
    let {title , description, imageUrl, newsUrl ,author ,date,source} = props;
    return (
      <div>
       <div className="card mx-auto" style={{width: "18rem"}}>
        <div>
        <span class="badge rounded-pill bg-danger" style={{display : "flex",justifyContent:"flex-end",position: "absolute",right:'0'}}>
          
          {source}
    
        </span>
        </div>
       
        <img src={imageUrl===null?"https://s.yimg.com/ny/api/res/1.2/WfQAKwHlGhNfvwguvfnWxw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/42dff8b0-88c6-11ed-bf7f-c4376cdfb292":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btm-sm btn-primary">Read More</a>
            <p class="card-text mt-2"><small class="text-muted">By {author===null?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        </div>
        </div>
      </div>
    )
  
}
export default Newsitem
