import React from "react";

const Button = ({
  title,
  borderColor,
  bgColor,
  iconTitle,
  textColor,
  srcTitle,
  className,
}) => {
  return (
    <button
      style={{
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
      }}
      className={`px-3.5 py-2 rounded-xl flex items-center  gap-1 ${className}`}
    >
      {srcTitle && <img src={srcTitle} alt="logo" style={{ width: 20 }} />}
      <span>{iconTitle}</span>
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default Button;
