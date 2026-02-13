import { MouseEvent, useMemo } from "react";
import { ActivatedAbility, SceneProps } from "../../types";
import { useECS } from "../../data/store";
import { attack } from "../../data/actions";
import { Hotbar, ResultsScreen } from "../../components/ui";
import MonsterToken from "../../components/MonsterToken";

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
      fn: () => store.startCombat(),
      disabled: store.combatActive
    },
    {
      name: "Go Back",
      fn: () => props.setScene("Main Menu")
    }
  ]


  return (
    <div className="size-full flex flex-col">
      <div
        onClick={handleClick}
        className="flex-1 border-2 border-stone-300 rounded-lg m-1 overflow-hidden h-full flex flex-row justify-center items-center gap-4"
      >
        {store.combatActive ? activeUnits : <ResultsScreen />}
      </div>

      <Hotbar buttons={abilities} />
    </div>
  )
}