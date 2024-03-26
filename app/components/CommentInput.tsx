import React from "react";

interface CommentInputProps {
  id: string;
  name: string;

  required: boolean;
  rows?: string;
  placeholder?: string;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  id,
  name,
  required = false,
  rows = 6,
  placeholder = "Say something...",
  ...props
}) => {
  return (
    <textarea
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
      {...props}
    />
  );
};
