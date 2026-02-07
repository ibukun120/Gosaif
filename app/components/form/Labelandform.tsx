"use client"

import React from "react";
import { useForm } from "react-hook-form";
import FormInputRow from "../Form";


interface BusinessFormValues {
  companyName: string;
  businessEmail: string;
  contactName: string;
  contactRole: string;
  phoneNumber: string;
  businessAddress: string;
  cacNumber: string;
}

const Label: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessFormValues>();

  const onSubmit = (data: BusinessFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white text-[#353535] font-semibold"
    >
      <FormInputRow
        label="What is your Agency/Company name?"
        name="companyName"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="Business Email (must be verified)"
        name="businessEmail"
        type="email"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="Contact Person Name"
        name="contactName"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="Contact Person Role/Title"
        name="contactRole"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="Phone Number"
        name="phoneNumber"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="Business Address (street, state, LGA)"
        name="businessAddress"
        register={register}
        errors={errors}
      />

      <FormInputRow
        label="CAC/Registration Number"
        name="cacNumber"
        register={register}
        errors={errors}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 rounded-md bg-[#4AAB80] uppercase px-8 py-3 text-sm font-medium text-white transition hover:bg-green-700"
      >
        SUBMIT FORM
      </button>
    </form>
  );
};

export default Label;
