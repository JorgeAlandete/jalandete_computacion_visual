import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Leva, useControls } from 'leva'
import { OrbitControls } from '@react-three/drei'

function SistemaSolar() {
  const solRef = useRef()
  const planetaOrbitRef = useRef()
  const lunaOrbitRef = useRef()

  // UI Sol
  const { solRotY  } = useControls('Sol', {
    solRotY: { value: 0, min: 0, max: Math.PI * 2 }
  })

  // UI Planeta
  const { planetaDistancia, planetaRotY } = useControls('Planeta', {
    planetaDistancia: { value: 5, min: 2, max: 10 },
    planetaRotY: { value: 0, min: 0, max: Math.PI * 2 }
  })

  // UI Luna
  const { lunaDistancia, lunaRotY } = useControls('Luna', {
    lunaDistancia: { value: 2, min: 1, max: 5 }
  })


  return (
    <group rotation={[0, solRotY, 0]}>

      {/* sol */}
      <mesh ref={solRef} >
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial emissive="yellow" color="orange" />
      </mesh>

      {/* Grupo planeta */}
      <group ref={planetaOrbitRef}>
        <group position={[planetaDistancia, 0, 0]} rotation={[0, planetaRotY, 0]}>

          <mesh>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#51e444" />
          </mesh>

          {/* Grupo luna */}
          <group ref={lunaOrbitRef}>
            <mesh position={[lunaDistancia, 0, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#dde5ec" />
            </mesh>
          </group>

        </group>
      </group>

    </group>
  )
}

export default function App() {
  return (
    <>
      <Leva collapsed={false} />
      <Canvas
        camera={{ position: [0, 5, 15] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <SistemaSolar />
        <OrbitControls />
      </Canvas>
    </>
  )
}