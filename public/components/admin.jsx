import { AiOutlineHome } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import { RiUserSettingsLine, RiChatSmileLine } from "react-icons/ri";
import { BiUserCheck } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";

const admin_navigation = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: AiOutlineHome,
  },
  {
    label: "Business Owners",
    link: "/dashboard/business",
    icon: FaBusinessTime,
  },
  {
    label: "Consultants",
    link: "/dashboard/consultant",
    icon: GrUserNew,
  },
  {
    label: "Partners",
    link: "/dashboard/partners",
    icon: RiUserSettingsLine,
  },
  {
    label: "Experts",
    link: "/dashboard/experts",
    icon: BiUserCheck,
  },
  {
    label: "All Users",
    link: "/dashboard/all_users",
    icon: TbUsers,
  },
  {
    label: "Chat",
    link: "/dashboard/chat",
    icon: RiChatSmileLine,
  },
];

export const consultant_navigation = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: AiOutlineHome,
  },
  {
    label: "Business Owners",
    link: "/dashboard/business",
    icon: FaBusinessTime,
  },
  {
    label: "Chat",
    link: "/dashboard/chat",
    icon: RiChatSmileLine,
  },
];

export const partner_navigation = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: AiOutlineHome,
  },
  {
    label: "Business Owners",
    link: "/dashboard/business",
    icon: FaBusinessTime,
  },
  {
    label: "Consultants",
    link: "/dashboard/consultant",
    icon: GrUserNew,
  },
  {
    label: "Partners",
    link: "/dashboard/partners",
    icon: RiUserSettingsLine,
  },
  {
    label: "Experts",
    link: "/dashboard/experts",
    icon: BiUserCheck,
  },
  {
    label: "All Users",
    link: "/dashboard/all_users",
    icon: TbUsers,
  },
  {
    label: "Chat",
    link: "/dashboard/chat",
    icon: RiChatSmileLine,
  },
];

export const expert_navigation = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: AiOutlineHome,
  },
  {
    label: "Experts",
    link: "/dashboard/experts",
    icon: BiUserCheck,
  },
  {
    label: "All Users",
    link: "/dashboard/all_users",
    icon: TbUsers,
  },
  {
    label: "Chat",
    link: "/dashboard/chat",
    icon: RiChatSmileLine,
  },
];

export default admin_navigation;
