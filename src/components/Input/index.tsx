import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  label: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  className?: string
}

export const Input = ({ label, type, placeholder, register, className }: iInputProps) => {
  return (
    <div className="div-input">
      <label>{label}</label>
      <input className={className} type={type} placeholder={placeholder} {...register}/>
    </div>
  );
};
