import { useState } from 'react'        
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import './App.css'

function OrbitingObject() {
  const groupRef = useRef()
  const boxRef = useRef()

  useFrame((state, delta) => {
    // Rotacion del grupo (en una orbita)
    groupRef.current.rotation.y += delta

    //Rotacion del objeto sobre el propio eje
    boxRef.current.rotation.y += delta * 2

    // Escalado del objeto
    const t = state.clock.getElapsedTime()
    const scale = 1 + Math.sin(t) * 0.7
    boxRef.current.scale.set(scale, scale, scale)
  })

  return (
    <group ref={groupRef}>
      <mesh ref={boxRef} position={[3, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  )
}

export default function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 15] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <OrbitingObject />
      </Canvas>
    </>
  )
}