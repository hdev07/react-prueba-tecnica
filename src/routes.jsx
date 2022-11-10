import {
  HomeIcon,
  TableCellsIcon,
  ArrowUpTrayIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Employees, Updates } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "employees",
        path: "/employees",
        element: <Employees />,
      },
      {
        icon: <ArrowUpTrayIcon {...icon} />,
        name: "updates",
        path: "/updates",
        element: <Updates />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/signin",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
