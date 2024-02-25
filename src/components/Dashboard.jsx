const Student = (props) => {
  const { student } = props;
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
    </tr>
  );
};

const Dashboard = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>University</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <Student student={student} key={student.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
