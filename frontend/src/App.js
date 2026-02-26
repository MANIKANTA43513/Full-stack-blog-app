import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import WriteBlog from './components/WriteBlog';
import './styles.css';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList/>}/>
        <Route path="/blog/:id" element={<BlogDetail/>}/>
        <Route path="/write" element={<WriteBlog/>}/>
        <Route path="/edit/:id" element={<WriteBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}