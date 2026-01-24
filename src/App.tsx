import { useState } from "react";
import MainMenu from "./scenes/MainMenu";

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center align items-center">
      <div className="h-[600px] w-[800px] viewport">
        <MainMenu />
      </div>
    </div>
  );
}
