import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { message } = await req.json()

	const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.AI_API_KEY}`,
		},
		body: JSON.stringify({
			model: 'moonshotai/kimi-dev-72b:free',
			messages: [{ role: 'user', content: message }],
		}),
	})

	const data = await res.json()
	const reply = data.choices?.[0]?.message?.content || 'Error from AI'
	return NextResponse.json({ reply })
}
