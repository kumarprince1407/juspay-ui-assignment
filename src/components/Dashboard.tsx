// Updated Dashboard Component (without RightSidebar - now handled in Layout)
import React from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import LeftSidebar from "./LeftSidebar";

// Dashboard Middle Content Component (same as before)
const DashboardMiddleContent: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);

  // Sample data for the dashboard
  const stats = [
    { title: "Customers", value: "3,781", change: "+11.01%", positive: true },
    { title: "Orders", value: "1,219", change: "-0.63%", positive: false },
    { title: "Revenue", value: "$695", change: "+15.03%", positive: true },
    { title: "Growth", value: "30.1%", change: "+6.08%", positive: true },
  ];

  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  const salesData = [
    { channel: "Direct", amount: "$300.56", color: "bg-gray-800" },
    { channel: "Affiliate", amount: "$135.18", color: "bg-purple-400" },
    { channel: "Sponsored", amount: "$154.02", color: "bg-blue-400" },
    { channel: "E-mail", amount: "$48.96", color: "bg-green-400" },
  ];

  const locationData = [
    { city: "New York", amount: "72K" },
    { city: "San Francisco", amount: "39K" },
    { city: "Sydney", amount: "25K" },
    { city: "Singapore", amount: "61K" },
  ];

  return (
    <div
      className={`flex-1 min-w-0 p-4 overflow-y-auto ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      <div className="mb-6">
        <p
          className={`text-left font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          eCommerce
        </p>
      </div>

      {/* Stats Cards and Charts Row */}
      <div className="flex gap-4 mb-6">
        {/* Left Section - Stats Cards */}
        <div className="flex gap-3">
          {/* First Column - Stats Cards */}
          <div className="space-y-3">
            {/* Customers Card */}
            <div
              className={`p-3 rounded-lg w-48 h-24 ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around h-full">
                <div
                  className={`text-sm text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Customers
                </div>
                <div className="flex justify-between items-center">
                  <div
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    3,781
                  </div>
                  <div className={`text-xs ${
                      isDark ? "text-white" : "text-gray-900"
                                                               }`}>
                    +11.01% <span className="ml-1">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div
              className={`p-3 rounded-lg w-48 h-24 ${
                isDark ? "bg-gray-800" : "bg-gray-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around h-full">
                <div
                  className={`text-sm text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Revenue
                </div>
                <div className="flex justify-between items-center">
                  <div
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    $695
                  </div>
                  <div className={`text-xs ${
                                             isDark ? "text-white" : "text-gray-900"
                                                                                      }`}>
                    +15.03% <span className="ml-1">↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - More Stats Cards */}
          <div className="space-y-3">
            {/* Orders Card */}
            <div
              className={`p-3 rounded-lg w-48 h-24 ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around h-full">
                <div
                  className={`text-sm text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Orders
                </div>
                <div className="flex justify-between items-center">
                  <div
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    1,219
                  </div>
                  <div className={`text-xs ${
                                             isDark ? "text-white" : "text-gray-900"
                                                                                      }`}>
                    -0.03% <span className="ml-1">↘</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div
              className={`p-3 rounded-lg w-48 h-24 ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around h-full">
                <div
                  className={`text-sm text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Growth
                </div>
                <div className="flex justify-between items-center">
                  <div
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    30.1%
                  </div>
                  <div className={`text-xs ${
                                             isDark ? "text-white" : "text-gray-900"
                                                                                      }`}>
                    +6.08% <span className="ml-1">↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Projections vs Actuals Chart */}
        <div
          className={`flex-1 min-w-0 max-w-md p-4 rounded-2xl ${
            isDark ? "bg-gray-800" : "bg-[#F7F9FB]"
          } shadow-sm`}
        >
          <div className="mb-2">
            <h3 className="font-inter font-semibold text-sm leading-5 tracking-normal text-[#1C1C1C]">
              Projections vs Actuals
            </h3>
          </div>

          {/* Bar Chart Container */}
          <div className="w-full h-40 flex items-end justify-center">
            <svg width="100%" height="100%" viewBox="0 0 300 160">
              {/* Y-axis values on left */}
              <text x="8" y="15" className="text-xs fill-gray-500 font-inter">
                4M
              </text>
              <text x="8" y="45" className="text-xs fill-gray-500 font-inter">
                3M
              </text>
              <text x="8" y="75" className="text-xs fill-gray-500 font-inter">
                2M
              </text>
              <text x="8" y="105" className="text-xs fill-gray-500 font-inter">
                1M
              </text>
              <text x="15" y="135" className="text-xs fill-gray-500 font-inter">
                0
              </text>

              {/* Chart bars */}
              <rect x="45" y="72" width="15" height="30" fill="#5B9BD5" rx="2" />
              <rect x="45" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />
              <rect x="85" y="32" width="15" height="50" fill="#5B9BD5" rx="2" />
              <rect x="85" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />
              <rect x="125" y="57" width="15" height="25" fill="#5B9BD5" rx="2" />
              <rect x="125" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />
              <rect x="165" y="42" width="15" height="40" fill="#5B9BD5" rx="2" />
              <rect x="165" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />
              <rect x="205" y="72" width="15" height="15" fill="#5B9BD5" rx="2" />
              <rect x="205" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />
              <rect x="245" y="42" width="15" height="40" fill="#5B9BD5" rx="2" />
              <rect x="245" y="92" width="15" height="30" fill="#C6D7EB" rx="2" />

              {/* Month labels */}
              <text x="50" y="150" className="text-xs fill-gray-500 font-inter">Jan</text>
              <text x="90" y="150" className="text-xs fill-gray-500 font-inter">Feb</text>
              <text x="130" y="150" className="text-xs fill-gray-500 font-inter">Mar</text>
              <text x="170" y="150" className="text-xs fill-gray-500 font-inter">Apr</text>
              <text x="210" y="150" className="text-xs fill-gray-500 font-inter">May</text>
              <text x="250" y="150" className="text-xs fill-gray-500 font-inter">Jun</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Revenue Chart and Revenue by Location Row */}
      <div className="flex gap-4 mb-6">
        {/* Revenue Chart */}
        <div
          className={`flex-1 min-w-0 p-4 rounded-2xl ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3
              className={`text-lg font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Revenue
            </h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Current Week $58,211
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Previous Week $58,768
                </span>
              </div>
            </div>
          </div>
          <div className="h-48 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 500 200">
              {/* Current Week Line */}
              <polyline
                points="50,120 100,100 150,110 200,85 250,95 300,75 350,90 400,70 450,85"
                fill="none"
                stroke={isDark ? "#FFFFFF" : "#000000"}
                strokeWidth="2"
              />
              {/* Previous Week Line */}
              <polyline
                points="50,140 100,125 150,135 200,115 250,130 300,110 350,125 400,105 450,120"
                fill="none"
                stroke={isDark ? "#9CA3AF" : "#6B7280"}
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {/* Month labels */}
              <text x="70" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Jan</text>
              <text x="130" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Feb</text>
              <text x="190" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Mar</text>
              <text x="250" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Apr</text>
              <text x="310" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Jun</text>
              <text x="370" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>May</text>
              <text x="430" y="190" className={`text-xs fill-current ${isDark ? "text-gray-400" : "text-gray-500"}`}>Jun</text>
            </svg>
          </div>
        </div>

        {/* Revenue by Location */}
        <div
          className={`w-48 flex-shrink-0 p-4 rounded-2xl ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h3
            className={`text-lg font-medium ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Revenue by Location
          </h3>
          <div className="space-y-3">
            {locationData.map((location, index) => (
              <div key={index} className="flex justify-between items-center">
                <span
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {location.city}
                </span>
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {location.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Top Selling Products and Total Sales */}
      <div className="flex gap-4">
        {/* Top Selling Products */}
        <div
          className={`flex-1 min-w-0 p-4 rounded-2xl ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h3
            className={`text-lg font-medium ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Top Selling Products
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <th
                    className={`text-left py-2 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Name
                  </th>
                  <th
                    className={`text-left py-2 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Price
                  </th>
                  <th
                    className={`text-left py-2 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Quantity
                  </th>
                  <th
                    className={`text-left py-2 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      isDark ? "border-gray-700" : "border-gray-100"
                    }`}
                  >
                    <td
                      className={`py-2 text-sm ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.name}
                    </td>
                    <td
                      className={`py-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {product.price}
                    </td>
                    <td
                      className={`py-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {product.quantity}
                    </td>
                    <td
                      className={`py-2 text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Sales */}
        <div
          className={`w-48 flex-shrink-0 p-4 rounded-2xl ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h3
            className={`text-lg font-medium ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Total Sales
          </h3>
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke={isDark ? "#374151" : "#E5E7EB"}
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="#10B981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${38.6 * 2.2} ${220 - 38.6 * 2.2}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  38.6%
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {salesData.map((sale, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${sale.color}`}></div>
                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {sale.channel}
                  </span>
                </div>
                <span
                  className={`text-xs font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {sale.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component (simplified - no longer manages RightSidebar)
const Dashboard: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <div className={`h-screen flex flex-col ${isDark ? "bg-black" : "bg-gray-50"}`}>
      {/* Header spans full width */}
      <Header />

      {/* Main content area with sidebar layout */}
      <div className="flex-1 flex overflow-hidden">
        <LeftSidebar />
        <DashboardMiddleContent />
      </div>
    </div>
  );
};

export default Dashboard;