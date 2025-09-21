import React from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import LeftSidebar from "./LeftSidebar";
import MiddleContent from "./MiddleContent";
import RightSidebar from "./RightSidebar";

// Main App Component
const OrderListPage: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`w-full h-screen flex flex-col overflow-hidden ${
          isDark ? "bg-black" : "bg-gray-50"
        }`}
      >
        <Header />
        <div className="flex-1 flex w-auto">
          <LeftSidebar />
          <MiddleContent />

        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default OrderListPage;

// import React from "react";
// import {
//   Search,
//   Menu,
//   Star,
//   Plus,
//   Filter,
//   ArrowUpDown,
//   Calendar,
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
//   FolderOpen,
//   BookOpen,
//   FileText,
//   MessageCircle,
//   ShoppingBag,
//   ChartPie,
// } from "lucide-react";
// import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

// import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
// import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
// import ViewSidebarOutlined from "@mui/icons-material/ViewSidebarOutlined";

// import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
// import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
// import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

// // Types
// interface Order {
//   id: string;
//   user: {
//     name: string;
//     avatar: string;
//   };
//   project: string;
//   address: string;
//   date: string;
//   status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
// }

// // Theme Context
// const ThemeContext = React.createContext({
//   isDark: false,
//   toggleTheme: () => {},
// });

// // Header Component
// const Header: React.FC = () => {
//   const { isDark, toggleTheme } = React.useContext(ThemeContext);

//   return (
//     <header
//       className={`flex items-center justify-between px-6 py-4 border-b w-[1245px] h-16 ${
//         isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       }`}
//     >
//       <div className="flex items-center space-x-4">
//         <Menu
//           className={`w-5 h-5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
//         />
//         <Star
//           className={`w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`}
//         />
//         <span
//           className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
//         >
//           Dashboards
//         </span>
//         <span
//           className={`text-sm font-medium ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           Default
//         </span>
//       </div>

//       <div className="flex items-center space-x-2">
//         {/* Search Input */}
//         <div className="relative">
//           <Search
//             className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
//               isDark ? "text-gray-500" : "text-gray-400"
//             }`}
//           />
//           <input
//             type="text"
//             placeholder="Search"
//             className={`pl-10 pr-12 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 h-9 ${
//               isDark
//                 ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
//                 : "border-gray-200 bg-black/10 text-gray-900 placeholder-gray-400"
//             }`}
//           />
//           <span
//             className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm ${
//               isDark ? "text-gray-500" : "text-gray-400"
//             }`}
//           >
//             ⌘/
//           </span>
//         </div>

//         {/* Icon Group */}
//         <div className="flex items-center space-x-1 ml-4">
//           <div className="flex items-center justify-center w-9 h-9">
//             <button onClick={toggleTheme} className="cursor-pointer">
//               {isDark ? (
//                 <LightModeTwoToneIcon
//                   className={`w-5 h-5 ${
//                     isDark
//                       ? "text-gray-300 hover:text-white"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                 />
//               ) : (
//                 <LightModeTwoToneIcon
//                   className={`w-5 h-5 ${
//                     isDark
//                       ? "text-gray-300 hover:text-white"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                 />
//               )}
//             </button>
//           </div>
//           <div className="flex items-center justify-center w-9 h-9">
//             <HistoryOutlinedIcon
//               className={`w-5 h-5 cursor-pointer ${
//                 isDark
//                   ? "text-gray-300 hover:text-white"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             />
//           </div>
//           <div className="flex items-center justify-center w-9 h-9">
//             <NotificationsTwoToneIcon
//               className={`w-5 h-5 cursor-pointer ${
//                 isDark
//                   ? "text-gray-300 hover:text-white"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             />
//           </div>
//           <div className="flex items-center justify-center w-9 h-9">
//             <ViewSidebarOutlined
//               className={`w-5 h-5 cursor-pointer rotate-180 ${
//                 isDark
//                   ? "text-gray-400 hover:text-gray-300"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Left Sidebar Component
// const LeftSidebar: React.FC = () => {
//   const { isDark } = React.useContext(ThemeContext);

