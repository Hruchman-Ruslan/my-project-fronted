import Image from 'next/image'

interface Item {
	date: string
	explanation: string
	title: string
	url: string
	media_type: string
}

export default function ItemGallery({ items }: { items: Item[] }) {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
			{items.map(item => (
				<li
					key={item.date}
					className='bg-gray-900 rounded-lg overflow-hidden shadow-lg'
				>
					{item.media_type === 'image' ? (
						<Image
							src={item.url}
							alt={item.title}
							width={400}
							height={300}
							className='object-cover w-full h-48'
						/>
					) : (
						<p className='text-white p-4'>
							Media type not supported: {item.media_type}
						</p>
					)}
					<div className='p-4'>
						<h2 className='text-white font-semibold'>{item.title}</h2>
						<p className='text-gray-300 text-sm mt-2 line-clamp-3'>
							{item.explanation}
						</p>
						<p className='text-gray-400 text-xs mt-1 italic'>{item.date}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
