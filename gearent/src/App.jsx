import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/_login" element={<LoginAdmin />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    </div>
  )
}

export default App;
