import React from "react";

const Email = ({ className = "" }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM13.06 12.3401L19.6 8.25007C19.85 8.09007 20 7.82007 20 7.53007C20 6.86007 19.27 6.46007 18.7 6.81007L12 11.0001L5.3 6.81007C4.73 6.46007 4 6.86007 4 7.53007C4 7.82007 4.15 8.09007 4.4 8.25007L10.94 12.3401C11.59 12.7501 12.41 12.7501 13.06 12.3401Z"
      fill="#83898E"
    />
  </svg>
);

export default Email;
