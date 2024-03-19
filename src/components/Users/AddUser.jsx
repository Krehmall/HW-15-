import React, { useState, useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import { UsersContext } from "../../providers/UsersProvider";

const AddUser = () => {
  const { handleChange, handleSubmit, newUser } = useContext(UsersContext);

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
