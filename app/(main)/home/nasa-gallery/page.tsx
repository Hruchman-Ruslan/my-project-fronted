import { getNasaGallery } from '@/app/actions/nasa-actions'
import ItemGallery from '@/app/components/item-gallery'

export default async function NasaGallery() {
	const gallery = await getNasaGallery()

	return (
		<main className='bg-black min-h-screen p-6'>
			<h1 className='text-white text-3xl mb-6'>NASA Gallery</h1>
			<ItemGallery items={gallery} />
		</main>
	)
}
