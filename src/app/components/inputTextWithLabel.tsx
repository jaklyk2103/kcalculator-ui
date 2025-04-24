import { ChangeEvent } from "react";

type InputTextWithLabelProps = {
  id: string;
  label: string;
  value?: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputTextWithLabel({
  id,
  label,
  value,
}: InputTextWithLabelProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <label>{label}</label>
      <input
        id={id}
        className="ingredient-create__input"
        defaultValue={value || ""}
        type="text"
      />
    </div>
  );
}