//   return (
//     <div
//       className={`w-[212px] h-[1024px] border-r flex flex-col pt-5 pr-4 pb-5 pl-4 gap-4 ${
//         isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
//           <span className="text-white text-xs font-bold">B</span>
//         </div>
//         <span
//           className={`ml-2 text-sm font-medium ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           ByeWind
//         </span>
//       </div>

//       {/* Navigation Tabs */}
//       <div>
//         <div
//           className={`flex rounded-lg p-1 ${
//             isDark ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <button
//             className={`flex-1 text-sm py-2 font-medium ${
//               isDark ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Favorites
//           </button>
//           <button
//             className={`flex-1 text-sm py-2 font-medium ${
//               isDark ? "text-gray-500" : "text-gray-400"
//             }`}
//           >
//             Recently
//           </button>
//         </div>
//       </div>

//       {/* Favorites Section */}
//       <div>
//         <div className="space-y-1">
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <span
//               className={`w-2 h-2 rounded-full mr-3 ${
//                 isDark ? "bg-gray-500" : "bg-gray-400"
//               }`}
//             ></span>
//             Overview
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <span
//               className={`w-2 h-2 rounded-full mr-3 ${
//                 isDark ? "bg-gray-500" : "bg-gray-400"
//               }`}
//             ></span>
//             Projects
//           </div>
//         </div>
//       </div>

//       {/* Dashboards Section */}
//       <div>
//         <div
//           className={`text-xs font-medium uppercase tracking-wider mb-3 ${
//             isDark ? "text-gray-500" : "text-gray-400"
//           }`}
//         >
//           Dashboards
//         </div>
//         <div className="space-y-1">
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark ? "text-white bg-gray-800" : "text-gray-700 bg-black/10"
//             }`}
//           >
//             <ChartPie className="w-4 h-4 mr-3" />
//             Default
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <ShoppingBag
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             eCommerce
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FolderOpen
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Projects
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <BookOpen
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Online Courses
//           </div>
//         </div>
//       </div>

//       {/* Pages Section */}
//       <div>
//         <div
//           className={`text-xs font-medium uppercase tracking-wider mb-3 ${
//             isDark ? "text-gray-500" : "text-gray-400"
//           }`}
//         >
//           Pages
//         </div>
//         <div className="space-y-1">
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <AccountBoxTwoToneIcon
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             User Profile
//           </div>

//           {/* Sub-menu items for User Profile */}
//           <div className="ml-7 space-y-1">
//             <div
//               className={`text-sm px-2 py-1 rounded cursor-pointer ${
//                 isDark
//                   ? "text-gray-400 hover:bg-gray-800"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Overview
//             </div>
//             <div
//               className={`text-sm px-2 py-1 rounded cursor-pointer ${
//                 isDark
//                   ? "text-gray-400 hover:bg-gray-800"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Projects
//             </div>
//             <div
//               className={`text-sm px-2 py-1 rounded cursor-pointer ${
//                 isDark
//                   ? "text-gray-400 hover:bg-gray-800"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Campaigns
//             </div>
//             <div
//               className={`text-sm px-2 py-1 rounded cursor-pointer ${
//                 isDark
//                   ? "text-gray-400 hover:bg-gray-800"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Documents
//             </div>
//             <div
//               className={`text-sm px-2 py-1 rounded cursor-pointer ${
//                 isDark
//                   ? "text-gray-400 hover:bg-gray-800"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Followers
//             </div>
//           </div>

