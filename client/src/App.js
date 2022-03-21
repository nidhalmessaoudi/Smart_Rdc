import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/UI/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Hello from Smart Redirect!</h1>
        <Routes>
          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
