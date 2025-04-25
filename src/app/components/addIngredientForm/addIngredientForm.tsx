"use client";

import { Ingredient } from "@/app/api/ingredients/actions";
import "./addIngredientForm.css";
import { useForm } from "react-hook-form";

type AddIngredientFormProps = {
  handleCreateIngredient: (ingredient: Ingredient) => Promise<void>;
};

export default function AddIngredientForm({
  handleCreateIngredient,
}: AddIngredientFormProps) {
  // const [name, setName] = useState<string>();
  // const [energy, setEnergy] = useState<number>();
  // const [proteins, setProteins] = useState<number>();
  // const [fats, setFats] = useState<number>();
  // const [carbohydrates, setCarbohydrates] = useState<number>();

  // use register instead of useState?
  const { register, handleSubmit, getValues } = useForm<Ingredient>({
    defaultValues: {
      name: "",
      calories: 0,
      proteins: 0,
      fats: 0,
      carbohydrates: 0,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="ingredient-create__field-wrapper">
          <label>Name</label>
          <input
            className="ingredient-create__input"
            {...register("name", { required: true })}
          />
        </div>

        <div className="ingredient-create__field-wrapper">
          <label>Energy</label>
          <input
            className="ingredient-create__input"
            {...register("calories", { required: true })}
          />
        </div>

        <div className="ingredient-create__field-wrapper">
          <label>Proteins</label>
          <input
            className="ingredient-create__input"
            {...register("proteins", { required: true })}
          />
        </div>

        <div className="ingredient-create__field-wrapper">
          <label>Fats</label>
          <input
            className="ingredient-create__input"
            {...register("fats", { required: true })}
          />
        </div>

        <div className="ingredient-create__field-wrapper">
          <label>Carbohydrates</label>
          <input
            className="ingredient-create__input"
            {...register("carbohydrates", { required: true })}
          />
        </div>
      </div>

      <button
        className="cursor-pointer border rounded px-1 py-1.5 w-40"
        onClick={handleSubmit(() => handleCreateIngredient(getValues()))}
      >
        Add
      </button>
    </div>
  );
}
