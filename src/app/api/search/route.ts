import { OpenAI } from "openai";
import recipes from "@/app/data/recipes";

export async function POST(request: Request) {
  const { search, isSeason } = await request.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completions = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `Tu travailles dans un grand guide culinaire. Tu dois répondre à une recherche de recettes.
          Tu dois me donner une liste de 5 résultats maximum qui correspondent le mieux à la recherche.
          Je vais te donner une recherche mais ça peut être des mots clés, des émotions ou des envies qui ne vont pas correspondre 100% à une recette.
          Je veux que tu analyses ce qui est envoyé afin de donner une liste pertinente de recettes qui correspondent à la recherche.
          Tu ne dois rien répondre d'autre que ce résultat de recherche.
          Tes connaissances se limitent a la liste de recettes que je vais te donner. Tu ne dois pas me donner une recette qui n'est pas dans cette liste.
          Formatte ta réponse pour l'afficher dans un format JSON, en renvoyant seulement l'id et le title des recettes qui correspondent à la recherche.`
      },
      {
        role: "user",
        content: `Voici ma liste de recette : ${JSON.stringify(recipes)}
        Je recherche une ou plusieurs recette(s) dans cette liste qui correspondent le mieux à : ${(search)}
        ${isSeason ? "Tu dois prendre en compte la saison actuelle ." : ""}`
      }
    ]
  });

  console.log(completions.choices[0].message);
  return new Response(JSON.stringify(completions.choices[0].message));
}