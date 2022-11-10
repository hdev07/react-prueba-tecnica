import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";
import routes from "@/routes";

export function Auth() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/dashboard/dashboard" replace />;
  }

  return (
    <div className="relative min-h-screen w-full bg-img">
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
