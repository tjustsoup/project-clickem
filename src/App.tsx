import { useState } from "react";
import { SceneName } from "./types";
import { useSceneMemo } from "./scenes";

export default function App() {
  /* Scene Handling */
  const [scene, setScene] = useState<SceneName>("Main Menu")
  const Scene = useSceneMemo(scene)

  return (
    <div className="h-screen w-screen flex justify-center align items-center">
      <div className="w-[800px] h-[600px] viewport">
        <Scene setScene={setScene} />
      </div>
    </div>
  );
}
