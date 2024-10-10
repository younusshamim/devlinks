"use client";

import { CgProfile } from "react-icons/cg";
import { RiLinksLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { Button } from "../ui/button";

const tabsButtons = [
  { title: 'Links', icon: <RiLinksLine />, link: '/customize-links' },
  { title: 'Profile Details', icon: <CgProfile />, link: '/profile-details' },
]

export default function DashboardHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="pt-4 px-4">
      <header className="flex items-center justify-between px-5 py-4 bg-white rounded-lg">
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
          onClick={() => navigate('preview')} variant='outline'>
          Preview
        </Button>
      </header >
    </div>
  );
}

{/* <Button onClick={() => navigateTo('/profile-details')} variant="ghost" iconBefore={<CgProfile />}>Profile Details</Button> */ }