import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;




