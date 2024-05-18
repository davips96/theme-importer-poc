import "./index.css";

import { ReactNode, MouseEvent } from "react";

export type ThemedButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function getClassNames() {
  switch (import.meta.env.VITE_THEME) {
    case "theme-1":
      return "base__button theme-1__button";
    case "theme-2":
      return "base__button theme-2__button";
    case "theme-3":
      return "base__button theme-3__button";
    case "theme-4":
      return "base__button theme-4__button";
    default:
      return "base__button";
  }
}

export function ThemedButton({ children, onClick }: ThemedButtonProps) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClick();
  }

  return (
    <button className={getClassNames()} onClick={handleClick}>
      {children}
    </button>
  );
}
