import React from "react";

const UserCard = ({
  name,
  email,
  initials,
  bgColor,
}) => {
  return (
    <div className="user-card hover:shadow-md transition-shadow duration-200 w-full">
      <div
        className={`size-16 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-sm ${bgColor}`}
      >
        {initials}
      </div>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
    </div>
  );
};

export default UserCard;
