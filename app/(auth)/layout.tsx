export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
			<div className='w-full max-w-md p-8 bg-gray-800 rounded shadow'>
				{children}
			</div>
		</div>
	)
}
