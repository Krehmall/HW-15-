import Student from "./Student";
import { useContext } from "react";
import AddStudent from "./AddStudent";
import TableHeaderStudents from "./TableHeaderStudents";
import { StudentsContext } from "../../providers/StudentsProvider";
import { OneStudentProvider } from "../../providers/OneStudentProvider";

const Dashboard = () => {
  const { students } = useContext(StudentsContext);

  return (
    <>
      <table>
        <TableHeaderStudents />
        <tbody>
          {students.map((student) => (
            <OneStudentProvider student={student} key={student.id}>
              <Student />
            </OneStudentProvider>
          ))}
        </tbody>
      </table>
      <AddStudent />
    </>
  );
};

export default Dashboard;
