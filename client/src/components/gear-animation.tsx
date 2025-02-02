import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GearAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create gear geometry
    const gearGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
    const gearMaterial = new THREE.MeshPhongMaterial({
      color: 0x404040,
      specular: 0x808080,
      shininess: 100,
    });
    
    const gear = new THREE.Mesh(gearGeometry, gearMaterial);
    scene.add(gear);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      gear.rotation.x += 0.01;
      gear.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 opacity-20"
    />
  );
}
