import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Private = ({ children, alternate, ...rest }) => {
  let { user } = useContext(AuthContext);

  if(user)
    return <div {...rest}>{children}</div>;
  else
    return <div> {alternate} </div>;
};

export default Private;
