import students from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { AddStudent, addedStudents } from "./components/AddStudent";

const App = () => {
  let allStudents = students.concat(addedStudents);
  return (
    <main>
      <Header />
      <Dashboard students={allStudents} />
      <AddStudent />
      <Footer />
    </main>
  );
};

export default App;
