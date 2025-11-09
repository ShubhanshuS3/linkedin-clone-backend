## ⚙️ BACKEND — `linkedin-clone-backend/README.md`
```markdown
# LinkedIn Clone - Backend

This is the **backend** of the LinkedIn Clone project.  
It provides RESTful APIs for user authentication, post creation, and fetching public feeds.

Built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Live Demo
🔗 **Backend API (Deployed on Render):** [https://linkedin-clone-backend.onrender.com](https://linkedin-clone-backend.onrender.com)

---

## 🧩 Features
- User registration and login (JWT-based authentication)
- Create and view posts
- Public feed with latest posts first
- MongoDB database integration
- Secure password hashing using bcrypt
- Cross-Origin support for frontend requests (CORS)

---

## 🧠 Tech Stack
- **Node.js** + **Express.js**
- **MongoDB Atlas**
- **Mongoose ODM**
- **JWT** for authentication
- **bcryptjs** for password encryption
- **dotenv** for environment variables
- **CORS** for frontend connection

---

## ⚙️ Environment Variables
Create a `.env` file inside your backend directory with the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/linkedin_clone?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
⚠️ Make sure .env is added to .gitignore to keep credentials safe.

🏗️ Installation & Setup
bash
Copy code
# 1. Clone the repository
git clone https://github.com/<your-username>/linkedin-clone-backend.git

# 2. Move into the folder
cd linkedin-clone-backend

# 3. Install dependencies
npm install

# 4. Run in development
npm run dev
📁 Folder Structure
bash
Copy code
backend/
 ├── server.js         # Entry point
 ├── models/           # Mongoose schemas
 ├── routes/           # Express routes
 ├── controllers/      # Route handlers
 ├── middleware/       # Auth middleware
 ├── config/           # Database connection
 ├── .env              # Environment variables (ignored)
 └── package.json
🧪 Example API Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get token
POST	/api/posts	Create new post
GET	/api/posts	Get all posts
