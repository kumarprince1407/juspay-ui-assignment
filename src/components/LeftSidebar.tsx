import React from "react";
import {
  FolderOpen,
  BookOpen,
  FileText,
  MessageCircle,
  ShoppingBag,
  ChartPie,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { ThemeContext } from "./ThemeContext";

const LeftSidebar: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <div
      className={`w-[212px] h-[1024px] border-r flex flex-col pt-5 pr-4 pb-5 pl-4 gap-4 ${
        isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">B</span>
        </div>
        <span
          className={`ml-2 text-sm ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          ByeWind
        </span>
      </div>

      {/* Navigation Tabs */}
      <div>
        <div
          className={`flex rounded-lg p-1 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <button
            className={`flex-1 text-sm py-2 font-medium ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Favorites
          </button>
          <button
            className={`flex-1 text-sm py-2 font-medium ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Recently
          </button>
        </div>
      </div>

      {/* Favorites Section */}
      <div>
        <div className="space-y-1">
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? "bg-gray-500" : "bg-gray-400"
              }`}
            ></span>
            Overview
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? "bg-gray-500" : "bg-gray-400"
              }`}
            ></span>
            Projects
          </div>
        </div>
      </div>

      {/* Dashboards Section */}
      <div>
        <div
          className={`text-sm text-left tracking-wider mb-3 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Dashboards
        </div>
        <div className="space-y-1">
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark ? "text-white bg-gray-800" : "text-gray-700 bg-black/10"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <ChartPie className="w-4 h-4 mr-3" />
            Default
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <ShoppingBag
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            eCommerce
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <FolderOpen
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Projects
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <BookOpen
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Online Courses
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div>
        <div
          className={`text-sm text-left tracking-wider mb-3 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Pages
        </div>
        <div className="space-y-1">
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <AccountBoxTwoToneIcon
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            User Profile
          </div>

          {/* Sub-menu items for User Profile */}
          <div className="ml-9 space-y-1 text-left">
            <div
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Overview
            </div>
            <div
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Projects
            </div>
            <div
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Campaigns
            </div>
            <div
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Documents
            </div>
            <div
              className={`text-sm px-2 py-1 rounded cursor-pointer ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Followers
            </div>
          </div>

          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <ContactMailTwoToneIcon
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Account
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <GroupsOutlinedIcon
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Corporate
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <FileText
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Blog
          </div>
          <div
            className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
              isDark
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <MessageCircle
              className={`w-4 h-4 mr-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
            Social
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;