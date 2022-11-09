import { Routes, Route } from "react-router-dom";
import {
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import routes from "@/routes";

export function Auth() {
  const navbarRoutes = [
    {
      name: "sign up",
      path: "/signup",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/signin",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

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
