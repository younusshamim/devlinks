import { PlatformDataType } from "@/types/platform.type";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import { SiReddit, SiSnapchat, SiTiktok } from "react-icons/si";

const PlatformsData: PlatformDataType[] = [
  {
    name: "Github",
    Icon: FiGithub,
    background: "#181717",
    foreground: "#FFFFFF",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    background: "#0077B5",
    foreground: "#FFFFFF",
  },
  {
    name: "Youtube",
    Icon: RiYoutubeLine,
    background: "#FF0000",
    foreground: "#FFFFFF",
  },
  {
    name: "Twitter",
    Icon: FiTwitter,
    background: "#1DA1F2",
    foreground: "#FFFFFF",
  },
  {
    name: "Facebook",
    Icon: FaFacebookF,
    background: "#1877F2",
    foreground: "#FFFFFF",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    background: "#E4405F",
    foreground: "#FFFFFF",
  },
  {
    name: "Pinterest",
    Icon: FaPinterestP,
    background: "#BD081C",
    foreground: "#FFFFFF",
  },
  {
    name: "TikTok",
    Icon: SiTiktok,
    background: "#010101",
    foreground: "#FFFFFF",
  },
  {
    name: "Snapchat",
    Icon: SiSnapchat,
    background: "#FFFC00",
    foreground: "#000000",
  },
  {
    name: "Reddit",
    Icon: SiReddit,
    background: "#FF4500",
    foreground: "#FFFFFF",
  },
];

export default PlatformsData;
