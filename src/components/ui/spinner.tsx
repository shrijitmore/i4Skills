import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Spinner = ({ size = "md", color = "border-primary" }: SpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full ${color} border-t-transparent animate-spin`}
      role="status"
      aria-label="Loading"
    ></div>
  );
};

export default Spinner;
