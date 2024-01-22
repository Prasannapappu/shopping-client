import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const populateHome = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateHome();
      }
    }
  }, []);

  return <div>Home</div>;
};
