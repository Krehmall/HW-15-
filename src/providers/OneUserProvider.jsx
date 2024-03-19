import React from "react";
import { createContext, useState } from "react";
import { userService } from "../services/userService";

const OneUserContext = createContext(null);

const OneUserProvider = ({ children, user }) => {
  const [userData, setUserData] = useState(user);
  const [editMode, setEditMode] = useState(0);
  const editUser = () => {
    setEditMode(1);
  };

  const editUserSubmit = () => {
    const { id, username, password, email, avatar } = userData;
    if (!username || !password || !email) return;
    const updatedUser = userService.updateUser(id, username, password, email, avatar);
    setUserData(updatedUser);
    setEditMode(0);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUserData({ ...userData, [id]: value });
  };
  const context = { userData, editUser, handleChange, editUserSubmit, editMode };
  return <OneUserContext.Provider value={context}>{children}</OneUserContext.Provider>;
};

export { OneUserProvider, OneUserContext };
