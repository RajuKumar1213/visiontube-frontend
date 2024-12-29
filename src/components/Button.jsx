import React from "react";

function Button({ type = "button", className = "", children, ...props }) {
  return (
    <button
      type={type}
      className={`${className} bg-primary ring-1 ring-slate-700 text-white px-5 py-1.5 rounded-full hover:bg-slate-700 transition duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
