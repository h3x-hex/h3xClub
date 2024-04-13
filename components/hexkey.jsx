import React from 'react'
import { useRef, useState, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useHelper, OrbitControls } from '@react-three/drei'
import { H3xkey } from '@/public/H3xkey'

const hexkey = () => {
    
    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
  
    return (
    
        <Canvas>
            <ambientLight intensity={1}/>
            <directionalLight ref={ directionalLight } intensity={8} position={(5,3,5)}/>
            <directionalLight ref={ directionalLight } intensity={10} position={(5,-30,-5)}/>
            <OrbitControls />
            <axesHelper args={[5]} />
            <Suspense fallback={null}>
                <H3xkey/>
            </Suspense>
        </Canvas>
  )
}

export default hexkey