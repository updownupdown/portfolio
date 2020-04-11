import React from "react";

const ArrowUp = ({ className = "" }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.825 15L11.175 22.65C10.525 23.3 10.525 24.35 11.175 25C11.825 25.65 12.875 25.65 13.525 25L20.0083 18.5333L26.475 25C27.125 25.65 28.175 25.65 28.825 25C29.475 24.35 29.475 23.3 28.825 22.65L21.175 15C20.5417 14.35 19.475 14.35 18.825 15Z"
      fill="#2774DE"
    />
  </svg>
);

export default ArrowUp;
