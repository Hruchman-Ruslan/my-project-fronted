import { updateUser } from '@/app/actions/auth-actions'

import AuthForm from '@/app/components/auth-form'

export default function ProfilePage() {
	return (
		<AuthForm
			action={updateUser}
			fields={[
				{ name: 'name', type: 'text', placeholder: 'Name' },
				{ name: 'email', type: 'email', placeholder: 'Email' },
				{ name: 'password', type: 'password', placeholder: 'New Password' },
				{ name: 'avatarFile', type: 'file', placeholder: 'Upload Avatar' },
			]}
			buttonText='Update Profile'
			onSuccessRedirect='/home'
			showSuccessMessage={true}
		/>
	)
}
