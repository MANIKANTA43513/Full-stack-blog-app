📘 Full Stack Blog App
A full-stack blog application built using React (Frontend) and Node.js + Express (Backend) with AI-powered content suggestions.
🚀 Live Demo
Frontend (Vercel):
https://full-stack-blog-app-sigma-one.vercel.app�
Backend (Render):
https://full-stack-blog-app-e02q.onrender.com�
📂 Project Structure
Copy code

root
 ├── frontend  (React)
 └── backend   (Node.js + Express)
🛠 Tech Stack
Frontend
React
React Router
Axios
CSS
Backend
Node.js
Express
CORS
OpenAI API (AI Suggestions)
SQLite (blog.db)
⚙️ Setup Instructions (Local)
1️⃣ Clone Repository
Bash
Copy code
git clone https://github.com/YOUR_USERNAME/Full-stack-blog-app.git
cd Full-stack-blog-app
2️⃣ Backend Setup
Bash
Copy code
cd backend
npm install
Create .env file inside backend folder:
Copy code

PORT=5000
OPENAI_API_KEY=your_openai_key_here
Run backend:
Bash
Copy code
npm start
Backend runs on:
Copy code

http://localhost:5000
3️⃣ Frontend Setup
Bash
Copy code
cd frontend
npm install
npm start
Frontend runs on:
Copy code

http://localhost:3000
🧠 AI Integration Explanation
When user clicks Generate AI
Frontend sends request to:
Copy code

/api/ai-suggestions
Backend calls OpenAI API
Returns blog content suggestions
Suggestions auto-fill into content field
📡 API Documentation
🔹 Get All Blogs
Copy code

GET /api/blogs
🔹 Get Blog by ID
Copy code

GET /api/blogs/:id
🔹 Create Blog
Copy code

POST /api/blogs
Body:
{
  "title": "",
  "author": "",
  "content": ""
}
🔹 Update Blog
Copy code

PUT /api/blogs/:id
🔹 Delete Blog
Copy code

DELETE /api/blogs/:id
🔹 AI Suggestions
Copy code

POST /api/ai-suggestions
Body:
{
  "title": "",
  "content": ""
}
🗄 Database Schema
SQLite Table: blogs
Field
Type
id
INTEGER (Primary Key)
title
TEXT
author
TEXT
content
TEXT
created_at
DATETIME
updated_at
DATETIME
🌍 Deployment Details
Backend Deployment
Platform: Render
Type: Web Service
Environment Variables:
PORT
OPENAI_API_KEY
Frontend Deployment
Platform: Vercel
Root Directory: frontend
Build Command: npm run build
Output Directory: build
Environment Variable:
REACT_APP_API_URL = Render Backend URL
📸 Sample Screens
✔ Blog Listing Page
✔ Blog Detail Page
✔ Write New Blog Page
✔ AI Generate Feature Working
🎯 Features
Create Blog
Edit Blog
Delete Blog
AI Content Suggestions
REST API
Production Deployment
Clean UI
👨‍💻 Author
Manikanta
✅ Deliverables Covered
✔ GitHub repo with frontend & backend
✔ .env.example file
✔ README with setup instructions
✔ API documentation
✔ Database schema explanation
✔ AI integration explanation
✔ Deployment (Render + Vercel)
