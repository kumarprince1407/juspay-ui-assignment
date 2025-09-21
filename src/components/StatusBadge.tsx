import React from "react";

// Order type
export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

const StatusBadge: React.FC<{ status: Order["status"] }> = ({ status }) => {
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "In Progress":
        return "text-violet-400";
      case "Complete":
        return "text-green-400";
      case "Pending":
        return "text-blue-400";
      case "Approved":
        return "text-yellow-400";
      case "Rejected":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
        status
      )}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
      {status}
    </span>
  );
};

export default StatusBadge;
