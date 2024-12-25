import React from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row h-screen">
      <div className="w-full  xl:w-auto"> 
        <Sidebar />
      </div>
      <div className="sm:flex-1 sm:p-4 sm:bg-gray-100"> 
        {children}
      </div>
    </div>
  );
};

export default Layout;