//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <ContactMailTwoToneIcon
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Account
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <GroupsOutlinedIcon
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Corporate
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FileText
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Blog
//           </div>
//           <div
//             className={`flex items-center px-2 py-2 text-sm rounded cursor-pointer ${
//               isDark
//                 ? "text-gray-300 hover:bg-gray-800"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <MessageCircle
//               className={`w-4 h-4 mr-3 ${
//                 isDark ? "text-gray-400" : "text-gray-500"
//               }`}
//             />
//             Social
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Status Badge Component
// const StatusBadge: React.FC<{ status: Order["status"] }> = ({ status }) => {
//   const getStatusColor = (status: Order["status"]) => {
//     switch (status) {
//       case "In Progress":
//         return "text-violet-400";
//       case "Complete":
//         return "text-green-400";
//       case "Pending":
//         return "text-blue-400";
//       case "Approved":
//         return "text-yellow-400";
//       case "Rejected":
//         return "text-gray-400";
//       default:
//         return "text-gray-400";
//     }
//   };

//   return (
//     <span
//       className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
//         status
//       )}`}
//     >
//       <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
//       {status}
//     </span>
//   );
// };

// // Middle Content Component
// const MiddleContent: React.FC = () => {
//   const { isDark } = React.useContext(ThemeContext);
//   const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
//     new Set()
//   );
//   const [selectAll, setSelectAll] = React.useState(false);

//   const orders: Order[] = [
//     {
//       id: "#CM9801",
//       user: { name: "Natali Craig", avatar: "/api/placeholder/32/32" },
//       project: "Landing Page",
//       address: "Meadow Lane Oakland",
//       date: "Just now",
//       status: "In Progress",
//     },
//     {
//       id: "#CM9802",
//       user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
//       project: "CRM Admin pages",
//       address: "Larry San Francisco",
//       date: "A minute ago",
//       status: "Complete",
//     },
//     {
//       id: "#CM9803",
//       user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
//       project: "Client Project",
//       address: "Bagwell Avenue Ocala",
//       date: "1 hour ago",
//       status: "Pending",
//     },
//     {
//       id: "#CM9804",
//       user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
//       project: "Admin Dashboard",
//       address: "Washburn Baton Rouge",
//       date: "Yesterday",
//       status: "Approved",
//     },
//     {
//       id: "#CM9805",
//       user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
//       project: "App Landing Page",
//       address: "Nest Lane Olivette",
//       date: "Feb 2, 2023",
//       status: "Rejected",
//     },
//     // Duplicate entries
//     {
//       id: "#CM9806",
//       user: { name: "Natali Craig", avatar: "/api/placeholder/32/32" },
//       project: "Landing Page",
//       address: "Meadow Lane Oakland",
//       date: "Just now",
//       status: "In Progress",
//     },
//     {
//       id: "#CM9807",
//       user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
//       project: "CRM Admin pages",
//       address: "Larry San Francisco",
//       date: "A minute ago",
//       status: "Complete",
//     },
//     {
//       id: "#CM9808",
//       user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
//       project: "Client Project",
//       address: "Bagwell Avenue Ocala",
//       date: "1 hour ago",
//       status: "Pending",
//     },
//     {
//       id: "#CM9809",
//       user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
//       project: "Admin Dashboard",
//       address: "Washburn Baton Rouge",
//       date: "Yesterday",
//       status: "Approved",
//     },
//     {
//       id: "#CM9810",
//       user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
//       project: "App Landing Page",
//       address: "Nest Lane Olivette",
//       date: "Feb 2, 2023",
//       status: "Rejected",
//     },
//   ];

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedRows(new Set());
//     } else {
//       setSelectedRows(new Set(orders.map((order) => order.id)));
//     }
//     setSelectAll(!selectAll);
//   };

//   const handleRowSelect = (orderId: string) => {
//     const newSelectedRows = new Set(selectedRows);
//     if (newSelectedRows.has(orderId)) {
//       newSelectedRows.delete(orderId);
//     } else {
//       newSelectedRows.add(orderId);
//     }
//     setSelectedRows(newSelectedRows);
//     setSelectAll(newSelectedRows.size === orders.length);
//   };

