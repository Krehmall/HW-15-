import { useContext } from "react";
import EditStudent from "./EditStudent";
import StudentRender from "./StudentRender";
import { OneStudentContext } from "../../providers/OneStudentProvider";

const Student = () => {
  const { removeStudent, handleChangeEditStudent, editStudentSubmit, studentData, editMode } = useContext(OneStudentContext);

  if (editMode === 0) {
    return (
      <StudentRender studentData={studentData} handleChangeEditStudent={handleChangeEditStudent} removeStudent={removeStudent} />
    );
  } else {
    return (
      <EditStudent
        studentData={studentData}
        editStudentSubmit={editStudentSubmit}
        handleChangeEditStudent={handleChangeEditStudent}
      />
    );
  }
};

export default Student;
