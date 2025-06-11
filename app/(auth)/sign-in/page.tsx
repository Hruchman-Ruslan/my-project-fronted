import Link from 'next/link'

import { signIn } from '@/app/actions/auth-actions'

import AuthForm from '@/app/components/auth-form'

export default function SignIn() {
	return (
		<>
			<AuthForm
				action={signIn}
				fields={[
					{ name: 'email', type: 'email', placeholder: 'Email' },
					{ name: 'password', type: 'password', placeholder: 'Password' },
				]}
				buttonText='Sign In'
			/>
			<Link className='hover:underline' href={'/sign-up'}>
				Sing Up
			</Link>
		</>
	)
}
