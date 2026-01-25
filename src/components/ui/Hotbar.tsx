import { ActivatedAbility } from "../../type"

export function Hotbar({
  buttons = []
}: {
  buttons?: ActivatedAbility[]
}) {

  return (
    <div className="p-2 gap-1 border-4 border-stone-300 bg-stone-600 flex flex-row items-center justify-between">
      {buttons.map((b, i) => (
        <HotbarButton key={i} {...b} />
      ))}
    </div>
  )
}

export function HotbarButton({
  name, fn
}: ActivatedAbility) {

  return (
    <div
      className="w-[90px] h-[90px] border-2 border-slate-300 bg-slate-600"
      onClick={fn}
    >
      {name}
    </div>
  )
}