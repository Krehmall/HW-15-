import React from "react";
import { createContext, useState } from "react";
import { utilService } from "../services/utilService";
import studentsList from "../data/students";

const StudentsContext = createContext(null);

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsList);
  let studentTemplate = {
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  };
  const [newStudent, setNewStudent] = useState(studentTemplate);

  const handleSubmitAddStudent = (e) => {
    e.preventDefault();
    const { name, age, major, university, averageGrade } = newStudent;
    if (!name || !age || !major || !university || !averageGrade) return;
    addStudent(name, age, major, university, averageGrade);
  };

  const handleChangeAddStudent = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [id]: value });
  };

  const addStudent = (name, age, major, university, averageGrade) => {
    const newStudent = {
      id: utilService.generateId(),
      name,
      age,
      major,
      university,
      averageGrade,
    };

    setStudents((stud) => [...stud, newStudent]);
  };

  const removeStudent = (studentId) => {
    const updatedStudents = students.filter((stud) => stud.id !== studentId);
    setStudents(updatedStudents);
  };
  const context = {
    students,
    setStudents,
    removeStudent,
    addStudent,
    handleSubmitAddStudent,
    handleChangeAddStudent,
    newStudent,
  };

  return <StudentsContext.Provider value={context}>{children}</StudentsContext.Provider>;
};

export { StudentsProvider, StudentsContext };
