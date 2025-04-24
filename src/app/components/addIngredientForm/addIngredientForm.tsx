"use client";

import { useState } from "react";
import InputTextWithLabel from "../../components/inputTextWithLabel";
import "./addIngredientForm.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Ingredient = {
  name: string;
  energy: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
};

type AddIngredientFormProps = {
  handleAddIngredient: (ingredient: Ingredient) => void;
};

export default function AddIngredientForm({
  handleAddIngredient,
}: AddIngredientFormProps) {
  // const [name, setName] = useState<string>();
  // const [energy, setEnergy] = useState<number>();
  // const [proteins, setProteins] = useState<number>();
  // const [fats, setFats] = useState<number>();
  // const [carbohydrates, setCarbohydrates] = useState<number>();

  // use register instead of useState?
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<>();

  function handleAddClick() {}

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <InputTextWithLabel
          id="ingredients-create__name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <InputTextWithLabel
          id="ingredients-create__energy"
          label="Energy"
          value={energy}
          onChange={(event) => setEnergy(Number(event.currentTarget.value))}
        />
        <InputTextWithLabel
          id="ingredients-create__proteins"
          label="Proteins"
          value={proteins}
          onChange={(event) => setProteins(Number(event.currentTarget.value))}
        />
        <InputTextWithLabel
          id="ingredients-create__fats"
          label="Fats"
          value={fats}
          onChange={(event) => setFats(Number(event.currentTarget.value))}
        />
        <InputTextWithLabel
          id="ingredients-create__carbohydrates"
          label="Carbohydrates"
          value={carbohydrates}
          onChange={(event) =>
            setCarbohydrates(Number(event.currentTarget.value))
          }
        />
      </div>

      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}
