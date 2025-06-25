'use client'

import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useRouter } from 'next/navigation'

export default function Sun() {
	const router = useRouter()
	const sunRef = useRef<Mesh>(null)
	const sunTexture = useTexture('/textures/sun.jpg')

	useFrame(({ clock }) => {
		if (sunRef.current) {
			sunRef.current.rotation.y = clock.getElapsedTime() * 0.2
		}
	})

	return (
		<mesh
			ref={sunRef}
			onClick={() => router.push('/planets/sun')}
			onPointerOver={() => (document.body.style.cursor = 'pointer')}
			onPointerOut={() => (document.body.style.cursor = 'default')}
		>
			<sphereGeometry args={[0.8, 32, 32]} />
			<meshStandardMaterial map={sunTexture} emissiveIntensity={5} />
		</mesh>
	)
}
