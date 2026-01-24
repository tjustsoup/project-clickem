import { ClickButton } from "../../components/ui";
import { SceneProps } from "../../type";

export default function Settings({
  setScene
}: SceneProps) {

  return (
    <div className="center gap-8">
      <div className="font-pixelify text-5xl">Settings</div>
      
      <ClickButton onClick={() => setScene("Main Menu")}>
        Back
      </ClickButton>
    </div>
  )
}