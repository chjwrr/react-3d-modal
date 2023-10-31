import React, { Suspense, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import {OBJModel,GLTFModel,AmbientLight,DirectionLight,DAEModel} from 'react-3d-viewer'

import * as THREE from 'three';


import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import LittlestTokyoModal from './modals/LittlestTokyo'

function Scene() {
  const obj = useLoader(OBJLoader, "/modal/female021.obj")
  return <primitive object={obj} scale={0.02}  />
}

function App() {
  return (
    <div>
      <OBJModel 
        width="300" height="300"  
        position={{x:0,y:-100,z:0}} 
        src="/modal/female021.obj"
        onLoad={()=>{
          //...
        }}
        onProgress={(xhr:any)=>{
          console.log('xhr===',xhr)
        }}
      />

<div style={{
  width:300,
  height:300,
  background:'yellow'
}}>
      <GLTFModel
        src="/modal/DamagedHelmet.gltf"
      >
        {/* <AmbientLight color={0xffff00}/>
        <DirectionLight color={0x00ffff} position={{x:100,y:200,z:100}}/>
        <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/> */}
      </GLTFModel>
    </div>

    <div>
      <DAEModel 
        src={'/modal/b.dae'}
        onLoad={()=>{
          // ...
        }}
      >
        <DirectionLight color={'#fff'}/>
      </DAEModel>
    </div>






      <Canvas style={{
        width:500,
        height:800,
        // marginTop:100,
        // marginLeft:100,
        background:'red'
      }}>
       {/* <ambientLight  intensity={0.5} /> */}
        {/* <directionalLight color={'#fff'} position={[0,0,5]} /> */}
        {/* <pointLight color={'#fff'} position={[0,0,0]}/> */}
        {/* <perspectiveCamera position={[0,0,5]} fov={60} near={0.1} far={1000}/> */}

        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <mesh receiveShadow={false} castShadow={false}>
        <Scene/>

        </mesh>
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Canvas>

      <Canvas style={{
        width:1000,
        height:1000,
        // marginTop:100,
        // marginLeft:100,
        background:'black'
      }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]}/>
          <OrbitControls/>
          <LittlestTokyoModal/>
        </Suspense>
      </Canvas>



    </div>
  );
}

export default App;
