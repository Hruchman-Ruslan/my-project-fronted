'use server'

export async function getNasaGallery() {
	try {
		const res = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=9`
		)

		if (!res.ok) throw new Error('Failed to fetch NASA data')

		const data = await res.json()

		return Array.isArray(data) ? data : [data]
	} catch {
		throw new Error('Failed to fetch NASA data')
	}
}
