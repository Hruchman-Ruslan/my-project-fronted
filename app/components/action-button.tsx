'use client'

import { useFormStatus } from 'react-dom'

export default function ActionButton({ title }: { title: string }) {
	const { pending } = useFormStatus()
	return <button disabled={pending}>{pending ? 'Loading...' : title}</button>
}
