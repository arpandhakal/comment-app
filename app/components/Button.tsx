import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  type,
  handleClick,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
          text-white bg-indigo-600 hover:bg-indigo-500
          font-medium rounded-full text-sm px-5 py-2 text-center
        `}
      {...props}
    >
      {buttonText}
    </button>
  );
};
