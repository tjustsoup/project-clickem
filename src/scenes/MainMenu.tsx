import { ClickButton } from "../components/ui";

export default function MainMenu() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full py-10">
      <div></div>
      <div className="font-jacquard text-9xl">Click'em</div>
      <div className="center gap-4">
        <ClickButton>Start</ClickButton>
        <ClickButton>Settings</ClickButton>
        <ClickButton>Quit</ClickButton>
      </div>
    </div>
  );
}
