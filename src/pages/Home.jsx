import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { StudentsProvider } from "../providers/StudentsProvider";
import { UsersProvider } from "../providers/UsersProvider";
import Dashboard from "../components/Students/Dashboard";
import Admin from "../components/Users/Admin";

const Home = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <StudentsProvider>
        <Dashboard />
      </StudentsProvider>
      <UsersProvider>{loggedInUser && loggedInUser.isAdmin === true ? <Admin /> : ""}</UsersProvider>
    </>
  );
};

export default Home;
