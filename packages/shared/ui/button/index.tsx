import { type ReactNode, type MouseEvent } from "react";
import { clsx } from "clsx";

import "./index.css";


export type ThemedButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function ThemedButton({ children, onClick }: ThemedButtonProps) {
  const className = clsx("base__button", {
    [`${import.meta.env.VITE_THEME}__button`]: !!import.meta.env.VITE_THEME,
  });

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClick();
  }

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
