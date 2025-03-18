import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="canvas-loader">Loading...</span>
      <p>{progress != 0 ? `${progress.toFixed(2)}%` : "Loading"}</p>
    </Html>
  );
};

export default CanvasLoader;
