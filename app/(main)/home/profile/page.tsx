'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { updateUser } from '@/app/actions/auth-actions'

export default function ProfilePage() {
	const router = useRouter()
	const [state, formAction] = useActionState(updateUser, {
		success: false,
		error: undefined as any,
	})

	useEffect(() => {
		if (state.success) {
			router.push('/home')
		}
	}, [state.success, router])

	return (
		<form action={formAction} className='flex flex-col gap-4'>
			<input
				type='text'
				name='name'
				placeholder='Name'
				className='border p-2'
			/>
			<input
				type='email'
				name='email'
				placeholder='Email'
				className='border p-2'
			/>
			<input
				type='password'
				name='password'
				placeholder='New Password'
				className='border p-2'
			/>
			<input
				type='file'
				name='avatarFile'
				accept='image/*'
				className='border p-2'
			/>

			<button
				type='submit'
				className='bg-blue-600 text-white px-4 py-2 rounded'
			>
				Update Profile
			</button>

			{state.success && <p className='text-green-600'>Profile updated!</p>}
			{state.error && <p className='text-red-600'>{state.error}</p>}
		</form>
	)
}
