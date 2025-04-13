import "./ingredients.css";

export default function Ingredients() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label>Name</label>
        <input
          id="ingredients-create__name"
          className="ingredient-create__input"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
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
      </div>
    </div>
  );
}
