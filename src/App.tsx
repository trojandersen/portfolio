import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ComputerModel from "./components/ComputerModel";
import { Suspense } from "react";
import CanvasLoader from "./components/CanvasLoader";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.6} />
          <directionalLight color="white" position={[5, 5, 25]} />
          <OrbitControls enableZoom enablePan enableRotate />
          <ComputerModel scale={0.75} />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;
