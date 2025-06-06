'use client'

import { signOut } from '@/app/actions/auth-actions'

export default function LogoutButton() {
	const handleClick = async () => {
		await signOut()
	}

	return (
		<button onClick={handleClick} className='text-white rounded '>
			Logout
		</button>
	)
}
