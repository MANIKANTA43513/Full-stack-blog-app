import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function BlogList(){
const [blogs,setBlogs]=useState([]);
const nav=useNavigate();

useEffect(()=>{
axios.get("https://full-stack-blog-app-e02q.onrender.com/api/blogs").then(res=>setBlogs(res.data));
},[]);

return(
<div className="container">
<h1>Latest Posts</h1>
{blogs.map(b=>(
<div key={b.id} style={{marginBottom:'30px'}}>
<div className="blog-title" onClick={()=>nav(`/blog/${b.id}`)}>{b.title}</div>
<p>{b.content.slice(0,120)}...</p>
<small>{b.author}</small>
</div>
))}
</div>
)
}