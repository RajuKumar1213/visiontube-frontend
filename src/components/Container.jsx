import React from "react";

function Container({ children, width = "max-w-6xl", className = "" }) {
  return (
    <div className={`md:ml-24 md:mr-6 mx-auto  ${width} ${className}`}>
      {children}
    </div>
  );
}

export default Container;
