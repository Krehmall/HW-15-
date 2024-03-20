import React from "react";
import { createContext, useState, useEffect, useRef } from "react";
import { userService } from "../services/userService";
import { storageService } from "../services/storageService";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showCredentsEror, setShowCredentsEror] = useState(false);

  useEffect(() => {
    const logUserFromStorage = storageService.getLoggedInUser();
    if (logUserFromStorage) {
      if (!_.isEqual(logUserFromStorage, loggedInUser)) {
        setLoggedInUser(logUserFromStorage);
      }
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [loggedInUser]);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      // register
      userService.createUser(username, email, password);
      navigate("/login");
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

  const context = {
    handleLogout,
    handleAuth,
    loggedInUser,
    setLoggedInUser,
    showCredentsEror,
    setShowCredentsEror,
  };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
