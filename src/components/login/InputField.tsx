import React from 'react';
import { InputFieldPropsType } from '@/types/auth';

function InputField({
  placeholder,
  type,
  value,
  onChange,
}: InputFieldPropsType) {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <div className="flex flex-row gap-1.5 w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`flex-1 h-12 px-5 py-3.5 text-textBlack text-sm font-medium outline-none shadow-inputShadow rounded-[20px] border-[1px] border-lineGray focus:border-mainColor`}
        />
      </div>
    </div>
  );
}

export default InputField;