//   return (
//     <div
//       className={`flex-1 w-[1172px] h-auto overflow-hidden ${
//         isDark ? "bg-gray-800" : "bg-gray-50"
//       }`}
//     >
//       {/* Content Header */}
//       <div
//         className={`pt-2 pr-3 pb-2 pl-2 border-b ${
//           isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//         }`}
//       >
//         <h2
//           className={`flex font-semibold ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           Order List
//         </h2>
//       </div>

//       {/* Toolbar */}
//       <div className="h-[536px]">
//         <div
//           className={`pt-2 pr-3 pb-2 pl-2 ${
//             isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//           }`}
//         >
//           <div
//             className={`flex items-center justify-between px-4 py-2 h-11 min-h-11 ${
//               isDark ? "bg-gray-800" : "bg-[#F7F9FB]"
//             }`}
//           >
//             <div className="flex items-center gap-4">
//               <button
//                 className={`p-2 ${
//                   isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
//                 }`}
//               >
//                 <Plus
//                   className={`w-5 h-5 ${
//                     isDark ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 />
//               </button>
//               <button
//                 className={`p-2 ${
//                   isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
//                 }`}
//               >
//                 <Filter
//                   className={`w-5 h-5 ${
//                     isDark ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 />
//               </button>
//               <button
//                 className={`p-2 ${
//                   isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
//                 }`}
//               >
//                 <ArrowUpDown
//                   className={`w-5 h-5 ${
//                     isDark ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 />
//               </button>
//             </div>
//             <div className="relative">
//               <Search
//                 className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
//                   isDark ? "text-gray-500" : "text-gray-400"
//                 }`}
//               />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className={`pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 ${
//                   isDark
//                     ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
//                     : "border-gray-200 bg-white text-gray-900"
//                 }`}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div
//           className={`flex-1 overflow-auto ${
//             isDark ? "bg-gray-900" : "bg-white"
//           }`}
//         >
//           <table className="w-full min-w-full">
//             <thead
//               className={`border-b ${
//                 isDark ? "border-gray-700" : "border-gray-200"
//               }`}
//             >
//               <tr className="h-10 min-h-10">
//                 <th className="pt-2 pr-3 pb-2 pl-2 text-left group">
//                   <input
//                     type="checkbox"
//                     checked={selectAll}
//                     onChange={handleSelectAll}
//                     className={`rounded border-gray-300 transition-opacity duration-200 ${
//                       selectAll ? "opacity-100" : "group-hover:opacity-100"
//                     }`}
//                     style={{
//                       accentColor: "#000000",
//                     }}
//                   />
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   Order ID
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   User
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   Project
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   Address
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   Date
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   Status
//                 </th>
//                 <th
//                   className={`pt-2 pr-3 pb-2 pl-2 text-left text-xs font-medium tracking-wider w-12 ${
//                     isDark ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   {/*Actions*/}
//                 </th>
//               </tr>
//             </thead>
//             <tbody
//               className={`divide-y ${
//                 isDark ? "divide-gray-700" : "divide-gray-200"
//               }`}
//             >
//               {orders.map((order, index) => {
//                 const isSelected = selectedRows.has(order.id);
//                 return (
//                   <tr
//                     key={`${order.id}-${index}`}
//                     className={`group ${
//                       isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <td className="pt-2 pr-3 pb-2 pl-2">
//                       <input
//                         type="checkbox"
//                         checked={isSelected}
//                         onChange={() => handleRowSelect(order.id)}
//                         className={`rounded border-gray-300 focus:ring-black transition-opacity duration-200 ${
//                           isSelected
//                             ? "opacity-100"
//                             : "opacity-0 group-hover:opacity-100"
//                         }`}
//                         style={{
//                           accentColor: "#000000",
//                         }}
//                       />
//                     </td>
//                     <td
//                       className={`pt-2 pr-3 pb-2 pl-2 text-sm ${
//                         isDark ? "text-white" : "text-black"
//                       }`}
//                     >
//                       {order.id}
//                     </td>
//                     <td className="pt-2 pr-3 pb-2 pl-2">
//                       <div className="flex items-center">
//                         <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
//                           <span className="text-xs text-black">
//                             {order.user.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")}
//                           </span>
//                         </div>
//                         <span
//                           className={`text-sm ${
//                             isDark ? "text-white" : "text-black"
//                           }`}
//                         >
//                           {order.user.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td
//                       className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
//                         isDark ? "text-white" : "text-black"
//                       }`}
//                     >
//                       {order.project}
//                     </td>
//                     <td
//                       className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
//                         isDark ? "text-white" : "text-black"
//                       }`}
//                     >
//                       {order.address}
//                     </td>
//                     <td
//                       className={`pt-2 pr-3 pb-2 pl-2 text-sm text-left ${
//                         isDark ? "text-white" : "text-black"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <Calendar
//                           className={`w-4 h-4 mr-1 text-left ${
//                             isDark ? "text-white" : "text-black"
//                           }`}
//                         />
//                         {order.date}
//                       </div>
//                     </td>
//                     <td className="pt-2 pr-3 pb-2 pl-2 text-left">
//                       <StatusBadge status={order.status} />
//                     </td>
//                     <td className="pt-2 pr-3 pb-2 pl-2 text-center">
//                       <button>
//                         <MoreHorizontal
//                           className={`w-4 h-4 ${
//                             isDark
//                               ? "text-gray-500 hover:text-gray-300"
//                               : "text-gray-400 hover:text-gray-600"
//                           }`}
//                         />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div
//           className={`px-6 py-4 border-t ${
//             isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//           }`}
//         >
//           <div className="flex items-center justify-end space-x-2">
//             <button
//               className={`p-2 rounded ${
//                 isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
//               }`}
//             >
//               <ChevronLeft
//                 className={`w-4 h-4 ${
//                   isDark ? "text-gray-300" : "text-gray-600"
//                 }`}
//               />
//             </button>
//             <button
//               className={`px-3 py-2 rounded text-sm ${
//                 isDark ? "text-white bg-gray-700" : "text-black bg-gray-100"
//               }`}
//             >
//               1
//             </button>
//             <button
//               className={`px-3 py-2 rounded text-sm ${
//                 isDark
//                   ? "text-gray-300 hover:bg-gray-800"
//                   : "text-black hover:bg-gray-50"
//               }`}
//             >
//               2
//             </button>
//             <button
//               className={`px-3 py-2 rounded text-sm ${
//                 isDark
//                   ? "text-gray-300 hover:bg-gray-800"
//                   : "text-black hover:bg-gray-50"
//               }`}
//             >
//               3
//             </button>
//             <button
//               className={`px-3 py-2 rounded text-sm ${
//                 isDark
//                   ? "text-gray-300 hover:bg-gray-800"
//                   : "text-black hover:bg-gray-50"
//               }`}
//             >
//               4
//             </button>
//             <button
//               className={`px-3 py-2 rounded text-sm ${
//                 isDark
//                   ? "text-gray-300 hover:bg-gray-800"
//                   : "text-black hover:bg-gray-50"
//               }`}
//             >
//               5
//             </button>
//             <button
//               className={`p-2 rounded ${
//                 isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
//               }`}
//             >
//               <ChevronRight
//                 className={`w-4 h-4 ${
//                   isDark ? "text-gray-300" : "text-gray-600"
//                 }`}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Right Sidebar Component (Empty for Page 1)
// const RightSidebar: React.FC = () => {
//   return (
//     <div className="w-0 bg-white border-l border-gray-200">
//       {/* Right sidebar is not visible in Page 1 */}
//     </div>
//   );
// };

// // Main App Component
// const OrderListPage: React.FC = () => {
//   const [isDark, setIsDark] = React.useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       <div
//         className={`w-full h-screen flex flex-col overflow-hidden ${
//           isDark ? "bg-gray-800" : "bg-gray-50"
//         }`}
//       >
//         <Header />
//         <div className="flex-1 flex w-full">
//           <LeftSidebar />
//           <MiddleContent />
//           <RightSidebar />
//         </div>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default OrderListPage;
