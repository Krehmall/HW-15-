import Button from "../Button";

const UserRender = ({ userData, editUser, removeUser }) => {
  return (
    <tr>
      <img src={userData.avatar}></img>
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
  );
};

export default UserRender;
