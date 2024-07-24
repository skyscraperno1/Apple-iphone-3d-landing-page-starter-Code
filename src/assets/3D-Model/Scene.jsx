/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf --transform 
Files: scene.gltf [52.2KB] > C:\Users\蒋海\Desktop\Apple-iphone-3d-landing-page-starter-Code\src\assets\3D-Model\scene-transformed.glb [94.95KB] (-82%)
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
Title: Apple iPhone 13 Pro Max
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Frame_Frame_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Frame_Mic_0.geometry} material={materials.material} />
      <mesh geometry={nodes.Body_Wallpaper_0.geometry} material={materials.Wallpaper} />
      <mesh geometry={nodes.Body_Camera_Glass_0.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Body_Lens_0.geometry} material={materials.Lens} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')