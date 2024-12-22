import React from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
