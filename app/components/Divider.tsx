import React from "react";

interface DividerProps {}

export const Divider: React.FC<DividerProps> = () => {
  return <hr className="my-12 h-0.5 border-t-0 bg-slate-950" />;
};
