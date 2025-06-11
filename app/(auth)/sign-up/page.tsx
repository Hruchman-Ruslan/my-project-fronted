import Link from 'next/link'

import { signUp } from '@/app/actions/auth-actions'

import AuthForm from '@/app/components/auth-form'

export default function SignUp() {
	return (
		<>
			<AuthForm
				action={signUp}
				fields={[
					{ name: 'username', type: 'text', placeholder: 'Username' },
					{ name: 'email', type: 'email', placeholder: 'Email' },
					{ name: 'password', type: 'password', placeholder: 'Password' },
				]}
				buttonText='Sign Up'
			/>
			<Link className='hover:underline' href='/sign-in'>
				Sign In
			</Link>
		</>
	)
}
