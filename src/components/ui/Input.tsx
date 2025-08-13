interface InputPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = '', ...props }: InputPropTypes) {
  return (
    <div>
      <input
        {...props}
        className={`text-textBlack text-base font-medium px-5 py-4 outline-none shadow-inputShadow rounded-[1.25rem] border-[1px] border-lineGray focus:border-[1px] focus:border-mainColor placeholder:text-[#9a9a9a] ${className}`}
      />
    </div>
  );
}
