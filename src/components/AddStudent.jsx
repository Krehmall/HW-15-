import React, { useState } from "react";
// import App from "./../App";

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
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} value={newStudent.name} id="name"></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={handleChange} value={newStudent.age} id="age"></input>
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <input onChange={handleChange} value={newStudent.major} id="major"></input>
        </div>
        <div>
          <label htmlFor="university">University</label>
          <input onChange={handleChange} value={newStudent.university} id="university"></input>
        </div>
        <div>
          <label htmlFor="averageGrade">Average Grade</label>
          <input onChange={handleChange} value={newStudent.averageGrade} id="averageGrade"></input>
        </div>
        <button type="submit">Add new student</button>
      </form>
    </>
  );
};

export default AddStudent;
