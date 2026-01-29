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
  name, fn, disabled
}: ActivatedAbility) {

  return (
    <div
      className={`size-[90px] border-2 border-slate-300 bg-slate-600 ${disabled && "border-slate-500 bg-slate-800"}`}
      onClick={() => !disabled && fn()}
    >
      {name}
    </div>
  )
}