# Talkly — Real-Time Chat Application

Talkly is a full-stack real-time messaging application built with the MERN stack. It allows users to create accounts, authenticate securely, browse other users, and exchange messages through a responsive chat interface.

The application uses Socket.IO to enable real-time communication, MongoDB to persist users and messages, and React to build an interactive user interface.

## Features

- **User Authentication** — Sign up, log in, and log out.
- **Protected Routes** — Restrict access to authenticated users.
- **User Sidebar** — Browse other registered users and select a conversation.
- **Real-Time Messaging** — Send and receive messages using Socket.IO.
- **Persistent Messages** — Store messages in MongoDB.
- **Conversation Management** — Organize conversations between participants.
- **Global State Management** — Manage selected conversations and messages using Zustand.
- **Responsive UI** — Build an interactive interface with React and Tailwind CSS.
- **Profile Information** — Display user details and profile pictures.
- **Production Deployment Support** — Build the frontend and serve the production assets through Express.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- Zustand
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Cookie-based authentication

### Development & Deployment
- npm
- Git and GitHub
- MongoDB Atlas
- Environment variables
- Vite production build

## Project Architecture

The application is organized into separate frontend and backend directories.

```text
Talkly/
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── store/
│   └── package.json
├── .env
├── .gitignore
└── package.json
```

*Note: This is a representative structure. Your actual repository may contain additional files or different folder names.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A MongoDB database, either locally or through MongoDB Atlas
- Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Talkly
```

Replace `<your-repository-url>` with your GitHub repository URL.

### 2. Install Dependencies

Install the root dependencies:

```bash
npm install
```

Install the frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

### 3. Configure Environment Variables

Create a `.env` file in the project root or in the location expected by your backend configuration.

Add the required environment variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Replace the example values with your actual configuration. Make sure the variable names match those used in your source code.

Never commit your `.env` file or expose database credentials and authentication secrets.

### 4. Start the Application

Start the backend using the script configured in your root `package.json`:

```bash
npm run start
```

For frontend development, open another terminal:

```bash
cd frontend
npm run dev
```

Open the local URL displayed by Vite in your terminal.

*Note: The exact script names depend on your `package.json` configuration.*

## Real-Time Messaging Workflow

Talkly combines REST API requests with Socket.IO to support messaging.

1. A user signs in and selects another user from the sidebar.
2. The frontend requests the relevant conversation data from the backend.
3. When a message is sent, the backend processes the request and saves the message to MongoDB.
4. Socket.IO enables real-time communication between connected clients.
5. The frontend updates the conversation without requiring a page refresh.

## Database Design

The application uses MongoDB collections and Mongoose models to organize its data.

**Users**

Stores user account information, authentication data, and profile details.

**Messages**

Each message contains information such as:

- Sender ID
- Receiver ID
- Message content
- Automatically generated document ID

**Conversations**

Each conversation contains:

- Participant IDs
- References to messages belonging to the conversation

This structure keeps messages persistent and associates them with the appropriate participants.

## Security Considerations

- Store sensitive configuration in environment variables.
- Hash passwords before saving them to the database.
- Protect private API routes with authentication middleware.
- Validate incoming request data.
- Configure CORS to allow only trusted frontend origins in production.
- Use HTTPS in production and secure cookie settings.
- Never expose credentials or secrets in your GitHub repository.

## Production Deployment

The application can be configured to serve the built React frontend through Express.

Build the frontend:

```bash
cd frontend
npm run build
```

The production build is typically generated in the `frontend/dist` directory. The backend can serve these static assets and return `index.html` for frontend routes.

Before deployment, configure your production environment variables, MongoDB access, frontend origin, and hosting platform settings.

## What I Learned

Building Talkly helped me practice:

- Full-stack application development with the MERN stack
- REST API design and implementation
- Authentication and protected routes
- MongoDB data modeling with Mongoose
- React component architecture and routing
- Global state management with Zustand
- Custom React hooks for API operations
- Real-time communication with Socket.IO
- Frontend and backend integration
- Production builds and deployment configuration

## Author

**Ali Khezri**

- GitHub: [ali-khezri](https://github.com/ali-khezri)
- LinkedIn: [Ali Khezri](https://www.linkedin.com/in/ali-khezri)
---

If you find this project useful, consider giving the repository a star.
