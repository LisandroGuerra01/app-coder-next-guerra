import React from "react";

const Button = ({ children, className='', ...args }) => {
  return (
    <button className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${className}`} {...args}>
      {children}
    </button>
  );
};

export default Button;