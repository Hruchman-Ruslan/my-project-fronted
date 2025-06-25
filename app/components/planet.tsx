'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { Mesh, Object3D } from 'three'
import { useTexture } from '@react-three/drei'

interface PlanetProps {
	name: string
	textureUrl: string
	distance: number
	size: number
	initialAngleOffset?: number
	hasRing?: boolean
}

export default function Planet({
	name,
	textureUrl,
	distance,
	size,
	initialAngleOffset = 0,
	hasRing = false,
}: PlanetProps) {
	const router = useRouter()
	const orbitRef = useRef<Object3D>(null)
	const planetRef = useRef<Mesh>(null)

	const texture = useTexture(textureUrl)

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime()
		const orbitSpeed = 0.2

		const angle = initialAngleOffset + t * (orbitSpeed / distance)

		const x = Math.cos(angle) * distance
		const z = Math.sin(angle) * distance
		if (orbitRef.current) orbitRef.current.position.set(x, 0, z)
		if (planetRef.current) planetRef.current.rotation.y = t * 0.5
	})

	return (
		<group ref={orbitRef}>
			<mesh
				ref={planetRef}
				onClick={() => router.push(`/planets/${name.toLowerCase()}`)}
				onPointerOver={() => (document.body.style.cursor = 'pointer')}
				onPointerOut={() => (document.body.style.cursor = 'default')}
			>
				<sphereGeometry args={[size, 16, 16]} />
				<meshStandardMaterial map={texture} />
			</mesh>

			{hasRing && (
				<mesh rotation={[Math.PI / 2, 0, 0]}>
					<ringGeometry args={[size + 0.05, size + 0.15, 64]} />
					<meshBasicMaterial color='gray' side={2} transparent opacity={0.6} />
				</mesh>
			)}
		</group>
	)
}
