import { useMemo } from "react";
import { SceneName } from "../types";
import * as Menus from "./menus";
import * as Gameplay from "./gameplay";

export const useSceneMemo = (scene: SceneName) => useMemo(() => {
  switch (scene) {
    case "Main Menu":
      return Menus.MainMenu;
    case "Settings":
      return Menus.Settings;
    case "Start Game":
      return Menus.StartGame;
    case "Battlefield":
      return Gameplay.Battlefield;
  }
}, [scene])