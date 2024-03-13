import Student from "./Student";
import studentsList from "../../data/students";
import { useState } from "react";
import AddStudent from "./AddStudent";
import Admin from "../Users/Admin";
import TableHeaderStudents from "./TableHeaderStudents";
import { utilService } from "../../services/utilService";

const Dashboard = () => {
  const [students, setStudents] = useState(studentsList);

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

  return (
    <>
      <table>
        <TableHeaderStudents />
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
