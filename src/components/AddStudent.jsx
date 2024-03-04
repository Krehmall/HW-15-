import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

let studentTemplate = {
  name: "",
  age: "",
  major: "",
  university: "",
  averageGrade: "",
};

const AddStudent = ({ addStudent }) => {
  const [newStudent, setNewStudent] = useState(studentTemplate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, major, university, averageGrade } = newStudent;
    if (!name || !age || !major || !university || !averageGrade) return;
    addStudent(name, age, major, university, averageGrade);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [id]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} id="name" value={newStudent.name} label="Name" />
        <Input onChange={handleChange} id="age" value={newStudent.age} label="Age" />
        <Input onChange={handleChange} id="major" value={newStudent.major} label="Major" />
        <Input onChange={handleChange} id="university" value={newStudent.university} label="University" />
        <Input onChange={handleChange} id="averageGrade" value={newStudent.averageGrade} label="Average Grade" />
        <Button type="submit" className="add-button">
          Add new student
        </Button>
      </form>
    </>
  );
};

export default AddStudent;
