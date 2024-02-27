import React, { useState } from "react";
// import App from "./../App";

let addedStudents = [];

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [averageGrade, setAverageGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name,
      age,
      major,
      university,
      averageGrade,
    };
    addedStudents.push(studentData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        <input onChange={(e) => setAge(e.target.value)} value={age}></input>
        <input onChange={(e) => setMajor(e.target.value)} value={major}></input>
        <input onChange={(e) => setUniversity(e.target.value)} value={university}></input>
        <input onChange={(e) => setAverageGrade(e.target.value)} value={averageGrade}></input>
        <button type="submit">Click to submit</button>
      </form>
    </>
  );
};

export { AddStudent, addedStudents };
