import { useState } from "react";
import { SceneName } from "./types";
import { useSceneMemo } from "./scenes";
import { CursorLayer } from "./utils";

export default function App() {
  /* Scene Handling */
  const [scene, setScene] = useState<SceneName>("Main Menu")
  const Scene = useSceneMemo(scene)

  return (
    <>
      <CursorLayer />

      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[800px] h-[600px] viewport">
          <Scene setScene={setScene} />
        </div>
      </div>
    </>
  );
}
