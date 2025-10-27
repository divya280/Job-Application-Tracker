# Job Application Tracker

A full-stack job application tracker built with **React, Express, MongoDB**, and **Node.js**.  
It allows users to sign up, log in, and manage job applications with CRUD operations.

---

## Features

- User authentication (signup & login) with JWT
- Add, edit, delete, and view job applications
- Each user sees only their own applications
- Dashboard with job cards and details
- Responsive UI with Tailwind CSS
- MongoDB backend for persistent storage

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, Vite  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Authentication:** JWT, bcryptjs  
- **Deployment:** Vercel (frontend & backend)

---

## Steps to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/divya280/Job-Application-Tracker.git
   cd Job-Application-Tracker

2. **Backend Setup**
    cd backend
    npm install

    Create a .env file with the following:
    ```
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    ```
3. **Frontend Setup**
    cd frontend
    npm install

    Create a .env file with the following:

    ````
    VITE_API_URL=http://localhost:5000/api
    ````
4. **Open the App**

Visit http://localhost:5173 in your browser.

## API Endpoints

### Auth
| Method | Endpoint| Description|

| POST   | /api/auth/signup  | Register a new user|
| POST   | /api/auth/login   | Login and get JWT token|

### Job Applications
| Method | Endpoint | Description|

| GET    | /api/applications            | Get all jobs for the user    |
| POST   | /api/applications            | Create a new job application |
| GET    | /api/applications/:id        | Get a single job             |
| PUT    | /api/applications/:id        | Update a job                 |
| DELETE | /api/applications/:id        | Delete a job                 |
