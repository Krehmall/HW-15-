import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

let userTemplate = {
  avatar: "",
  email: "",
  username: "",
  password: "",
};

const AddUser = ({ addUser }) => {
  const [newUser, setNewUser] = useState(userTemplate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { avatar, email, username, password } = newUser;
    if (!avatar || !email || !username || !password) return;
    addUser(email, username, password);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewUser({ ...newUser, [id]: value });
  };

  return (
    <>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <Input onChange={handleChange} id="avatar" value={newUser.averageGrade} label="Avatar Link" />
        <Input onChange={handleChange} id="email" value={newUser.name} label="Email" />
        <Input onChange={handleChange} id="username" value={newUser.age} label="Username" />
        <Input onChange={handleChange} id="password" value={newUser.major} label="Password" />
        <Button type="submit" className="add-button">
          Add new user
        </Button>
      </form>
    </>
  );
};

export default AddUser;
