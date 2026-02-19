import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

import { useState } from 'react'
import {useEffect } from 'react'


function Modelo_glb({ set_info }) {
  const diglett_glb = useGLTF('/diglett_cgtrader_glb.glb')

  useEffect(() => {
    const vertices = countVertices(diglett_glb.scene)

    set_info({
      format: "GLB",
      vertices
    })
  }, [diglett_glb, set_info])  

  return (
    <primitive object={diglett_glb.scene.clone()}/>
  )
}


function Modelo_obj({ set_info }) {
  const diglett_obj = useLoader(OBJLoader, '/diglett_convertido_obj.obj')

  useEffect(() => {
    const vertices = countVertices(diglett_obj)

    set_info({
      format: "OBJ",
      vertices
    })
  }, [diglett_obj, set_info])  

  return (
    <primitive 
      object={diglett_obj} 
    />
  )
}

function Modelo_stl({ set_info }) {
  const diglett_stl = useLoader(STLLoader, '/diglett_convertido_stl.stl')

  useEffect(() => {
    const vertices = diglett_stl.attributes.position.count

    set_info({
      format: "STL",
      vertices
    })
  }, [diglett_stl, set_info])  
  
  return (
    <mesh geometry={diglett_stl}>
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

// Selector de modelo
function Scene({ selected, set_info }) {
  return (
    <group scale={[2, 2, 2]}>
      {selected === "glb" && <Modelo_glb set_info={set_info}/>}
      {selected === "obj" && <Modelo_obj set_info={set_info}/>}
      {selected === "stl" && <Modelo_stl set_info={set_info}/>}
    </group>
  )
}

//------------------ Información del modelo ------------------

function ModelInfo({ info }) {
  return (
    <div style={{
      position: "absolute",
      top: 10,
      right: 10,
      background: "rgba(0,0,0,0.7)",
      color: "white",
      padding: "10px 15px",
      borderRadius: "8px",
      fontSize: "14px",
      fontFamily: "monospace"
    }}>
      <div>Formato: {info.format}</div>
      <div>Vertices: {info.vertices}</div>
    </div>
  )
}

function countVertices(object) {
  let total = 0

  object.traverse((child) => {
    if (child.isMesh && child.geometry) {
      const position = child.geometry.attributes.position
      if (position) {
        total += position.count
      }
    }
  })

  return total
}


export default function App() {

  // Esatdo inicial del select
  const [selected, setSelected] = useState("glb")

  const [info, set_info] = useState({
    format: "",
    vertices: 0
  })

  return (
    <>
      {/* Botones */}
      <div style={{ position: "absolute", zIndex: 1 }}>
        <button onClick={() => setSelected("glb")}>GLB</button>
        <button onClick={() => setSelected("obj")}>OBJ</button>
        <button onClick={() => setSelected("stl")}>STL</button>
      </div>

      <ModelInfo info={info} />

      {/* Escena */}
      <Canvas   
        style={{
          width: "100vw",
          height: "100vh"
        }}

        camera={{ position: [2, 2, 10] }}>

        <ambientLight />
        <directionalLight position={[5,5,5]} />
        <Scene selected={selected} set_info={set_info} scale={[3, 3, 3]} />
        <OrbitControls />

      </Canvas>
    </>
  )
}

