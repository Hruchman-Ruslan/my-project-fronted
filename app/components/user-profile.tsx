'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import socket from '../lib/socket'
import LogoutButton from './logout-button'

type User = {
	id: number
	username: string
	email: string
	avatar?: string
}

export default function UserProfile({ initialUser }: { initialUser: User }) {
	const [user, setUser] = useState<User>(initialUser)

	useEffect(() => {
		socket.on('userUpdated', (updatedUser: User) => {
			if (updatedUser.id === user.id) {
				setUser(updatedUser)
			}
		})

		return () => {
			socket.off('userUpdated')
		}
	}, [user.id])

	return (
		<header className='w-full p-4 bg-neutral-900 text-white flex justify-between items-center'>
			<div className='flex items-center gap-4'>
				{user.avatar ? (
					<Image
						src={user.avatar}
						alt={user.username}
						width={40}
						height={40}
						className='w-10 h-10 rounded-full'
					/>
				) : (
					<div className='w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center'>
						{user.username[0].toUpperCase()}
					</div>
				)}
				<span className='font-medium'>{user.username}</span>
			</div>
			<nav className='flex gap-4'>
				<Link href='/home'>Home</Link>
				<Link href='/home/profile'>Profile</Link>
				<LogoutButton />
			</nav>
		</header>
	)
}
