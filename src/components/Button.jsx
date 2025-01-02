import React from "react";

function Button({ type = "button", className = "", children, ...props }) {
  return (
    <button
      type={type}
      className={`${className} ring-1 ring-slate-700 text-white px-5 py-1.5  hover:bg-slate-700 transition duration-200 rounded-full`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
