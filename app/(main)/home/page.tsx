import Link from 'next/link'

export default function HomePage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
			<h1 className='text-2xl'>Welcome to the Home</h1>
			<Link href='/solar-system' className='ml-4 text-blue-400 hover:underline'>
				Go to Solar System
			</Link>
		</div>
	)
}
