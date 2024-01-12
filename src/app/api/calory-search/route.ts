import { OpenAI } from "openai";
import recipes from "@/app/data/recipes";

export async function POST(request: Request) {
  const { search } = await request.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completions = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `Tu travailles dans un grand guide culinaire. 
          Tu dois me donner une liste de 5 recettes maxium qui correspondent le mieux à l'apport calorique demandé.
          Essaie également de classer les recettes par ordre de calories.
          Tu ne dois pas renvoyer le nombre de calorie, renvoie seulement le titre et l'id de la recette.
          Renvoie directement la liste de recettes dans un format JSON. Tu n'as pas besoin de mettre dans un objet.
          Tu ne dois rien répondre d'autre que ce résultat de recherche.
          Tes connaissances se limitent a la liste de recettes que je vais te donner. Tu ne dois pas me donner une recette qui n'est pas dans cette liste.
          Formatte ta réponse pour l'afficher dans un format JSON, en renvoyant seulement l'id et le title des recettes qui correspondent à la recherche.`
      },
      {
        role: "user",
        content: `Voici ma liste de recette : ${JSON.stringify(recipes)}
        Je recherche une ou plusieurs recette(s) dans cette liste qui correspondent le mieux à un ${(search)}`
      }
    ]
  });

  console.log(completions.choices[0].message);
  return new Response(JSON.stringify(completions.choices[0].message));
}