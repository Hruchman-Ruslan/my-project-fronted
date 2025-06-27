import { Suspense } from 'react'

import SolarSystemScene from '@/app/components/solar-system-scene'

import Loading from './loading'

export default function SolarSystemPage() {
	return (
		<Suspense fallback={<Loading />}>
			<main className='w-full h-screen bg-black'>
				<SolarSystemScene />
			</main>
		</Suspense>
	)
}
