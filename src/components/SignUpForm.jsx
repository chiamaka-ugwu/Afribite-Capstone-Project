import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field
              type="text"
              name="firstName"
              // className={errors.firstName && touched.firstName ? "error" : ""}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName && touched.firstName
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field
              type="text"
              name="lastName"
              className={errors.lastName && touched.lastName ? "error" : ""}
            />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              name="email"
              className={errors.email && touched.email ? "error" : ""}
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <Field
              type="number"
              name="age"
              className={errors.age && touched.age ? "error" : ""}
            />
            <ErrorMessage name="age" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              name="password"
              className={errors.password && touched.password ? "error" : ""}
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              name="confirmPassword"
              className={
                errors.confirmPassword && touched.confirmPassword ? "error" : ""
              }
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
