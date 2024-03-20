import Input from "../Input";
import Button from "../Button";

const EditStudent = ({ studentData, editStudentSubmit, handleChange }) => {
  return (
    <tr>
      <td>
        <Input onChange={handleChange} value={studentData.name} id="name" label="Name" />
      </td>
      <td>
        <Input onChange={handleChange} value={studentData.age} id="age" label="Age" />
      </td>
      <td>
        <Input onChange={handleChange} value={studentData.major} id="major" label="Major" />
      </td>
      <td>
        <Input onChange={handleChange} value={studentData.university} id="university" label="University" />
      </td>
      <td>
        <Input onChange={handleChange} value={studentData.averageGrade} id="averageGrade" label="Average Grade" />
      </td>
      <td className="action">
        <Button onClick={() => editStudentSubmit()} className="editsubmit-button">
          Submit changes
        </Button>
      </td>
    </tr>
  );
};
export default EditStudent;
