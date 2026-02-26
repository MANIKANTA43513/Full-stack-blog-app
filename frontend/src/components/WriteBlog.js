import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function WriteBlog(){
const {id}=useParams();
const nav=useNavigate();
const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [content,setContent]=useState('');
const [suggestions,setSuggestions]=useState([]);

useEffect(()=>{
if(id){
axios.get(`http://localhost:5000/api/blogs/${id}`)
.then(res=>{
setTitle(res.data.title);
setAuthor(res.data.author);
setContent(res.data.content);
});
}
},[id]);

const save=async()=>{
if(id){
await axios.put(`http://localhost:5000/api/blogs/${id}`,{title,author,content});
}else{
await axios.post('http://localhost:5000/api/blogs',{title,author,content});
}
nav('/');
};

const generate=async()=>{
const res=await axios.post('http://localhost:5000/api/ai-suggestions',{title,content});
setSuggestions(res.data.suggestions);
};

return(
<div className="container">
<h1>{id?'Edit Post':'Write a New Post'}</h1>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title"/>
<input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Author"/>
<textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content"/>
<button onClick={save}>Save</button>
<button onClick={generate} style={{marginLeft:'10px'}}>Generate AI</button>
{suggestions.map((s,i)=>(<p key={i}>{s}</p>))}
</div>
)
}