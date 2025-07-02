'use client'

import { useState } from 'react'

export default function ChatBot() {
	const [messages, setMessages] = useState<string[]>([])
	const [input, setInput] = useState('')

	const sendMessage = () => {
		if (!input.trim()) return

		const newMessages = [...messages, `You: ${input}`]
		setMessages(newMessages)
		setInput('')

		setTimeout(() => {
			setMessages(prev => [...prev, `Bot: ("${input}")`])
		}, 500)
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
					className='px-3 py-1 bg-blue-600 rounded text-sm hover:bg-blue-500'
				>
					Send
				</button>
			</div>
		</div>
	)
}
