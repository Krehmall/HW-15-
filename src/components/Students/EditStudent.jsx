import Input from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { OneStudentContext } from "../../providers/OneStudentProvider";

const EditStudent = () => {
  const { handleChangeEditStudent, editStudentSubmit, studentData } = useContext(OneStudentContext);

  return (
    <tr>
      <td>
        <Input onChange={handleChangeEditStudent} value={studentData.name} id="name" label="Name" />
      </td>
      <td>
        <Input onChange={handleChangeEditStudent} value={studentData.age} id="age" label="Age" />
      </td>
      <td>
        <Input onChange={handleChangeEditStudent} value={studentData.major} id="major" label="Major" />
      </td>
      <td>
        <Input onChange={handleChangeEditStudent} value={studentData.university} id="university" label="University" />
      </td>
      <td>
        <Input onChange={handleChangeEditStudent} value={studentData.averageGrade} id="averageGrade" label="Average Grade" />
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
