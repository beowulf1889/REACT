import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
   
    
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // First directional light
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(0, 1, 0);
directionalLight1.castShadow = true;
scene.add(directionalLight1);

// Second directional light
const directionalLight2 = new THREE.DirectionalLight(0xff0000, 1); // Red color, lower intensity
directionalLight2.position.set(1, 0, 0); // Different position
directionalLight2.castShadow = true;
scene.add(directionalLight2);


const directionalLight3 = new THREE.DirectionalLight(0xff0000, 1); // Red color, lower intensity
directionalLight2.position.set(0, 0, 1); // Different position
directionalLight2.castShadow = true;
scene.add(directionalLight3);

  


    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;

    // Create a background texture
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load('');
    scene.background = backgroundTexture;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({    color: 0xff0000, // Red color
    roughness: 0.5,
    metalness: 0.5,});
    
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; // Enable shadow casting for the cube
    scene.add(cube);

    
    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.lookAt(camera.position)
     
      
      renderer.render(scene, camera);
      
    };

    animate();

    

  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeScene;
