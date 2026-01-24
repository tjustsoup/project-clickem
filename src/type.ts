import { Dispatch, SetStateAction } from "react"

// App-level
export type SceneName = "Main Menu" | "Start Game" | "Settings"

export type SceneProps = {
  setScene: Dispatch<SetStateAction<SceneName>>
}