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

    // Create multiple gears with different sizes and positions
    const gears: THREE.Mesh[] = [];
    const gearPositions = [
      { x: -3, y: 2, z: 0, size: 1.5, speed: 0.01 },
      { x: 0, y: -2, z: 0, size: 2, speed: -0.015 },
      { x: 3, y: 1, z: 0, size: 1.2, speed: 0.02 },
    ];

    gearPositions.forEach(({ x, y, z, size, speed }) => {
      const gearGeometry = new THREE.CylinderGeometry(size, size, 0.5, 32, 1, false);
      const gearMaterial = new THREE.MeshPhongMaterial({
        color: 0x404040,
        specular: 0x808080,
        shininess: 100,
      });

      const gear = new THREE.Mesh(gearGeometry, gearMaterial);
      gear.position.set(x, y, z);
      gear.userData.speed = speed;
      scene.add(gear);
      gears.push(gear);
    });

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 8;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      gears.forEach((gear) => {
        gear.rotation.z += gear.userData.speed;
      });
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
      className="absolute inset-0 -z-10 opacity-30"
    />
  );
}