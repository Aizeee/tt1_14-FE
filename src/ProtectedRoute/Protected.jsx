import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = () => {
  const [user] = UserAuth();

  if (user.loading) {
    return (
      <div className="spinContainer">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return user.data ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
