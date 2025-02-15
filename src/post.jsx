import React, { useEffect, useState } from 'react'

const Post = () => {
    const[posts,setposts] = useState(null);
    console.log(posts);
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"GET",
       }) 
       .then((res)=>res.json())
       .then((data)=>setposts(data))
       .catch((error)=>console.log(error));
    },[])
  return (
    <div>{posts?.map((item)=><>
    <div>
      {item.id}.{item.title}
    </div>
    </>)}</div>
  )
}

export default Post