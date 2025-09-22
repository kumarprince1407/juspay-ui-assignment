import React from "react";
import { Bug, UserPlus, Upload, Edit, Trash2 } from "lucide-react";
import { ThemeContext } from "./ThemeContext";

const RightSidebar: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);

  const notifications = [
    {
      id: 1,
      icon: <Bug className="w-4 h-4 text-orange-500" />,
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      icon: <UserPlus className="w-4 h-4 text-blue-500" />,
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: 3,
      icon: <Bug className="w-4 h-4 text-orange-500" />,
      title: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      id: 4,
      icon: <Upload className="w-4 h-4 text-green-500" />,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    {
      id: 1,
      name: "Natali Craig",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 2,
      name: "Drew Cano",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 3,
      name: "Orlando Diggs",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 4,
      name: "Andi Lane",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 5,
      name: "Kate Morrison",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 6,
      name: "Koray Okumus",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face&auto=format",
    },
  ];

  return (
    <aside
      className={`w-[280px] h-full p-5 border-l flex flex-col gap-6 flex-shrink-0 ${
        isDark
          ? "bg-black border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Notifications Section */}
      <div>
        <h3
          className={`text-sm text-left font-semibold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Notifications
        </h3>
        <div className="space-y-3 text-left">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  } line-clamp-2`}
                >
                  {notification.title}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="text-left">
        <h3
          className={`text-sm text-left font-semibold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Activities
        </h3>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <img
                src={activity.avatar}
                alt=""
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  } line-clamp-2`}
                >
                  {activity.title}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h3
          className={`text-sm text-left font-semibold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Contacts
        </h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center gap-3">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <span
                className={`text-sm ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {contact.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
