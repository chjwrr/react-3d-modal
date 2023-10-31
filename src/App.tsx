import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls,useProgress,Html } from "@react-three/drei";
import LittlestTokyoModal from './modals/LittlestTokyo'
function App() {
  const [show,setShow] = useState(false)
  const [screenWidth,setScreenWidth] = useState(0)
  useEffect(()=>{
    setShow(true)
    setScreenWidth(window.innerWidth)
  },[])
  return (
    show?<Canvas style={{
      width:screenWidth,
      height:screenWidth,
      background:'#fff'
    }}>
      <Suspense fallback={<Loader/>}>
        <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]}/>
          <OrbitControls/>
          <LittlestTokyoModal scale={[0.008, 0.008, 0.01]}/>
        </Suspense>
    </Canvas> : <div>
      loading。。。
    </div>
  )
}
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html fullscreen>
    <div style={{
      color:'red',
      display:'flex',
      flexDirection:'row',
      width:'100%',
      background:'blue',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
      }}>
      模型加载中:{progress.toFixed(2)} %
    </div>
  </Html>;
}
export default App;
