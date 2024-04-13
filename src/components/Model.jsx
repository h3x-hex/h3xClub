import ModelView from "./ModelView";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import React, { useState } from 'react';
import BuyKey from "./BuyKey";


const Model = () => {

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <section className="common-padding">
      <div className="screen-max-width ">
        <div className="display-inline flex flex-nowrap mb-20">
          <h1 id="heading" className="section-heading">Your key to the h</h1>
          <h1 id="heading" className="section-color">3</h1>
          <h1 id="heading" className="section-heading">xav</h1>
          <h1 id="heading" className="section-color">3</h1>
          <h1 id="heading" className="section-heading">rse</h1>
        </div>
        

        <div className="flex flex-col items-center">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />  
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="grid grid-rows-6 place-items-center items-center">
            <div className="row-span-1 flex flex-nowrap">
              <h1 id="heading" className="section-heading">h</h1><h1 id="heading" className='section-color'>3</h1><p id="heading" className="section-heading">x</p><p id="heading" className='section-heading' >K</p><p id="heading" className="section-color">3</p><p id="heading" className='section-heading'>y</p>
            </div>
            <div className="row-span-4 items-center">
              { showResults ? <BuyKey /> : <a className="btn" onClick={onClick}>Buy</a> }
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model;