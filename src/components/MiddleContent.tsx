import React from "react";
import {
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { ThemeContext } from "./ThemeContext";
//import StatusBadge, { Order } from "./StatusBadge";
import StatusBadge, { type Order } from "./StatusBadge";

const MiddleContent: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set()
  );
  const [selectAll, setSelectAll] = React.useState(false);

  const orders: Order[] = [
    {
      id: "#CM9801",
      user: { name: "Natali Craig", avatar: "/api/placeholder/32/32" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
    // Duplicate entries
    {
      id: "#CM9806",
      user: { name: "Natali Craig", avatar: "/api/placeholder/32/32" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9807",
      user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9808",
      user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9809",
      user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9810",
      user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(orders.map((order) => order.id)));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (orderId: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(orderId)) {
      newSelectedRows.delete(orderId);
    } else {
      newSelectedRows.add(orderId);
    }
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.size === orders.length);
  };

  return (
    <div
      className={`flex-1 w-auto h-auto overflow-hidden ml-8 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Content Header */}
      <div
        className={`pt-2 pr-3 pb-2 pl-2 border-b ${
          isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <h2
          className={`flex font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Order List
        </h2>
      </div>

      {/* Toolbar */}
      <div className="h-[536px]">
        <div
          className={`pt-2 pr-3 pb-2 pl-2 ${
            isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          <div
            className={`flex items-center justify-between px-4 py-2 h-11 min-h-11 rounded ${
              isDark ? "bg-gray-900" : "bg-[#F7F9FB]"
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                className={`p-2 ${
                  isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
                }`}
              >
                <Plus
                  className={`w-5 h-5 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </button>
              <button
                className={`p-2 ${
                  isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
                }`}
              >
                <Filter
                  className={`w-5 h-5 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </button>
              <button
                className={`p-2 ${
                  isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
                }`}
              >
                <ArrowUpDown
                  className={`w-5 h-5 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </button>
            </div>
            <div className="relative">
              <Search
                className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              />
              <input
                type="text"
                placeholder="Search"
                className={`pl-10 pr-4 py-1 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 ${
                  isDark
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-200 bg-white text-gray-900"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div
          className={`flex-1 overflow-auto ${isDark ? "bg-black" : "bg-white"}`}
        >
          <table className="w-full min-w-full">
            <thead
              className={`border-b ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <tr className="h-10 min-h-10">
                <th className="pt-2 pr-3 pb-2 pl-3 text-left group">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className={`rounded border-gray-300 transition-opacity duration-200 ${
                      selectAll ? "opacity-100" : "group-hover:opacity-100"
                    }`}
                    style={{
                      accentColor: "#000000",
                    }}
                  />
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Order ID
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  User
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Project
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Address
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Date
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Status
                </th>
                <th
                  className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider w-12 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {/*Actions*/}
                </th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                isDark ? "divide-gray-700" : "divide-gray-200"
              }`}
            >
              {orders.map((order, index) => {
                const isSelected = selectedRows.has(order.id);
                return (
                  <tr
                    key={`${order.id}-${index}`}
                    className={`group ${
                      isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="pt-2 pr-3 pb-2 pl-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleRowSelect(order.id)}
                        className={`rounded border-gray-300 focus:ring-black transition-opacity duration-200 ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{
                          accentColor: "#000000",
                        }}
                      />
                    </td>
                    <td
                      className={`pt-2 pr-3 pb-2 pl-2 text-sm ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {order.id}
                    </td>
                    <td className="pt-2 pr-3 pb-2 pl-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-xs text-black">
                            {order.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span
                          className={`text-sm ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          {order.user.name}
                        </span>
                      </div>
                    </td>
                    <td
                      className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {order.project}
                    </td>
                    <td
                      className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {order.address}
                    </td>
                    <td
                      className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      <div className="flex items-center">
                        <Calendar
                          className={`w-4 h-4 mr-1 text-left ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        />
                        {order.date}
                      </div>
                    </td>
                    <td className="pt-2 pr-3 pb-2 pl-2 text-left">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="pt-2 pr-3 pb-2 pl-2 text-center">
                      <button>
                        <MoreHorizontal
                          className={`w-4 h-4 ${
                            isDark
                              ? "text-gray-500 hover:text-gray-300"
                              : "text-gray-400 hover:text-gray-600"
                          }`}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className={`px-6 py-4 border-t ${
            isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center justify-end space-x-2">
            <button
              className={`p-2 rounded ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
              }`}
            >
              <ChevronLeft
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              />
            </button>
            <button
              className={`px-3 py-2 rounded text-sm ${
                isDark ? "text-white bg-gray-700" : "text-black bg-gray-100"
              }`}
            >
              1
            </button>
            <button
              className={`px-3 py-2 rounded text-sm ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              2
            </button>
            <button
              className={`px-3 py-2 rounded text-sm ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              3
            </button>
            <button
              className={`px-3 py-2 rounded text-sm ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              4
            </button>
            <button
              className={`px-3 py-2 rounded text-sm ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              5
            </button>
            <button
              className={`p-2 rounded ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
              }`}
            >
              <ChevronRight
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
