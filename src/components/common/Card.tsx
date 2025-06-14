import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#23263A] rounded-xl p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;