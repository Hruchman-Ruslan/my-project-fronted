import LogoutButton from '@/app/components/logout-button'

export default function DashboardPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
			<h1 className='text-2xl'>Welcome to the Dashboard</h1>
			<LogoutButton />
		</div>
	)
}
