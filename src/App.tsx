import React from 'react';
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import {OBJModel} from 'react-3d-viewer'


import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function Scene() {
  const obj = useLoader(OBJLoader, "/modal/female02.obj")
  return <primitive object={obj} scale={0.02}  />
}

function SceneGLTF() {
  const gltf = useLoader(GLTFLoader, '/modal/LittlestTokyo.glb')
  return <primitive object={gltf.scene} />
}
function App() {
  return (
    <div>
      {/* <OBJModel 
        width="400" height="400"  
        position={{x:0,y:-100,z:0}} 
        src="/modal/b.obj"
        onLoad={()=>{
          //...
        }}
        onProgress={(xhr:any)=>{
          console.log('xhr===',xhr)
        }}
      /> */}
      <Canvas style={{
        width:500,
        height:800,
        // marginTop:100,
        // marginLeft:100,
        background:'red'
      }}>
       {/* <ambientLight color={'#fff'} intensity={1} /> */}
        <directionalLight color={'#fff'} position={[0,0,5]} />
        <Scene/>
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Canvas>
    </div>
  );
}



export default App;
