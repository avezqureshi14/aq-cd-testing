import React from "react";

const NotificationWarning: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20ZM0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11ZM10 15C10 15.5523 10.4477 16 11 16H11.01C11.5623 16 12.01 15.5523 12.01 15C12.01 14.4477 11.5623 14 11.01 14H11C10.4477 14 10 14.4477 10 15ZM11 12C11.5523 12 12 11.5523 12 11V7C12 6.44771 11.5523 6 11 6C10.4477 6 10 6.44771 10 7V11C10 11.5523 10.4477 12 11 12Z"
      fill="#FADB14"
    />
  </svg>
);

export default NotificationWarning;
