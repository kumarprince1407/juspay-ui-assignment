import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import OrderListPage from './OrderList';
import RightSidebar from './RightSidebar';
import { ThemeContext } from './ThemeContext';

const LayoutContent: React.FC = () => {
  const location = useLocation();
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const showRightSidebar = location.pathname === '/dashboard';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`h-screen flex ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<OrderListPage />} />
          </Routes>
        </div>

        {/* Conditional RightSidebar - only on dashboard route */}
        {showRightSidebar && <RightSidebar />}
      </div>
    </ThemeContext.Provider>
  );
};

const Layout: React.FC = () => {
  return (
    <Router>
      <LayoutContent />
    </Router>
  );
};

export default Layout;