import DashboardHeader from '../components/header'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen bg-neutral-900 text-white flex flex-col'>
			<DashboardHeader />
			<main className='flex-1'>{children}</main>
		</div>
	)
}
