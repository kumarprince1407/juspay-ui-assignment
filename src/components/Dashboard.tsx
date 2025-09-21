import React from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

// Dashboard Middle Content Component
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
      className={`flex-1 p-6 overflow-y-auto ${
        isDark ? "bg-gray-900" : "bg-gray-50"
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
        <div className="flex gap-4">
          {/* First Column - Stats Cards */}
          <div className="space-y-4">
            {/* Customers Card */}
            <div
              className={`p-4 rounded-lg mb-9 w-[202px] h-[112px] ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around">
                <div
                  className={`text-14 text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-1`}
                >
                  Customers
                </div>
                <div className="flex justify-between">
                  <div
                    className={`text-[24px] font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    3,781
                  </div>
                  <div className="text-sm text-right items-center pt-2 ">
                    +11.01% <span className="ml-1"> ↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div
              className={`p-4 rounded-lg mt-9 w-[202px] h-[112px] ${
                isDark ? "bg-gray-800" : "bg-gray-50"
              } shadow-sm`}
            >
              <div className="flex flex-col  justify-around">
                <div
                  className={`text-14 text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-1`}
                >
                  Revenue
                </div>
                <div className="flex justify-between">
                  <div
                    className={`text-[24px] font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    $695
                  </div>
                  <div className="text-sm text-right items-center pt-2 ">
                    +15.03% <span className="ml-1"> ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - More Stats Cards */}
          <div className="space-y-4">
            {/* Orders Card */}
            <div
              className={`p-4 rounded-lg mb-9 w-[202px] h-[112px] ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around">
                <div
                  className={`text-14 text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-1`}
                >
                  Orders
                </div>
                <div className="flex justify-between">
                  <div
                    className={`text-[24px] font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    1,219
                  </div>
                  <div className="text-sm text-right items-center pt-2 ">
                    -0.03% <span className="ml-1"> ↘</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div
              className={`p-4 rounded-lg mb-9 w-[202px] h-[112px] ${
                isDark ? "bg-gray-800" : "bg-blue-50"
              } shadow-sm`}
            >
              <div className="flex flex-col justify-around">
                <div
                  className={`text-14 text-left font-semibold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-1`}
                >
                  Growth
                </div>
                <div className="flex justify-between">
                  <div
                    className={`text-[24px] font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    30.1%
                  </div>
                  <div className="text-sm text-right items-center pt-2 ">
                    +6.08% <span className="ml-1"> ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Projections vs Actuals Chart */}
        <div
          className={`w-[432px] h-[252px] p-6 rounded-2xl flex flex-col gap-2 ${
            isDark ? "bg-gray-800" : "bg-[#F7F9FB]"
          } shadow-sm`}
        >
          {/* Header */}
          <div className="w-[384px] h-5">
            <h3 className="font-inter font-semibold text-sm leading-5 tracking-normal text-[#1C1C1C]">
              Projections vs Actuals
            </h3>
          </div>

          {/* Bar Chart Container */}
          <div className="w-[384px] h-[168px] flex items-end justify-center gap-4">
            <svg width="100%" height="100%" viewBox="0 0 384 168">
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

              {/* Horizontal grid lines */}
              <line
                x1="25"
                y1="12"
                x2="384"
                y2="12"
                stroke="#E5E7EB"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="25"
                y1="42"
                x2="384"
                y2="42"
                stroke="#E5E7EB"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="25"
                y1="72"
                x2="384"
                y2="72"
                stroke="#E5E7EB"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="25"
                y1="102"
                x2="384"
                y2="102"
                stroke="#E5E7EB"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="25"
                y1="132"
                x2="384"
                y2="132"
                stroke="#E5E7EB"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Jan - Single stacked bar */}
              <rect
                x="55"
                y="72"
                width="20"
                height="40"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="55"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* Feb - Single stacked bar */}
              <rect
                x="105"
                y="32"
                width="20"
                height="60"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="105"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* Mar - Single stacked bar */}
              <rect
                x="155"
                y="57"
                width="20"
                height="35"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="155"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* Apr - Single stacked bar */}
              <rect
                x="205"
                y="42"
                width="20"
                height="50"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="205"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* May - Single stacked bar */}
              <rect
                x="255"
                y="72"
                width="20"
                height="20"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="255"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* Jun - Single stacked bar */}
              <rect
                x="305"
                y="42"
                width="20"
                height="50"
                fill="#5B9BD5"
                rx="2"
              />
              <rect
                x="305"
                y="92"
                width="20"
                height="40"
                fill="#C6D7EB"
                rx="2"
              />

              {/* Month labels */}
              <text x="62" y="150" className="text-xs fill-gray-500 font-inter">
                Jan
              </text>
              <text
                x="112"
                y="150"
                className="text-xs fill-gray-500 font-inter"
              >
                Feb
              </text>
              <text
                x="162"
                y="150"
                className="text-xs fill-gray-500 font-inter"
              >
                Mar
              </text>
              <text
                x="212"
                y="150"
                className="text-xs fill-gray-500 font-inter"
              >
                Apr
              </text>
              <text
                x="262"
                y="150"
                className="text-xs fill-gray-500 font-inter"
              >
                May
              </text>
              <text
                x="312"
                y="150"
                className="text-xs fill-gray-500 font-inter"
              >
                Jun
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Revenue Chart and Revenue by Location Row */}
      <div className="flex gap-7 mb-6">
        {/* Revenue Chart */}
        <div
          className={`w-[662px] min-w-[662px] h-[318px] p-6 rounded-2xl ${
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
          <div className="h-[242px] flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 600 242">
              {/* Grid lines */}
              <defs>
                <pattern
                  id="grid"
                  width="60"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 40"
                    fill="none"
                    stroke={isDark ? "#374151" : "#F3F4F6"}
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Y-axis labels */}
              <text
                x="15"
                y="30"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                30M
              </text>
              <text
                x="15"
                y="90"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                20M
              </text>
              <text
                x="15"
                y="150"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                10M
              </text>
              <text
                x="25"
                y="220"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                0
              </text>

              {/* Current Week Line (Black/Dark) */}
              <polyline
                points="60,160 120,130 180,140 240,110 300,125 360,100 420,115 480,95 540,110"
                fill="none"
                stroke={isDark ? "#FFFFFF" : "#000000"}
                strokeWidth="2"
              />

              {/* Previous Week Line (Gray, Dashed) */}
              <polyline
                points="60,180 120,165 180,170 240,150 300,165 360,140 420,155 480,135 540,150"
                fill="none"
                stroke={isDark ? "#9CA3AF" : "#6B7280"}
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Month labels */}
              <text
                x="80"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Jan
              </text>
              <text
                x="160"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Feb
              </text>
              <text
                x="240"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Mar
              </text>
              <text
                x="320"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Apr
              </text>
              <text
                x="400"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                May
              </text>
              <text
                x="480"
                y="235"
                className={`text-xs fill-current ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Jun
              </text>
            </svg>
          </div>
        </div>

        {/* Revenue by Location */}
        <div
          className={`w-[202px] min-w-[202px] max-w-[272px] h-[318px] p-6 rounded-2xl ${
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
          <div className="space-y-4">
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
      <div className="flex gap-7">
        {/* Top Selling Products */}
        <div
          className={`flex-1 p-6 rounded-2xl ${
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
                      className={`py-3 text-sm ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.name}
                    </td>
                    <td
                      className={`py-3 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {product.price}
                    </td>
                    <td
                      className={`py-3 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {product.quantity}
                    </td>
                    <td
                      className={`py-3 text-sm font-medium ${
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
          className={`w-[202px] min-w-[202px] max-w-[272px] p-6 rounded-2xl ${
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
            <div className="relative w-32 h-32">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={isDark ? "#374151" : "#E5E7EB"}
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#10B981"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${38.6 * 2.51} ${251.2 - 38.6 * 2.51}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-lg font-semibold ${
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
                  <div className={`w-3 h-3 rounded-full ${sale.color}`}></div>
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {sale.channel}
                  </span>
                </div>
                <span
                  className={`text-sm font-medium ${
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

// Main Dashboard Component
const Dashboard: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`w-[1200px] h-screen flex flex-col overflow-hidden ${
          isDark ? "bg-black" : "bg-gray-50"
        }`}
      >
        <Header />
        <div className="flex-1 flex w-auto">
          <LeftSidebar />
          <DashboardMiddleContent />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
