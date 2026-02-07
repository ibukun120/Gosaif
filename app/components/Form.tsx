import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInputRowProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  type?: string;
}

const FormInputRow: React.FC<FormInputRowProps> = ({
  label,
  name,
  register,
  errors,
  type = "text",
}) => {
  return (
    <div className="mb-8">
      {/* Label */}
      <label className="block text-sm text-gray-800 mb-2">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        className="w-full border-b-2 border-[#ADADAD] bg-transparent py-2 text-sm outline-none focus:border-black"
      />

      {/* Error */}
      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">
          {String(errors[name]?.message)}
        </p>
      )}
    </div>
  );
};

export default FormInputRow;
