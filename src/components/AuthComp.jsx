import { Navigate } from "react-router-dom";
import { useUser } from "../pages/UserContext";

export const AuthComp = ({ children }) => {
  const { loggedUser } = useUser();
  return loggedUser?._id ? children : <Navigate to="/" />;
};
