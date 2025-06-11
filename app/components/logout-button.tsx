'use client'

import { useRouter } from 'next/navigation'

import { signOut } from '@/app/actions/auth-actions'

export default function LogoutButton() {
	const router = useRouter()

	const handleClick = async () => {
		await signOut()
		router.push('/')
	}

	return (
		<button
			onClick={handleClick}
			className='text-white rounded hover:underline'
		>
			Logout
		</button>
	)
}
