import { useState } from "react";
import EditStudent from "./EditStudent";
import StudentRender from "./StudentRender";

const Student = ({ student, removeStudent }) => {
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

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setStudentData({ ...studentData, [id]: value });
  };

  if (editMode === 0) {
    return <StudentRender studentData={studentData} editStudent={editStudent} removeStudent={removeStudent} />;
  } else {
    return <EditStudent studentData={studentData} editStudentSubmit={editStudentSubmit} handleChange={handleChange} />;
  }
};

export default Student;
