import { ClickButton } from "../../components/ui";
import { SceneProps } from "../../type";

export default function MainMenu({
  setScene
}: SceneProps) {

  return (
    <div className="flex flex-col justify-between items-center w-full h-full py-10">
      <div></div>
      <div className="font-jacquard text-9xl">Click'em</div>
      <div className="center gap-4">
        <ClickButton onClick={() => setScene("Start Game")}>
          Start
        </ClickButton>
        <ClickButton onClick={() => setScene("Settings")}>
          Settings
        </ClickButton>
        <ClickButton onClick={() => console.log("Quit")}>
          Quit
        </ClickButton>
      </div>
    </div>
  );
}
