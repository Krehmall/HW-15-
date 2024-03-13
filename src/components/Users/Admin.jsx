import User from "./User";
import { useState } from "react";
import AddUser from "./AddUser";
import TableHeaderUsers from "./TableHeaderUsers";
import { storageService } from "../../services/storageService";
import { userService } from "../../services/userService";

const Admin = () => {
  const usersList = storageService.getUsers();

  const [users, setUsers] = useState(usersList);

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
      <h1 className="usersHeader">Users</h1>
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

export default Admin;
