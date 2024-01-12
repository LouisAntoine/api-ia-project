import { OpenAI } from "openai";
import recipes from "@/app/data/recipes";

export async function POST(request: Request) {
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
        Je te donne une recette, tu dois trouver les recettes qui sont similaires à ma recette parmi la liste de recettes que je vais te donner.
        Prends en compte le maximum d'informations de la recette que je te donne pour trouver les recettes similaires.
        Tu dois me donner une liste de 5 résultats maximum qui se rapprochent le plus de ma recette. 
        Tu as interdiction de me donner la recette que je te donne. Elle ne peut pas être considérée comme similaire à elle-même, ce serait une erreur.
        Si il n'y a pas 5 recettes qui correspondent à la recherche, tu dois me donner le maximum de recettes qui correspondent à la recherche.
        Tu ne dois rien répondre d'autre que ce résultat de recherche.
        Tes connaissances se limitent a la liste de recettes que je vais te donner. Tu ne dois pas me donner une recette qui n'est pas dans cette liste.
        Formatte ta réponse pour l'afficher dans un format JSON, en renvoyant seulement l'id et le title des recettes qui correspondent à la recherche.`,
      },
      {
        role: "user",
        content: `Voici ma liste de recette : ${JSON.stringify(recipes)}
        Je recherche une ou plusieurs recette(s) dans cette liste qui correspondent le mieux à : ${(await request.text())}`
      }
    ]
  });

  console.log(completions.choices[0].message);
  return new Response(JSON.stringify(completions.choices[0].message));
}

