import React, { useState, useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import { StudentsContext } from "../../providers/StudentsProvider";

const AddStudent = () => {
  const { handleSubmitAddStudent, handleChangeAddStudent, newStudent } = useContext(StudentsContext);

  return (
    <>
      <form className="add-student-form" onSubmit={handleSubmitAddStudent}>
        <Input onChange={handleChangeAddStudent} id="name" value={newStudent.name} label="Name" />
        <Input onChange={handleChangeAddStudent} id="age" value={newStudent.age} label="Age" />
        <Input onChange={handleChangeAddStudent} id="major" value={newStudent.major} label="Major" />
        <Input onChange={handleChangeAddStudent} id="university" value={newStudent.university} label="University" />
        <Input onChange={handleChangeAddStudent} id="averageGrade" value={newStudent.averageGrade} label="Average Grade" />
        <Button type="submit" className="add-button">
          Add new student
        </Button>
      </form>
    </>
  );
};

export default AddStudent;
