import students from "./data/students";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Dashboard students={students} />
      <Footer />
    </main>
  );
};

export default App;
