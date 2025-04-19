type InputTextWithLabelProps = {
  id: string;
  label: string;
};

export default function InputTextWithLabel({
  id,
  label,
}: InputTextWithLabelProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <label>{label}</label>
      <input id={id} className="ingredient-create__input" type="text" />
    </div>
  );
}
