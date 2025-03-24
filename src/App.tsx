import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
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
          <OrbitControls
            minDistance={500}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
          <Center>
            <OldTvModel scale={0.5} />
          </Center>
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;
