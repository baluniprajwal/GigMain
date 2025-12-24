import { Routes, Route } from "react-router-dom";
import Landing from "../pages/index";
import Login from "../pages/login";
import Register from "../pages/register";

export default function DesktopRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
