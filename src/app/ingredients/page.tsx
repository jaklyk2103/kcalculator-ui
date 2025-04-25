// import { useState } from "react";
// import InputTextWithLabel from "../components/inputTextWithLabel";
import { Ingredient } from "../api/ingredients/actions";
import AddIngredientForm from "../components/addIngredientForm/addIngredientForm";

export default function Ingredients() {
  async function handleCreateIngredient(ingredient: Ingredient) {
    "use server";
    await fetch("http://localhost:3000/api/ingredients/create", {
      method: "POST",
      body: JSON.stringify(ingredient),
    });
  }

  // const [name, setName] = useState<string>();
  // const [energy, setEnergy] = useState<number>();
  // const [proteins, setProteins] = useState<number>();
  // const [fats, setFats] = useState<number>();
  // const [carbohydrates, setCarbohydrates] = useState<number>();

  return (
    <div className="w-200 border rounded p-6 shadow">
      <AddIngredientForm handleCreateIngredient={handleCreateIngredient} />
    </div>
  );
}
