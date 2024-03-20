import { useState } from "react";
import EditUser from "./EditUser";
import UserRender from "./UserRender";
import { userService } from "../../services/userService";

const User = ({ user, removeUser }) => {
  const [userData, setUserData] = useState(user);
  const [editMode, setEditMode] = useState(0);
  const editUser = () => {
    setEditMode(1);
  };

  const editUserSubmit = () => {
    const { id, username, password, email, avatar } = userData;
    if (!username || !password || !email) return;
    const updatedUser = userService.updateUser(id, username, password, email, avatar);
    setUserData(updatedUser);
    setEditMode(0);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUserData({ ...userData, [id]: value });
  };

  if (editMode === 0) {
    return <UserRender userData={userData} editUser={editUser} removeUser={removeUser} />;
  } else {
    return <EditUser userData={userData} editUserSubmit={editUserSubmit} handleChange={handleChange} />;
  }
};

export default User;
