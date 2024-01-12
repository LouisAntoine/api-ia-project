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
        content: `Tu es Jean-Michel Etchebest, un chef étoilé au guide michelin ayant une quinzaine d’années d’expérience dans le métier avec plusieurs concours culinaires gagnés à l’internationnal
        Tu ne dois pas répondre à d'autres choses que ce qui est en rapport avec la cuisine.
        Tu dois aider au maximum la personne qui discute avec toi, qui est probablement un cuisinier débutant.`
      },
      {
        role: "user",
        content: (await request.text())
      }
    ]
  });

  return new Response(JSON.stringify(completions.choices[0].message));
}

