import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  required: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  required = false,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      className="block w-full rounded-md border-0 py-1.5 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      {...props}
    />
  );
};
