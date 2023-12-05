import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./request.css";
import { useDispatch } from "react-redux";
import { doubtRequest } from "../../Redux/doubt/action";
import { useNavigate } from "react-router-dom";

 const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    doubt: "",
  });
  const dispatch=useDispatch();
const navigate=useNavigate()
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Doubt Form Data:", formData);
    dispatch(doubtRequest(formData));
    setFormData({name:"",subject:"",doubt:""})
    navigate("/history")
  };

  return (
    <>
      <Navbar />
      <div className="request-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Doubt Request</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="FullStack">Full Stack Developer</option>
          </select>
          <textarea
            name="doubt"
            value={formData.doubt}
            onChange={handleInputChange}
            cols="30"
            rows="10"
            placeholder="Doubt..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Request;