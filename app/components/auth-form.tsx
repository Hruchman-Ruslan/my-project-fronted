'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import ActionButton from './action-button'

interface Field {
	name: string
	type: 'text' | 'email' | 'password' | 'file'
	placeholder: string
}

interface AuthFormProps {
	action: (prevState: any, formData: FormData) => Promise<any>
	fields: Field[]
	buttonText: string
	onSuccessRedirect?: string
	showSuccessMessage?: boolean
	defaultValues?: Record<string, string>
}

export default function AuthForm({
	action,
	fields,
	buttonText,
	onSuccessRedirect = '/home',
	showSuccessMessage = true,
	defaultValues = {},
}: AuthFormProps) {
	const router = useRouter()
	const [state, formAction] = useActionState(action, null)

	useEffect(() => {
		if (state?.success && onSuccessRedirect) {
			router.push(onSuccessRedirect)
		}
	}, [state, router, onSuccessRedirect])

	return (
		<form action={formAction} className='space-y-4'>
			{fields.map(field => (
				<input
					key={field.name}
					name={field.name}
					type={field.type}
					required
					placeholder={field.placeholder}
					defaultValue={defaultValues[field.name]}
					className='block w-full p-2 border rounded'
				/>
			))}
			<ActionButton title={buttonText} />
			{state?.error && <p className='text-red-500'>{state.error}</p>}
			{state?.success && showSuccessMessage && (
				<p className='text-green-500'>Success!</p>
			)}
		</form>
	)
}
