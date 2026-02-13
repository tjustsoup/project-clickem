import { useState } from "react";
import { SceneProps } from "../../types";
import { ClickButton } from "../../components/ui";
import { classes } from "../../data/assets";
import { usePlayer } from "../../data/player-store";

export default function StartGame({
  setScene
}: SceneProps) {
  const { startCharacter } = usePlayer()

  /* Form */
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState<string>("");

  /* Handle Start */
  function handleStart() {
    if (selected === null || name.length === 0) return;

    startCharacter({ name, ...classes[selected] })
    setScene("Battlefield")
  }

  return (
    <div className="center gap-12 size-full">
      <div className="font-pixelify text-6xl">Create Character</div>

      <div />

      <div className="flex flex-row gap-6 justify-center">
        {Object.entries(classes).map(([k, v]) => (
          <ClickButton
            key={k}
            onClick={() => setSelected(k)}
            toggled={selected === k}
          >
            {v.className}
          </ClickButton>
        ))}
      </div>

      <div className="font-pixelify text-4xl flex items-center gap-4">
        Name:
        <input
          className=" border-2 rounded-sm py-1 px-2 transition select-none w-64"
          type="text"
          onChange={v => setName(v.target.value)}
          value={name}
        />
      </div>

      <div className="flex flex-row gap-10 justify-center">
        <ClickButton onClick={() => setScene("Main Menu")}>
          Back
        </ClickButton>
        <ClickButton
          disabled={(selected === null || name.length === 0)}
          onClick={handleStart}
        >
          Start
        </ClickButton>
      </div>
    </div>
  )
}