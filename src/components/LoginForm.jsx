import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase.js";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setError("");
    try {
      console.log("Form values:", values);
      await login(values.email, values.password);
      navigate("/menu");
    } catch (error) {
      setError("Failed to sign in: " + error.message);
    }
    setSubmitting(false);
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/menu");
    } catch (error) {
      setError("Google sign in failed: " + error.message);
    }
  };

  return (
    <section className="w-4/5 md:w-1/2 my-12">
      <div className="mb-4">
        <img src={assets.logo} alt="logo" />
      </div>
      <h1 className="text-xl font-semibold mb-4">Good to see you again!</h1>
      <p className="text-sm text-sub mb-4">Please enter your login details</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {error && (
              <div className="text-red-500 text-sm mb-2 border-red-500 bg-red-50 p-3 rounded">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="font-medium text-sm block mb-1">
                Email:
              </label>
              <div className="relative">
                <img
                  src={assets.mail}
                  className="absolute h-3 top-3 left-3"
                  alt="mail icon"
                />
                <Field
                  type="email"
                  name="email"
                  className={`w-full px-8 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>

              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-medium text-sm block mb-1"
              >
                Password:
              </label>
              <div className="relative">
                <img
                  src={assets.lock}
                  className="absolute h-4.5 top-2.5 left-2.5"
                  alt="lock icon"
                />

                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`w-full px-8 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password && touched.password
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                <img
                  src={showPassword ? assets.hide : assets.show}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-5 -translate-y-1/2 w-6"
                />
              </div>

              <ErrorMessage
                name="password"
                component="div"
                className="error text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex items-center justify-between my-4">
              <div className="text-xs text-sub flex items-center gap-2">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="h-4 w-4 border-gray-300 rounded focus:ring-primary"
                />
                Remember me
              </div>
              <Link to="" className="text-primary text-xs">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-medium mt-8 w-full py-2 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>

            <p className="text-charcoal text-xs my-8 text-center">
              - or continue with -
            </p>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-white border border-gray-300 text-gray-700 font-medium my-8 w-full py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <img src={assets.google} alt="Google" className="h-5 w-5" />
              Login with Google
            </button>
            <p className="text-sm text-charcoal text-center">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-primary font-semibold">
                Signup
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LoginForm;
