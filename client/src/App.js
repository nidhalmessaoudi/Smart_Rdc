import { Route, Routes } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Hello from Smart Redirect!</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
