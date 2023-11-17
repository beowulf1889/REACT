import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Scene } from 'three';

const ThreeScene = () => {
  const containerRef = useRef();
  let camera, scene, renderer, controls, stats;

  const clock = new THREE.Clock();

  useEffect(() => {
    const container = containerRef.current;

    // Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Camera
    camera = new THREE.PerspectiveCamera(40, width / height, 1, 15000);
    camera.position.z = 250;

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01);
    scene.fog = new THREE.Fog(scene.background, 4000, 15000);

    // Geometry and Material
    const geometry1 = new THREE.BoxGeometry(1000,1000,1000)
    const material1 = new THREE.MeshBasicMaterial({ color: 0xc40233, specular: 0xffffff, metalness: 0.9 });

    const cube1 = new THREE.Mesh(geometry1, material1);

    scene.add(cube1);
    
    
    
    
    const s = 250;
    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, specular: 0xffffff, metalness: 0.9 });

    // Objects in the scene
    
    
    
    for (let i = 0; i < 3000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        8000 * (2.0 * Math.random() - 1.0),
        8000 * (2.0 * Math.random() - 1.0),
        8000 * (2.0 * Math.random() - 1.0)
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      scene.add(mesh);
    }

    // Lights
    const dirLight = new THREE.DirectionalLight(0xb22222, 0.5);
    dirLight.position.set(0, -1, 0).normalize();
    dirLight.color.setHSL(0.3, 0.7, 0.5);
    scene.add(dirLight);

    // Controls
    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 2500;
    controls.domElement = container;
    controls.rollSpeed = Math.PI / 6;
    controls.autoForward = false;
    controls.dragToLook = true;

    // Stats
    stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize);

    animate();

    return () => {
      // Clean up code if necessary
    };
  }, []);

  function onWindowResize() {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
  }

  function render() {
    const delta = clock.getDelta();
    controls.update(delta);
    renderer.render(scene, camera);
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default ThreeScene;
