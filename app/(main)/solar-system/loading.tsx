export default function Loading() {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black text-white z-50'>
			<div className='spin-slow h-12 w-12 rounded-full border-b-2 border-white'></div>
			<span className='ml-4 text-lg'>Loading...</span>
		</div>
	)
}
