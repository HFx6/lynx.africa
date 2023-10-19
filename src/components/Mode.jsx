import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/la.gltf");

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_2.geometry}
				material={materials["Material.001"]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload("/la.gltf");
