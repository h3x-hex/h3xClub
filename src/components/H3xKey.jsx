/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function H3xKey(props) {
  const { nodes, materials } = useGLTF('/public/models/h3xkey.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.017, -0.117, 2.094]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[1, 1.83, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['GOLD meterial.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials['GOLD meterial.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials['Matte Metallic Paint.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_4.geometry}
          material={materials['Rough white metal.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_5.geometry}
          material={materials['Material.010']}
        />
      </group>
    </group>
  )
}

export default H3xKey;

useGLTF.preload('/public/models/h3xkey.glb')