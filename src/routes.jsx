import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { SignIn, SignUp } from "@/pages";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
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
