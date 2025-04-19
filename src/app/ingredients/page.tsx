import { useState } from "react";
import InputTextWithLabel from "../components/inputTextWithLabel";
import "./ingredients.css";

export default function Ingredients() {
  const [ name, setName ] = useState();
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="flex flex-col gap-1">
        <label>Name</label>
        <input
          id="ingredients-create__name"
          className="ingredient-create__input"
          type="text"
        />
      </div> */}
      <InputTextWithLabel id="ingredients-create__name" label="Name" />
      <InputTextWithLabel id="ingredients-create__energy" label="Energy" />
      <InputTextWithLabel id="ingredients-create__proteins" label="Proteins" />
      <InputTextWithLabel id="ingredients-create__fats" label="Fats" />
      <InputTextWithLabel
        id="ingredients-create__carbohydrates"
        label="Carbohydrates"
        onChange={(event) => }
      />

      {/* <div className="flex flex-col gap-1">
        <label>Energy</label>
        <input
          id="ingredients-create__energy"
          className="ingredient-create__input"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Proteins</label>
        <input
          id="ingredients-create__proteins"
          className="ingredient-create__input"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Fats</label>
        <input
          id="ingredients-create__fats"
          className="ingredient-create__input"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Carbohydrates</label>
        <input
          id="ingredients-create__carbohydrates"
          className="ingredient-create__input"
          type="text"
        />
      </div> */}
    </div>
  );
}
