import { Navigate } from "react-router-dom";

export const AuthComp = ({ children, loggedUser }) => {
  return loggedUser?._id ? children : <Navigate to="/" />;
};
