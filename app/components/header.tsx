import Link from 'next/link'
import Image from 'next/image'

import { getCurrentUser } from '../actions/auth-actions'

import LogoutButton from './logout-button'

export default async function DashboardHeader() {
	const user = await getCurrentUser()

	return (
		<header className='w-full p-4 bg-neutral-900 text-white flex justify-between items-center'>
			<div className='flex items-center gap-4'>
				{user?.avatar ? (
					<Image
						src={user.avatar}
						alt={user.username}
						width={40}
						height={40}
						className='w-10 h-10 rounded-full'
					/>
				) : (
					<div className='w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center'>
						{user?.username?.[0].toUpperCase()}
					</div>
				)}
				<span className='font-medium'>{user?.username}</span>
			</div>
			<nav className='flex gap-4'>
				<Link href='/home'>Home</Link>
				<Link href='/home/profile'>Profile</Link>
				<LogoutButton />
			</nav>
		</header>
	)
}
