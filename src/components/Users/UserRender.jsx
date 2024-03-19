import Button from "../Button";
import { useContext } from "react";
import { OneUserContext } from "../../providers/OneUserProvider";
import { UsersContext } from "../../providers/UsersProvider";

const UserRender = () => {
  const { userData, editUser } = useContext(OneUserContext);
  const { removeUser } = useContext(UsersContext);

  return (
    <>
      <tr>
        <td>
          <img src={userData.avatar}></img>
        </td>
        <td>{userData.email}</td>
        <td>{userData.username}</td>
        <td>{userData.password}</td>
        <td>{userData.id}</td>
        <td className="action">
          <Button onClick={() => editUser()} className="edit-button">
            Edit user
          </Button>
          <Button onClick={() => removeUser(userData.id)} className="remove-button">
            Remove user
          </Button>
        </td>
      </tr>
    </>
  );
};

export default UserRender;
