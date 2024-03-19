import React from "react";
import { createContext, useState } from "react";
import { storageService } from "../services/storageService";
import { userService } from "../services/userService";

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  let userTemplate = {
    avatar: "",
    email: "",
    username: "",
    password: "",
  };
  const usersList = storageService.getUsers();
  const [users, setUsers] = useState(usersList);
  const [newUser, setNewUser] = useState(userTemplate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { avatar, email, username, password } = newUser;
    if (!email || !username || !password) return;
    addUser(email, username, password, avatar);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewUser({ ...newUser, [id]: value });
  };

  const addUser = (email, username, password, avatar) => {
    const newUser = userService.createUser(username, email, password, avatar);
    setUsers((users) => [...users, newUser]);
  };

  const removeUser = (userId) => {
    const updatedUsers = userService.removeUser(userId);
    setUsers(updatedUsers);
  };

  const context = { addUser, removeUser, users, setUsers, handleSubmit, handleChange, newUser };
  return <UsersContext.Provider value={context}>{children}</UsersContext.Provider>;
};

export { UsersProvider, UsersContext };
