import { getCurrentUser } from '../actions/auth-actions'

import UserProfile from './user-profile'

export default async function DashboardHeader() {
	const user = await getCurrentUser()

	return <UserProfile initialUser={user} />
}
