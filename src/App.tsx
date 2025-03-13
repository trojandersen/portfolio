import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Canvas className="">
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[5, 10, 15]} />
        <OrbitControls enableZoom enablePan enableRotate />
        <mesh>
          <boxGeometry args={[6, 4, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </main>
  );
}

export default App;
