import React from "react";

function Container({ children, width = "max-w-6xl", className = "" }) {
  return (
    <div className={`md:ml-28 md:mr-10 ${width} ${className}`}>{children}</div>
  );
}

export default Container;
