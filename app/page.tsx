import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center'>
			<h1 className='text-3xl font-bold'>This is a pet project</h1>
			<p className='text-muted-foreground max-w-md'>
				I&apos;m just experimenting with things here. Not sure yet where
				it&apos;s going.
			</p>
			<Link
				href='/sign-in'
				className='px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors'
			>
				Sign in
			</Link>
		</main>
	)
}
