import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./components/CanvasLoader";
import OldTvModel from "./components/OldTvModel";
import SkyDome from "./components/SkyDome";
function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      {/* The canvas is used to display the 3d environment within our React Project */}
      <Canvas className="w-full h-full">
        {/* The Suspense component is used as a fallback, which shows before the Canvas has been loaded in */}
        <Suspense fallback={<CanvasLoader />}>
          {/* The OrbitControls component is used to allow the user to move around the 3d environment. maxPolarAngle disallows the camera to show under the tv. Will be used later on. */}
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[5, 5, 15]} />
          <OrbitControls
            minDistance={50}
            maxPolarAngle={Math.PI / 2}
            enableZoom={true}
            enablePan={true}
          />
          {/* Here the Skydome & the TV model is imported and scaled using the useGLTF hook to show the .gltf models. Center centers the TV in the 3d space. */}
          <SkyDome scale={800} />
          <Center>
            <OldTvModel scale={0.05} />
          </Center>
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;
