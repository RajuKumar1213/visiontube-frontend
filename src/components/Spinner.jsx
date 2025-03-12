import React from "react";
import spinner from "./spinner.svg";

function Spinner() {
  return (
    <img
      className="h-8 w-8 mt-24 flex justify-center mx-auto"
      src={spinner}
      alt="...Loading"
    />
  );
}

export default Spinner;
