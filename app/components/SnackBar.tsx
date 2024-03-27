import React from "react";

interface SnackBarProps {
  message: string;
}

export const SnackBar: React.FC<SnackBarProps> = ({ message }) => {
  return (
    <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Error
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
