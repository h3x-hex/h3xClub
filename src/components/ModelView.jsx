import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import H3xKey from './H3xKey';
import { Suspense } from "react";

const ModelView = ({}) => {
  return (
    <View
      className={`w-full h-full`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

      <Lights />

      <OrbitControls 
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
      /> 

      <group name={'h3xkey'} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <H3xKey 
            scale={[0.4, 0.4, 0.4]}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView