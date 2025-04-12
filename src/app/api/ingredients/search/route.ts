import { neon } from "@neondatabase/serverless";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (!query || query.length < 3) {
    return Response.json({ error: 'Please provide query longer than is at least 3 characters long' }, { status: 400 });
  }

  console.log('query: ', query);
  console.log('url: ', process.env.DATABASE_URL);
  const sql = neon(`${process.env.DATABASE_URL}` || '');
  const foundIngredients = await sql`SELECT name, calories, proteins, fats, carbohydrates FROM kcalculator.ingredients WHERE name ILIKE ${`%${query}%`}`;

  return Response.json(foundIngredients);
}