import React from "react";

const NotificationSuccess: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
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
        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L10.2071 14.7071C9.81658 15.0976 9.18342 15.0976 8.79289 14.7071L5.79289 11.7071C5.40237 11.3166 5.40237 10.6834 5.79289 10.2929C6.18342 9.90237 6.81658 9.90237 7.20711 10.2929L9.5 12.5858L14.7929 7.29289C15.1834 6.90237 15.8166 6.90237 16.2071 7.29289Z"
        fill="#52C41A"
      />
    </svg>
  );
};

export default NotificationSuccess;
