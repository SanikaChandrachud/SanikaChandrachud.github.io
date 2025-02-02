import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ModelViewerProps {
  className?: string;
}

export default function ModelViewer({ className }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const gearsRef = useRef<THREE.Group>(new THREE.Group());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 15;
    camera.position.y = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 30;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create gears
    function createGear(radius: number, teeth: number, height: number) {
      const shape = new THREE.Shape();
      const toothSize = (Math.PI * 2 * radius) / (teeth * 4);

      for (let i = 0; i < teeth; i++) {
        const angle = (i * Math.PI * 2) / teeth;
        const nextAngle = ((i + 1) * Math.PI * 2) / teeth;

        if (i === 0) {
          shape.moveTo(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius
          );
        }

        // Outer tooth
        shape.lineTo(
          Math.cos(angle + Math.PI / teeth) * (radius + toothSize),
          Math.sin(angle + Math.PI / teeth) * (radius + toothSize)
        );

        shape.lineTo(
          Math.cos(nextAngle - Math.PI / teeth) * (radius + toothSize),
          Math.sin(nextAngle - Math.PI / teeth) * (radius + toothSize)
        );

        shape.lineTo(
          Math.cos(nextAngle) * radius,
          Math.sin(nextAngle) * radius
        );
      }

      const extrudeSettings = {
        steps: 1,
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.1,
        bevelSegments: 3
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const material = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        metalness: 0.8,
        roughness: 0.2,
      });

      return new THREE.Mesh(geometry, material);
    }

    // Add multiple gears
    const mainGear = createGear(3, 20, 0.5);
    const secondaryGear = createGear(2, 16, 0.5);
    const tertiaryGear = createGear(2, 16, 0.5);

    // Position gears
    secondaryGear.position.set(5.2, 0, 0);
    tertiaryGear.position.set(0, 5.2, 0);

    // Add gears to group
    gearsRef.current.add(mainGear);
    gearsRef.current.add(secondaryGear);
    gearsRef.current.add(tertiaryGear);
    scene.add(gearsRef.current);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      // Rotate gears
      mainGear.rotation.z += 0.01;
      secondaryGear.rotation.z -= 0.0125; // Opposite direction
      tertiaryGear.rotation.z -= 0.0125;

      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      if (!containerRef.current || !camera || !renderer) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-[400px] rounded-lg overflow-hidden ${className ?? ''}`}
    />
  );
}