import DashboardLayout from "@/layouts/DashboardLayout";
import CustomizeLinks from "@/pages/CustomizeLinks/CustomizeLinks";
import ProfileDetails from "@/pages/ProfileDetails/ProfileDetails";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/customize-links", element: <CustomizeLinks /> },
      { path: "/profile-details", element: <ProfileDetails /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
]);

export default Router;
