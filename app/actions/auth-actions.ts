'use server'

import { cookies } from 'next/headers'

const AUTH_URL = process.env.AUTH_URL

export async function signUp(_: any, formData: FormData) {
	const username = formData.get('username')
	const email = formData.get('email')
	const password = formData.get('password')

	try {
		const res = await fetch(`${AUTH_URL}/sign-up`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, email, password }),
		})

		if (!res.ok) {
			const data = await res.json()
			return { error: data.message || 'Registration failed' }
		}

		const data = await res.json()
		const token = data?.user?.token

		const cookiesStore = await cookies()
		cookiesStore.set('token', token)

		return { success: true }
	} catch {
		return { error: 'Something went wrong. Please try again.' }
	}
}

export async function signIn(_: any, formData: FormData) {
	const email = formData.get('email')
	const password = formData.get('password')

	try {
		const res = await fetch(`${AUTH_URL}/sign-in`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		})

		if (!res.ok) {
			const data = await res.json()
			return { error: data.message || 'Login failed' }
		}

		const data = await res.json()
		const token = data?.user?.token

		const cookiesStore = await cookies()
		cookiesStore.set('token', token)

		return { success: true }
	} catch {
		return { error: 'Something went wrong. Please try again.' }
	}
}

export async function getCurrentUser() {
	const cookiesStore = await cookies()
	const token = cookiesStore.get('token')?.value

	try {
		const res = await fetch(`${AUTH_URL}/user`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		const data = await res.json()
		return data.user
	} catch {
		return { error: 'Something went wrong. Please try again.' }
	}
}

export async function updateUser(_: any, formData: FormData) {
	const name = formData.get('name')
	const email = formData.get('email')
	const password = formData.get('password')
	const avatarFile = formData.get('avatarFile') as File | null

	const cookiesStore = await cookies()
	const token = cookiesStore.get('token')?.value

	const body = new FormData()
	if (name) body.append('user[username]', name.toString())
	if (email) body.append('user[email]', email.toString())
	if (password) body.append('user[password]', password.toString())
	if (avatarFile) body.append('avatarFile', avatarFile)

	try {
		const res = await fetch(`${AUTH_URL}/user`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body,
		})

		if (!res.ok) {
			const data = await res.json()
			return { error: data.message || 'Update failed' }
		}

		return { success: true }
	} catch {
		return { error: 'Something went wrong. Please try again.' }
	}
}

export async function signOut() {
	const cookiesStore = await cookies()
	cookiesStore.delete('token')

	return { success: true }
}
