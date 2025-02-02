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
    scene.background = new THREE.Color(0x1a1a1a);
    scene.fog = new THREE.Fog(0x1a1a1a, 10, 50);

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

    // Renderer setup with improved shadows
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true
    });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 30;

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    scene.add(directionalLight);

    // Add point lights for metallic highlights
    const pointLight1 = new THREE.PointLight(0x4477ff, 1.5);
    pointLight1.position.set(0, 10, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff7744, 1.5);
    pointLight2.position.set(10, 0, 0);
    scene.add(pointLight2);

    // Create improved gears with better tooth profile
    function createGear(radius: number, teeth: number, height: number) {
      const shape = new THREE.Shape();
      const toothSize = (Math.PI * 2 * radius) / (teeth * 4);
      const innerRadius = radius * 0.7; // Add inner radius for more realistic gears

      // Create base circle
      shape.moveTo(radius, 0);

      for (let i = 0; i < teeth; i++) {
        const angle = (i * Math.PI * 2) / teeth;
        const nextAngle = ((i + 1) * Math.PI * 2) / teeth;

        // Create tooth profile with curved edges
        shape.absarc(0, 0, radius, angle, angle + Math.PI/teeth/4, false);
        shape.absarc(
          Math.cos(angle + Math.PI/teeth/2) * (radius + toothSize),
          Math.sin(angle + Math.PI/teeth/2) * (radius + toothSize),
          toothSize/2,
          angle - Math.PI/2,
          angle + Math.PI/2,
          true
        );
        shape.absarc(0, 0, radius, angle + Math.PI/teeth*3/4, nextAngle, false);
      }

      // Add inner circle
      const hole = new THREE.Path();
      hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      const extrudeSettings = {
        steps: 2,
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.1,
        bevelSegments: 5
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

      // Create realistic metallic material
      const material = new THREE.MeshStandardMaterial({
        color: 0x888899,
        metalness: 0.9,
        roughness: 0.3,
        envMapIntensity: 1,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      return mesh;
    }

    // Create environment map for realistic reflections
    const envMap = new THREE.CubeTextureLoader().load([
      'https://assets.codepen.io/12117/px.png',
      'https://assets.codepen.io/12117/nx.png',
      'https://assets.codepen.io/12117/py.png',
      'https://assets.codepen.io/12117/ny.png',
      'https://assets.codepen.io/12117/pz.png',
      'https://assets.codepen.io/12117/nz.png',
    ]);
    scene.environment = envMap;

    // Add multiple gears with different sizes
    const mainGear = createGear(3, 24, 0.5);
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

      // Rotate gears with smooth motion
      mainGear.rotation.z += 0.005;
      secondaryGear.rotation.z -= 0.0075;
      tertiaryGear.rotation.z -= 0.0075;

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