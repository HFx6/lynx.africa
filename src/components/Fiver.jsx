import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { CameraControls, OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";

import Model from "./Mode";

const Scene = () => {
	const { controls } = useThree();
	const meshRef = useRef();

	const margin = 4;
	useFrame(({ clock }) => {
		meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
	});

	useEffect(() => {
		// Translate the geometry
		if (controls) {
			controls.fitToBox(meshRef.current, true, {
				paddingTop: margin,
				paddingLeft: margin,
				paddingBottom: margin,
				paddingRight: margin,
			});
			controls.rotateTo(Math.PI / -0.4, Math.PI / 2.5, true);
		}
	}, [controls]);

	return (
		<>
			<mesh ref={meshRef}>
				<Model position={[0.8, 0, 0]} />
			</mesh>
			<CameraControls makeDefault />
		</>
	);
};

export const Fiber = () => {
	return (
		<Canvas
			camera={{ position: [10, -20, 5], fov: 45 }}
			style={{ height: "100%" }}
		>
			<Scene />

			<Environment preset="warehouse" />
		</Canvas>
	);
};

export default Fiber;
