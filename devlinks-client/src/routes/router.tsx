import DashboardLayout from "@/layouts/DashboardLayout";
import CustomizeLinks from "@/pages/CustomizeLinks/CustomizeLinks";
import Preview from "@/pages/Preview/Preview";
import ProfileDetails from "@/pages/ProfileDetails/ProfileDetails";
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
    element: null,
  },
  {
    path: PageRoutes.signup,
    element: null,
  },
]);

export default Router;
