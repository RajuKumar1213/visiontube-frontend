import React from "react";
import spinner from "/spinner.svg";

function SmallSpinner({ h = 5, w = 5 }) {
  return (
    <img
      className={`h-${h} w-${w} flex justify-center mx-auto`}
      src={spinner}
      alt="...Loading"
    />
  );
}

export default SmallSpinner;
