import { useMemo } from "react";
import { SceneName } from "../type";
import * as Menus from "./menus";

const useSceneMemo = (scene: SceneName) => useMemo(() => {
  switch (scene) {
    case "Main Menu":
      return Menus.MainMenu;
    case "Settings":
      return Menus.Settings;
    case "Start Game":
      return Menus.StartGame;
  }
}, [scene])

export { useSceneMemo }