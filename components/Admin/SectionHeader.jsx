import React from "react";

const SectionHeader = ({
  title,
  viewAllLink = false,
}) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-lg font-semibold text-dark-400">{title}</h2>
      {viewAllLink && (
        <button className="view-btn text-sm px-3 py-1">View all</button>
      )}
    </div>
  );
};

export default SectionHeader;
