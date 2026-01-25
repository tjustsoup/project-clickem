import { Dispatch, SetStateAction } from "react"

// App-level
export type SceneName = "Main Menu" | "Start Game" | "Settings" | "Battlefield"

export type SceneProps = {
  setScene: Dispatch<SetStateAction<SceneName>>
}

// Mechanical
export type ActivatedAbility = {
  name: string;
  fn: () => void;
}