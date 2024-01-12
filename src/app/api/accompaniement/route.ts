import { OpenAI } from "openai";

export async function POST(request: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completions = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Tu es l'assistant d'un chef étoilé. Tu dois fournir une liste d'accompagnements pour la recette demandée. Tu ne dois rien répondre d'autre que la liste d'accompagnements. Formatte ta réponse pour l'afficher dans une page React sous forme de liste.",
      },
      {
        role: "user",
        content: (await request.text())
      }
    ]
  });

  return new Response(JSON.stringify(completions.choices[0].message));
}

