import React from "react";

type ClickButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> & {
  disabled?: boolean;
  toggled?: boolean;
};

export default function ClickButton({
  disabled = false,
  toggled = false,
  className,
  children,
  onClick,
  ...rest
}: ClickButtonProps) {
  const isDisabled = !!disabled;

  const base =
    "font-pixelify border-2 rounded-sm py-1 px-2 text-4xl transition duration-30 select-none";

  const normal =
    "border-stone-300 bg-stone-600 text-stone-50 hover:bg-stone-500 active:translate-y-[2px]";

  const on =
    "border-amber-200 bg-amber-600 text-stone-900 shadow-[0_0_0_2px_rgba(253,230,138,0.6)] hover:bg-amber-500 active:translate-y-[1px]";

  const offDisabled =
    "opacity-50 cursor-not-allowed pointer-events-none border-stone-400 bg-stone-700 text-stone-300";

  const variantClass = isDisabled ? offDisabled : toggled ? on : normal;

  return (
    <button
      {...rest}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-pressed={!isDisabled ? toggled : undefined}
      onClick={isDisabled ? undefined : onClick}
      className={[base, variantClass, className ?? ""].join(" ")}
    >
      {children}
    </button>
  );
}
