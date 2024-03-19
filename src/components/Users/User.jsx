import { useContext } from "react";
import EditUser from "./EditUser";
import UserRender from "./UserRender";
import { OneUserContext } from "../../providers/OneUserProvider";

const User = () => {
  const { editMode } = useContext(OneUserContext);

  if (editMode === 0) {
    return <UserRender />;
  } else {
    return <EditUser />;
  }
};

export default User;
