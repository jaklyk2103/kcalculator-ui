type InputTextWithLabelProps = {
  id: string;
  label: string;
};

export default function InputText({ id, label }: InputTextWithLabelProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input id={id} className="ingredient-create__input" type="text" />
    </div>
  );
}
