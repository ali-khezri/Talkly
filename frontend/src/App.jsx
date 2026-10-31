import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/home/Homepage";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 min-h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
