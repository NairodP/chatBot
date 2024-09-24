import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages } = body

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    })

    return NextResponse.json({ message: response.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: "Une erreur s'est produite lors du traitement de votre demande." }, { status: 500 })
  }
}