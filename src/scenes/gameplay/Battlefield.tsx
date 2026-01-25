import { Hotbar } from "../../components/ui";
import { useECS } from "../../data/store";
import { SceneProps } from "../../type";

export default function Battlefield(props: SceneProps) {
  const store = useECS()

  return (
    <div className="size-full flex flex-col">
      <div className="flex-1 border-2 border-stone-300 rounded-lg m-1">
        
      </div>

      <Hotbar />
    </div>
  )
}