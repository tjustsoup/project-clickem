import { ClickButton } from "../../components/ui";
import { SceneProps } from "../../type";

export default function StartGame({
  setScene
}: SceneProps) {

  return (
    <div className="center gap-8 size-full">
      <div className="font-pixelify text-5xl">Start Game</div>
      
      <ClickButton onClick={() => setScene("Battlefield")} >
        Go
      </ClickButton>
      <ClickButton onClick={() => setScene("Main Menu")}>
        Back
      </ClickButton>
    </div>
  )
}