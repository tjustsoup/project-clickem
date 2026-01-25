
export function Hotbar() {

  return (
    <div className="p-2 gap-1 border-4 border-stone-300 bg-stone-600 flex flex-row items-center justify-between">
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />
      <HotbarButton />

    </div>
  )
}

export function HotbarButton(props: any) {
  return (
    <div className="w-[90px] h-[90px] border-2 border-slate-300 bg-slate-600">

    </div>
  )
}