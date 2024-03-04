import Button from "./Button";

const StudentRender = ({ studentData, editStudent, removeStudent }) => {
  return (
    <tr>
      <td>{studentData.name}</td>
      <td>{studentData.age}</td>
      <td>{studentData.major}</td>
      <td>{studentData.university}</td>
      <td>{studentData.averageGrade}</td>
      <td className="action">
        <Button onClick={() => editStudent()} className="edit-button">
          Edit student
        </Button>
        <Button onClick={() => removeStudent(studentData.id)} className="remove-button">
          Remove student
        </Button>
      </td>
    </tr>
  );
};

export default StudentRender;
