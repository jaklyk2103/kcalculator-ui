import { ChangeEventHandler } from "react";

type TextInputProps = {
  id: string,
  label: string;
  value: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  inputType?: string;
}

export default function TextInput(props: TextInputProps) {
  const { handleOnChange, id, inputType, label, value } = props;

  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={inputType || "text"} value={value} onChange={handleOnChange}></input>
    </div>
  )
}