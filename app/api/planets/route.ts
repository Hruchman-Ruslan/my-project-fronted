import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch(
		'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true&data=id,englishName,semimajorAxis,meanRadius,bodyType,moons'
	)

	if (!res.ok) {
		return NextResponse.json(
			{ error: 'Failed to fetch planets' },
			{ status: 500 }
		)
	}

	const json = await res.json()

	const planets = json.bodies.map((b: any) => ({
		name: b.englishName,
		id: b.id,
		distance: b.semimajorAxis / 1e6,
		size: b.meanRadius / 1000,
		moonCount: b.moons?.length ?? 0,
	}))

	return NextResponse.json(planets)
}
