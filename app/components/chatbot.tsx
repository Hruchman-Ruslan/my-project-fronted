'use client'

import { useState } from 'react'

export default function ChatBot() {
	const [messages, setMessages] = useState<string[]>([])
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)

	const sendMessage = async () => {
		if (!input.trim()) return

		const userMsg = `You: ${input}`
		setMessages(prev => [...prev, userMsg])
		setInput('')
		setLoading(true)

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: input }),
			})

			const data = await res.json()
			const botMsg = `Bot: ${data.reply ?? 'No reply'}`
			setMessages(prev => [...prev, botMsg])
		} catch {
			setMessages(prev => [...prev, 'Bot: Failed to respond.'])
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg w-80 shadow-lg z-50'>
			<h2 className='text-lg font-semibold mb-2'>ChatBot</h2>
			<div className='h-48 overflow-y-auto border border-gray-700 p-2 rounded text-sm'>
				{messages.map((msg, i) => (
					<p key={i} className='mb-1'>
						{msg}
					</p>
				))}
			</div>
			<div className='mt-2 flex gap-2'>
				<input
					type='text'
					value={input}
					onChange={e => setInput(e.target.value)}
					className='flex-1 p-1 rounded bg-gray-800 border border-gray-700 text-white text-sm'
					placeholder='Type a message...'
				/>
				<button
					onClick={sendMessage}
					disabled={loading}
					className='px-3 py-1 bg-blue-600 rounded text-sm hover:bg-blue-500 disabled:opacity-50'
				>
					{loading ? '...' : 'Send'}
				</button>
			</div>
		</div>
	)
}
