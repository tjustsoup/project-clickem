import { ReactNode } from "react";

export default function ClickButton(props: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      className={`font-pixelify border-2 border-stone-300 bg-stone-600 rounded-sm py-1 px-2 text-4xl ${props.className}`}
    >
      {props.children}
    </button>
  );
}
