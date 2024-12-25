import React from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex xl:h-screen">
      <Sidebar />
      <div className="xl:flex-1 xl:p-4 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
