import React from "react";

const Experience = ({ className = "" }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 2.25H15C15.825 2.25 16.5 2.925 16.5 3.75V15.75C16.5 16.575 15.825 17.25 15 17.25H3C2.175 17.25 1.5 16.575 1.5 15.75V3.75C1.5 2.925 2.175 2.25 3 2.25H3.75V1.5C3.75 1.0875 4.0875 0.75 4.5 0.75C4.9125 0.75 5.25 1.0875 5.25 1.5V2.25H12.75V1.5C12.75 1.0875 13.0875 0.75 13.5 0.75C13.9125 0.75 14.25 1.0875 14.25 1.5V2.25ZM3.75 15.75H14.25C14.6625 15.75 15 15.4125 15 15V6H3V15C3 15.4125 3.3375 15.75 3.75 15.75Z"
      fill="#797F84"
    />
  </svg>
);

export default Experience;
