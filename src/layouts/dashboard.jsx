import { Routes, Route, Navigate } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";
import { useAuth } from "@/hooks";

export function Dashboard() {
  const { user } = useAuth();
  const [ controller ] = useMaterialTailwindController();
  const { sidenavType } = controller;

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <div className="min-h-screen bg-blue-gray-50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "../../public/img/logo-white.png" : "../../public/img/logo-black.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
