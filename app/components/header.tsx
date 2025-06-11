import Link from 'next/link'

import LogoutButton from './logout-button'

export default function DashboardHeader() {
	return (
		<header className='w-full p-4 bg-neutral-900 text-white flex justify-between items-center'>
			<h1 className='text-xl font-semibold'>Home</h1>
			<nav className='flex gap-4'>
				<Link href='/home' className='hover:underline'>
					Home
				</Link>
				<Link href='/home/profile' className='hover:underline'>
					Profile
				</Link>
				<LogoutButton />
			</nav>
		</header>
	)
}
