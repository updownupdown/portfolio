import React from "react";

const Linkedin = ({ className = "" }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 19H5V10H8V19ZM6.5 8.3C5.5 8.3 4.7 7.5 4.7 6.5C4.7 5.5 5.5 4.7 6.5 4.7C7.5 4.7 8.3 5.5 8.3 6.5C8.3 7.5 7.5 8.3 6.5 8.3ZM19 19H16V13.7C16 12.9 15.3 12.2 14.5 12.2C13.7 12.2 13 12.9 13 13.7V19H10V10H13V11.2C13.5 10.4 14.6 9.8 15.5 9.8C17.4 9.8 19 11.4 19 13.3V19Z"
      fill="#83898E"
    />
  </svg>
);

export default Linkedin;
