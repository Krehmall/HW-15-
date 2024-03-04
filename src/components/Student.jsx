import RemoveButton from "./RemoveButton";

const Student = ({ student, removeStudent }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td className="action">
        <RemoveButton onClick={() => removeStudent(student.id)} />
      </td>
    </tr>
  );
};

export default Student;
