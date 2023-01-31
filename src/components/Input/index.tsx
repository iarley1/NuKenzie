import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  label: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export const Input = ({ label, type, placeholder, register }: iInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register}/>
    </>
  );
};
