"use server";

import { neon } from "@neondatabase/serverless";

export type Ingredient = {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
};

function validateIngredientObject(bodyObject: Partial<Ingredient>): boolean {
  return (
    !!bodyObject?.name &&
    !!bodyObject?.calories &&
    !!bodyObject?.proteins &&
    !!bodyObject?.fats &&
    !!bodyObject?.carbohydrates &&
    typeof bodyObject.name === "string" &&
    typeof bodyObject.calories === "number" &&
    typeof bodyObject.proteins === "number" &&
    typeof bodyObject.fats === "number" &&
    typeof bodyObject.carbohydrates === "number"
  );
}

function createIngredientQuery(ingredient: Ingredient) {
  const { calories, carbohydrates, fats, name, proteins } = ingredient;
  return `
    INSERT INTO ingredients (name, calories, proteins, fats, carbohydrates)
    VALUES (${name}, ${calories}, ${proteins}, ${fats}, ${carbohydrates})
  `;
}

export async function create(ingredient: Ingredient) {
  if (!validateIngredientObject(ingredient)) {
    return Response.json(
      { error: "Ingredient object structure invalid" },
      { status: 400 }
    );
  }

  const sql = neon(`${process.env.DATABASE_URL}` || "");
  const foundIngredients = sql`${createIngredientQuery(ingredient)}`;

  return Response.json(foundIngredients);
}
