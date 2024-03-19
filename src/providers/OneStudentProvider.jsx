import React from "react";
import { createContext, useState } from "react";

const OneStudentContext = createContext(null);

const OneStudentProvider = ({ children, student }) => {
  const [studentData, setStudentData] = useState(student);
  const [editMode, setEditMode] = useState(0);
  const editStudent = () => {
    setEditMode(1);
  };

  const editStudentSubmit = () => {
    const { id, name, age, major, university, averageGrade } = studentData;
    if (!name || !age || !major || !university || !averageGrade) return;
    setStudentData({ id, name, age, major, university, averageGrade });
    setEditMode(0);
  };

  const handleChangeEditStudent = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setStudentData({ ...studentData, [id]: value });
  };
  const context = { editStudentSubmit, handleChangeEditStudent, editStudent, editMode, studentData, setStudentData };
  return <OneStudentContext.Provider value={context}>{children}</OneStudentContext.Provider>;
};

export { OneStudentProvider, OneStudentContext };
