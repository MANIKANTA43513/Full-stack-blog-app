import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function BlogDetail(){
const {id}=useParams();
const nav=useNavigate();
const [blog,setBlog]=useState(null);

useEffect(()=>{
axios.get(`https://full-stack-blog-app-e02q.onrender.com/api/blogs/${id}`).then(res=>setBlog(res.data));
},[id]);

const deletePost=async()=>{
await axios.delete(`https://full-stack-blog-app-e02q.onrender.com/api/blogs/${id}`)
nav('/');
};

if(!blog) return null;

return(
<div className="container">
<h1>{blog.title}</h1>
<p>{blog.content}</p>
<button onClick={()=>nav(`/edit/${id}`)}>Edit</button>
<button onClick={deletePost} style={{marginLeft:'10px'}}>Delete</button>
</div>
)
}