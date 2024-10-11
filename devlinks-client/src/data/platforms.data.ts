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
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    name: "Youtube",
    Icon: RiYoutubeLine,
  },
  {
    name: "Twitter",
    Icon: FiTwitter,
  },
  {
    name: "Facebook",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
  },
  {
    name: "Pinterest",
    Icon: FaPinterestP,
  },
  {
    name: "TikTok",
    Icon: SiTiktok,
  },
  {
    name: "Snapchat",
    Icon: SiSnapchat,
  },
  {
    name: "Reddit",
    Icon: SiReddit,
  },
];

export default PlatformsData;
