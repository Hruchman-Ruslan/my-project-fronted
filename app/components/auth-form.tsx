'use client'

import { useActionState } from 'react'

import ActionButton from './action-button'

interface AuthFormProps {
	action: (prevState: any, formData: FormData) => Promise<any>
	fields: { name: string; type: string; placeholder: string }[]
	buttonText: string
}

export default function AuthForm({
	action,
	fields,
	buttonText,
}: AuthFormProps) {
	const [state, formAction] = useActionState(action, null)

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
