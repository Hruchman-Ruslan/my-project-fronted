'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import ActionButton from './action-button'

interface AuthFormProps {
	action: (prevState: any, formData: FormData) => Promise<any>
	fields: {
		name: string
		type: 'text' | 'email' | 'password' | 'file'
		placeholder: string
	}[]
	buttonText: string
}

export default function AuthForm({
	action,
	fields,
	buttonText,
}: AuthFormProps) {
	const router = useRouter()
	const [state, formAction] = useActionState(action, null)

	useEffect(() => {
		if (state?.success) {
			router.push('/home')
		}
	}, [state, router])

	return (
		<form action={formAction} className='space-y-4'>
			{fields.map(field => (
				<input
					key={field.name}
					name={field.name}
					type={field.type}
					required
					placeholder={field.placeholder}
					className='block w-full p-2 border rounded'
				/>
			))}
			<ActionButton title={buttonText} />
			{state?.error && <p className='text-red-500'>{state.error}</p>}
			{state?.success && <p className='text-green-500'>Success!</p>}
		</form>
	)
}
