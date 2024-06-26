import { useContext } from "react";
import {Navigate} from 'react-router-dom';
import { AuthContext } from "../AuthContext";

export default function RequireAuth( {children}) {
  // export default function RequireAuth({ children = <Dashboard /> }) {
  const token = useContext(AuthContext).token;
  // if token is falsey meaning null, that means user not logged in
  if(!token) {
    return <Navigate to="/logout" replace />;
  }
  return children;
}
