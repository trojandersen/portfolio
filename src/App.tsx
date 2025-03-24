import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./components/CanvasLoader";
import OldTvModel from "./components/OldTvModel";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[5, 5, 25]} />
          <OrbitControls minDistance={300} />
          <OldTvModel scale={0.4} position={[0, -175, 0]} />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;
