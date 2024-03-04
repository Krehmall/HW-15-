import Student from "./Student";
import studentsList from "../data/students";
import { useState } from "react";
import AddStudent from "./AddStudent";
import TableHeader from "./TableHeader";

const Dashboard = () => {
  const [students, setStudents] = useState(studentsList);

  const addStudent = (name, age, major, university, averageGrade) => {
    const newStudent = {
      id: students.length + 1,
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

  return (
    <>
      <table>
        <TableHeader />
        <tbody>
          {students.map((student) => (
            <Student student={student} removeStudent={removeStudent} key={student.id} />
          ))}
        </tbody>
      </table>
      <AddStudent addStudent={addStudent} />
    </>
  );
};

export default Dashboard;
