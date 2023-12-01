import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'
import useColor from '../hooks/colors'

const Shirt = () => {
  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTextutre= useTexture(snap.fullDecal);
  const {getColor} = useColor();
  // snap.color = getColor();
  const newSnap = { ...snap, color: getColor() };
  console.log("Get color from localstorage: ",getColor())
  console.log("New Snap Object: ", newSnap.color);
  useFrame((state, delta) => easing.dampC(materials.lambert1.color,
    newSnap.color, 0.25, delta));
  
    const stateString = JSON.stringify(newSnap);
  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {newSnap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTextutre}
          />
        )}
        {newSnap.isLogoTexture && (
          <Decal 
            position={[0, 0.004, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.18}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

      </mesh>
    </group>
  )
}

export default Shirt