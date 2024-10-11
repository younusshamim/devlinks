import DashboardLayout from "@/layouts/DashboardLayout";
import CustomizeLinks from "@/pages/CustomizeLinks/CustomizeLinks";
import Login from "@/pages/Login/Login";
import Preview from "@/pages/Preview/Preview";
import ProfileDetails from "@/pages/ProfileDetails/ProfileDetails";
import Signup from "@/pages/Signup/Signup";
import { createBrowserRouter } from "react-router-dom";
import PageRoutes from "./page-routes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: PageRoutes.customizeLinks, element: <CustomizeLinks /> },
      { path: PageRoutes.profileDetails, element: <ProfileDetails /> },
    ],
  },
  {
    path: PageRoutes.preview,
    element: <Preview />,
  },
  {
    path: PageRoutes.login,
    element: <Login />,
  },
  {
    path: PageRoutes.signup,
    element: <Signup />,
  },
]);

export default Router;
