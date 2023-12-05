import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import "./history.css";

const History = () => {
  const [doubtHistory, setDoubtHistory] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/get");
      setDoubtHistory(response.data);
       console.log(response.data);
    } catch (error) {
      console.error("Error fetching doubt history:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <>
      <Navbar />
      <div className="history-wrapper">
        <h2>Doubt History</h2>
        <ul>
          {doubtHistory.length === 0 ? (
            <p className="p-tag">No doubts found.</p>
          ) : (
            <ul className="history">
              {doubtHistory.map((doubt) => (
                <li key={doubt._id}>
                 
                  <p>Subject: {doubt.subject}</p>
                  <p>Doubt: {doubt.doubt}</p>
                 
                </li>
              ))}
            </ul>
          )}
        
        </ul>
      </div>
    </>
  );
};

export default History;
