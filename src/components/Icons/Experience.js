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
      d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM8.79 5.25H8.835C9.135 5.25 9.375 5.49 9.375 5.79V9.195L12.2775 10.92C12.54 11.07 12.6225 11.4075 12.465 11.6625C12.315 11.9175 11.985 11.9925 11.73 11.8425L8.6175 9.975C8.385 9.84 8.25 9.5925 8.25 9.33V5.79C8.25 5.49 8.49 5.25 8.79 5.25Z"
      fill="#797F84"
    />
  </svg>
);

export default Experience;
