import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Dashboard from "../components/Students/Dashboard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="home-container">
      <Dashboard />
    </div>
  );
};

export default Home;
