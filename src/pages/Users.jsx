import User from "../components/Users/User";
import { useContext, useEffect, useState } from "react";
import AddUser from "../components/Users/AddUser";
import TableHeaderUsers from "../components/Users/TableHeaderUsers";
import { storageService } from "../services/storageService";
import { userService } from "../services/userService";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const usersList = storageService.getUsers();
  const [users, setUsers] = useState(usersList);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedInUser || !loggedInUser.isAdmin) {
      navigate("/login");
    }
  }, []);

  const addUser = (email, username, password) => {
    const newUser = userService.createUser(username, email, password);
    setUsers((users) => [...users, newUser]);
  };

  const removeUser = (userId) => {
    const updatedUsers = userService.removeUser(userId);
    setUsers(updatedUsers);
  };

  return (
    <>
      <table>
        <TableHeaderUsers />
        <tbody>
          {users.map((user) => (
            <User user={user} removeUser={removeUser} key={user.id} />
          ))}
        </tbody>
      </table>
      <AddUser addUser={addUser} />
    </>
  );
};

export default Users;
