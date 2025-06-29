import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import { AuthProvider } from "./contexts/AuthContext";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));


function App() {
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div
            className="bg-modal fixed w-full h-screen top-0 z-50 flex items-center justify-center text-white"
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
export default App;




