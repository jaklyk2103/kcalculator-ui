import { ChangeEventHandler } from "react";

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  inputType?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function TextInput(props: TextInputProps) {
  const {
    className,
    handleOnChange,
    id,
    inputClassName,
    inputType,
    label,
    labelClassName,
    value,
  } = props;

  return (
    <div className={className}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClassName}
        id={id}
        type={inputType || "text"}
        value={value}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
