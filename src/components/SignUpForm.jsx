import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .required("Age is required")
    .min(18, "Must be at least 18 years old")
    .max(100, "Age must be less than 100"),
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
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    // Handle form submission
    setSubmitting(false);
    resetForm();
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
              <div>
                <label
                  htmlFor="firstName"
                  className="font-medium text-sm block mb-1"
                >
                  First Name:
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className={`w-full px-3 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName && touched.firstName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="font-medium text-sm block mb-1"
                >
                  Last Name:
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className={`w-full px-3 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName && touched.lastName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastName"
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
                <Field
                  type="email"
                  name="email"
                  className={`w-full px-3 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
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
                <Field
                  type="password"
                  name="password"
                  className={`w-full px-3 py-2 text-sm mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password && touched.password
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error text-red-500 text-sm mt-1"
                />
              </div>

              {/* <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : ""
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div> */}

              <button
                type="submit"
                className="bg-primary text-white font-medium mt-8 w-full py-2 rounded-lg"
                disabled={isSubmitting}
              >
                Signup
              </button>

              <p className="text-charcoal text-xs my-4 text-center">
                - or continue with -
              </p>
              <p className="text-sm text-charcoal text-center">
                Already have an account? <Link to="/login" className="text-primary font-semibold">Login</Link>
              </p>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default SignUpForm;
