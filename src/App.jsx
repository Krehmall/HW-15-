import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
