import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-2 rounded-lg focus:bg-blue-600 focus:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
