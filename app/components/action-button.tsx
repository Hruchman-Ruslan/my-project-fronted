'use client'

import { useFormStatus } from 'react-dom'

export default function ActionButton({ title }: { title: string }) {
	const { pending } = useFormStatus()
	return (
		<button className='hover:underline' disabled={pending}>
			{pending ? 'Loading...' : title}
		</button>
	)
}
