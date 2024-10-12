"use client";

import PageRoutes from "@/config/page-routes";
import { useProfile } from "@/context/ProfileContext";
import useMediaQuery from "@/hooks/use-media-query";
import { clearLocalStorage } from "@/lib/localStorage";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { screens } from "../config/theme";
import Logo from "./Logo/Logo";
import Section from "./Section";
import { Button } from "./ui/button";


const tabsButtons = [
  { title: 'Links', icon: <RiLinksLine />, link: PageRoutes.customizeLinks },
  { title: 'Profile Details', icon: <CgProfile />, link: PageRoutes.profileDetails },
]

export default function DashboardHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const smDevice = useMediaQuery(`(min-width: ${screens.sm})`);
  const { userDetails } = useProfile()
  const userId = userDetails?._id

  const handleLogout = () => {
    clearLocalStorage()
    navigate(PageRoutes.login)
  }

  return (
    <Section className="flex items-center justify-between ">
      <Logo />

      <div className="space-x-3">
        {tabsButtons.map((button, index) => (
          <Button
            key={index}
            onClick={() => navigate(button.link)}
            variant={pathname === button.link ? "secondary" : 'ghost'}
            iconBefore={smDevice ? button.icon : undefined}
            className={smDevice ? '' : 'text-lg'}
          >
            {smDevice ? button.title : button.icon}
          </Button>
        ))}
      </div>

      <div className="flex space-x-1 items-center">
        <Button
          onClick={() => navigate(`${PageRoutes.preview}/${userId}`)} variant='outline'
          className={smDevice ? '' : 'text-lg'}
        >
          {smDevice ? 'Preview' : <IoEyeOutline />}
        </Button>

        <Button onClick={handleLogout} variant="ghost" className="text-red-700 hover:bg-red-700/20 hover:text-red-700 text-2xl" title="Logout">
          <IoMdLogOut />
        </Button>
      </div>
    </Section >
  );
}
