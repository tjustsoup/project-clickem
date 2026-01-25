import { UnitDisplay } from "../data/units";

export default function MonsterToken({
  display, id, index 
}: {
  display: UnitDisplay;
  id: string;
  index: number;
}) {

  return (
    <div
      id={`unit_${id}`}
      style={{
        height: display.height ?? 200,
        width: display.width ?? 200,
        padding: "0.5em",
        backgroundColor: display.bg ?? "hsl(0 100% 33%)",
        borderRadius: "25%",
        border: "4px solid hsl(0 100% 67%)"
      }}
    >
      <img
        id={`unit_${id}`}
        src={`monsters/${display.src}`}
        alt={display.src}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  )
}