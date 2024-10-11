"use client";

import PageRoutes from "@/config/page-routes";
import useMediaQuery from "@/hooks/use-media-query";
import { CgProfile } from "react-icons/cg";
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

  return (
    <Section className="flex items-center justify-between ">
      <Logo />

      <div className="space-x-5">
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

      <Button
        onClick={() => navigate(PageRoutes.preview)} variant='outline'
        className={smDevice ? '' : 'text-lg'}
      >
        {smDevice ? 'Preview' : <IoEyeOutline />}
      </Button>
    </Section >
  );
}
