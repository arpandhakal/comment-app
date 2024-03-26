import React from "react";

interface ChipProps {
  text: string;
}

export const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-lime-400 py-1.5 px-3 font-sans text-xs font-bold uppercase text-cyan-900">
      <span>{text}</span>
    </div>
  );
};
