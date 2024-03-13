import Header from "./components/Header";
import Dashboard from "./components/Students/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { userService } from "./services/userService";
import { storageService } from "./services/storageService";
import Admin from "./components/Users/Admin";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showCredentsEror, setShowCredentsEror] = useState(false);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    console.log({ loggedInUser });

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      // register
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      // login
      const user = userService.login(username, password);
      if (!user) {
        setShowCredentsEror(true);
        return;
      }
      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  return (
    <main>
      <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />
      {!loggedInUser ? (
        showRegister ? (
          <Register handleAuth={handleAuth} setShowRegister={setShowRegister} />
        ) : (
          <Login handleAuth={handleAuth} showCredentsEror={showCredentsEror} setShowRegister={setShowRegister} />
        )
      ) : (
        <Dashboard />
      )}
      {loggedInUser && loggedInUser.isAdmin === true ? <Admin /> : ""}
      <Footer />
    </main>
  );
};

export default App;
