import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./components/CanvasLoader";
import NinetiesTvModel from "./components/NinetiesTvModel";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[5, 5, 25]} />
          <OrbitControls enableZoom enablePan enableRotate />
          <NinetiesTvModel scale={1} />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;
