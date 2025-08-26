import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      label: "Borrowed Books",
      count: "145",
      trend: "down",
      trendValue: "2",
    },
    {
      label: "Total Users",
      count: "317",
      trend: "up",
      trendValue: "4",
    },
    {
      label: "Total Books",
      count: "163",
      trend: "up",
      trendValue: "2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <div className="stat-info">
            <span className="stat-label">{stat.label}</span>
            <div className="flex items-center gap-1">
              {stat.trend === "up" ? (
                <TrendingUp className="size-4 text-green-500" />
              ) : (
                <TrendingDown className="size-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trendValue}
              </span>
            </div>
          </div>
          <div className="stat-count">{stat.count}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
