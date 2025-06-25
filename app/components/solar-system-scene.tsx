'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Sun from './sun'
import Planet from './planet'

const planets = [
	{
		name: 'Mercury',
		textureUrl: '/textures/mercury.jpg',
		distance: 2,
		size: 0.2,
		initialAngleOffset: Math.PI * 0,
	},
	{
		name: 'Venus',
		textureUrl: '/textures/venus.jpg',
		distance: 3,
		size: 0.3,
		initialAngleOffset: Math.PI * 0.5,
	},
	{
		name: 'Earth',
		textureUrl: '/textures/earth.jpg',
		distance: 4,
		size: 0.35,
		initialAngleOffset: Math.PI * 1,
	},
	{
		name: 'Mars',
		textureUrl: '/textures/mars.jpg',
		distance: 5,
		size: 0.3,
		initialAngleOffset: Math.PI * 1.5,
	},
	{
		name: 'Saturn',
		textureUrl: '/textures/saturn.jpg',
		distance: 6,
		size: 0.4,
		initialAngleOffset: Math.PI * 0.8,
		hasRing: true,
	},
]

export default function SolarSystemScene() {
	return (
		<Canvas camera={{ position: [0, 15, 15], fov: 60 }} dpr={1} shadows>
			<ambientLight intensity={1.8} />
			<pointLight position={[0, 0, 0]} intensity={100} />
			<ambientLight intensity={0.05} />
			<Environment background files='/textures/background.jpg' />
			<Sun />
			{planets.map(({ distance }) => (
				<mesh key={`orbit-${distance}`} rotation={[-Math.PI / 2, 0, 0]}>
					<ringGeometry args={[distance - 0.01, distance + 0.01, 64]} />
					<meshBasicMaterial color='white' transparent opacity={0.2} />
				</mesh>
			))}
			{planets.map(planet => (
				<Planet key={planet.name} {...planet} />
			))}
			<OrbitControls enableZoom enableRotate />
		</Canvas>
	)
}
