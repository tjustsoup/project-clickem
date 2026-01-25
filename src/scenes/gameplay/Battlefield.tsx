import { MouseEvent, useMemo } from "react";
import { Hotbar } from "../../components/ui";
import { useECS } from "../../data/store";
import { ActivatedAbility, SceneProps } from "../../type";
import MonsterToken from "../../components/MonsterToken";
import { attack } from "../../data/actions";

export default function Battlefield(props: SceneProps) {
  /* State */
  const store = useECS()
  const activeUnits = useMemo(() => {
    return Object.keys(store.units).map((k, i) => (
      <MonsterToken
        store={store}
        id={k}
        index={i}
      />
    ))
  }, [store])

  /* Handlers */
  function handleClick(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    // @ts-ignore
    attack(e.target.id as string | undefined, store)
  }

  /* Hotbar Abilities */
  const abilities: ActivatedAbility[] = [
    {
      name: "Spawn Unit",
      fn: () => store.spawnUnit("0004")
    }
  ]


  return (
    <div className="size-full flex flex-col">
      <div
        onClick={handleClick}
        className="flex-1 border-2 border-stone-300 rounded-lg m-1 overflow-hidden h-full flex flex-row justify-center items-center gap-4"
      >
        {activeUnits}
      </div>

      <Hotbar buttons={abilities} />
    </div>
  )
}