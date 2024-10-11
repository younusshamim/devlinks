"use client";

import PageRoutes from "@/routes/page-routes";
import { CgProfile } from "react-icons/cg";
import { RiLinksLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
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

  return (
    <Section className="flex items-center justify-between ">
      <Logo />

      <div className="space-x-5">
        {tabsButtons.map((button, index) => (
          <Button
            key={index}
            onClick={() => navigate(button.link)}
            variant={pathname === button.link ? "secondary" : 'ghost'}
            iconBefore={button.icon}
          >
            {button.title}
          </Button>
        ))}
      </div>

      <Button
        onClick={() => navigate(PageRoutes.preview)} variant='outline'>
        Preview
      </Button>
    </Section >
  );
}
