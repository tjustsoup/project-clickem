import { type ECS_Store } from "../data/store";
import { units } from "../data/units";

export default function MonsterToken({
  store, id, index
}: {
  store: ECS_Store
  id: string;
  index: number;
}) {
  const { display } = units[store.units[id]]
  const health = store.health?.[id]
  const alive = store.alive[id]

  return (
    <div
      id={`${id}`}
      style={{
        height: display.height ?? 200,
        width: display.width ?? 200,
        padding: "0.5em",
        backgroundColor: !alive ? "hsl(0 0% 50%)" : (display.bg ?? "hsl(0 100% 33%)"),
        borderRadius: "25%",
        border: "4px solid hsl(0 100% 67%)"
      }}
    >
      <div className="text-emerald-600 absolute font-pixelify text-2xl bg-emerald-100 rounded-full p-1 border-2 border-emerald-600">
        {!alive ? "dead" : (health ?? 0)}
      </div>
      <img
        id={`${id}`}
        src={`monsters/${display.src}`}
        alt={display.src}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: !alive ? "rotate(90deg)" : ""
        }}
      />
    </div>
  )
}