import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  selectCategory: Yup.string()
    .required("Select a category")
    .min(2, "Select a category"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUpForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    selectCategory: "",
    password: "",
    confirmPassword: "",
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      resetForm();
      navigate("/menu");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    setSubmitting(false);
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/menu");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <section className="w-1/2 my-12">
        <div className="mb-4">
          <img src={assets.logo} alt="logo" />
        </div>
        <h1 className="text-xl font-semibold mb-4">
          Glad to have you onboard!
        </h1>
        <p className="text-sm text-sub mb-4">
          Signup to have an account with us.
        </p>
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
                <label
                  htmlFor="fullName"
                  className="font-medium text-sm block mb-1"
                >
                  Fullname:
                </label>
                <div className="relative">
                  <img
                    src={assets.personBlack}
                    className="absolute w-3.5 top-3 left-3"
                    alt="mail icon"
                  />
                  <Field
                    type="text"
                    name="fullName"
                    className={`w-full px-8 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.fullName && touched.fullName
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-sm block mb-1"
                >
                  Email:
                </label>
                <div className="relative">
                  <img
                    src={assets.mail}
                    className="absolute w-3 top-3 left-3"
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
                    placeholder="Enter your email"
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
                  htmlFor="selectCategory"
                  className="font-medium text-sm block mb-1"
                >
                  Category:
                </label>
                <div className="relative">
                  <img
                    src={assets.category}
                    className="absolute w-3.5 top-3 left-3"
                    alt="mail icon"
                  />
                  <Field
                    name="selectCategory"
                    component="select"
                    className={`w-full px-8 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.selectCategory && touched.selectCategory
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a category</option>
                    <option value="swallow">Swallow</option>
                    <option value="rice">Rice</option>
                    <option value="soup">Soups</option>
                  </Field>
                </div>
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
                    className="absolute w-3 top-3 left-3"
                    alt="mail icon"
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

              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className={`w-full px-3 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Re-enter your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-medium mt-8 w-full py-2 rounded-lg"
                disabled={isSubmitting || loading}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>

              <p className="text-charcoal text-xs my-6 text-center">
                - or continue with -
              </p>
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="bg-white border border-gray-300 text-gray-700 font-medium my-4 w-full py-2 rounded-lg flex items-center justify-center gap-2"
                disabled={loading}
              >
                <img src={assets.google} alt="Google" className="h-5 w-5" />
                Sign up with Google
              </button>
              <p className="text-xs text-charcoal text-center mt-8">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold">
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default SignUpForm;
