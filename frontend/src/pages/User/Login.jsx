import React, { useState } from "react";
import "./user.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login} from "../../Redux/auth/action";

const Login = () => {
const navigate=useNavigate();
  const location=useLocation();
  const dispatch=useDispatch()
  const [passwordType, setPasswordType] = useState("password");
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("please provide a valid email address")
          .required("E-mail Required"),
        password: Yup.string()
          .min(4, "Incorrect password")
          .required("password Required"),
      }),
      onSubmit: async (values) => {
        // console.log(values);
        let userData = values;
        await dispatch(login(userData));
        navigate('/dashboard')
      },
    });


 const handlePassword = () => {
   if (passwordType === "password") {
     setPasswordType("text");
     return;
   }
   setPasswordType("password");
 };
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <form className="form" onSubmit={handleSubmit}>
          <div className="auth-heading">
            <Link to="/login">Sign In</Link> / <Link to="/signup">Sign Up</Link>
          </div>
                
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">
              {touched.email && errors.email ? errors.email : null}
            </p>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type={passwordType}
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">
              {touched.password && errors.password ? errors.password : null}
            </p>
          </div>
          <div className="checkbox-dis">
            <input className="" type="checkbox" onClick={handlePassword} />
            <label className="">Show Password</label>
          </div>
        
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
