'use client'

import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Sun() {
	const sunRef = useRef<Mesh>(null)
	const sunTexture = useTexture('/textures/sun.jpg')

	useFrame(({ clock }) => {
		if (sunRef.current) {
			sunRef.current.rotation.y = clock.getElapsedTime() * 0.2
		}
	})

	return (
		<mesh ref={sunRef}>
			<sphereGeometry args={[0.8, 32, 32]} />
			<meshStandardMaterial map={sunTexture} emissiveIntensity={5} />
		</mesh>
	)
}
