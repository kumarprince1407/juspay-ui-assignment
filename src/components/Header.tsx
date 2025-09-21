import React from "react";
import { Search, Menu, Star } from "lucide-react";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import ViewSidebarOutlined from "@mui/icons-material/ViewSidebarOutlined";
import { ThemeContext } from "./ThemeContext";

const Header: React.FC = () => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 border-b w-full h-16 ${
        isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-4">
        <Menu
          className={`w-5 h-5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
        />
        <Star
          className={`w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`}
        />
        <span
          className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          Dashboards
        </span>
        <span
          className={`text-sm font-medium ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Default
        </span>
      </div>

      <div className="flex items-center space-x-2">
        {/* Search Input */}
        <div className="relative">
          <Search
            className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Search"
            className={`pl-10 pr-12 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 h-9 ${
              isDark
                ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                : "border-gray-200 bg-black/10 text-gray-900 placeholder-gray-400"
            }`}
          />
          <span
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ⌘/
          </span>
        </div>

        {/* Icon Group */}
        <div className="flex items-center space-x-1 ml-4">
          <div className="flex items-center justify-center w-9 h-9">
            <button onClick={toggleTheme} className="cursor-pointer">
              {isDark ? (
                <LightModeTwoToneIcon
                  className={`w-5 h-5 ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                />
              ) : (
                <LightModeTwoToneIcon
                  className={`w-5 h-5 ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center w-9 h-9">
            <HistoryOutlinedIcon
              className={`w-5 h-5 cursor-pointer ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            />
          </div>
          <div className="flex items-center justify-center w-9 h-9">
            <NotificationsTwoToneIcon
              className={`w-5 h-5 cursor-pointer ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            />
          </div>
          <div className="flex items-center justify-center w-9 h-9">
            <ViewSidebarOutlined
              className={`w-5 h-5 cursor-pointer rotate-180 ${
                isDark
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
