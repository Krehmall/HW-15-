import User from "./User";
import { useContext } from "react";
import AddUser from "./AddUser";
import TableHeaderUsers from "./TableHeaderUsers";
import { UsersContext } from "../../providers/UsersProvider";
import { OneUserProvider } from "../../providers/OneUserProvider";

const Admin = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <h1 className="usersHeader">Users</h1>
      <table>
        <TableHeaderUsers />
        <tbody>
          {users.map((user) => (
            <OneUserProvider user={user} key={user.id}>
              <User />
            </OneUserProvider>
          ))}
        </tbody>
      </table>
      <AddUser />
    </>
  );
};

export default Admin;
