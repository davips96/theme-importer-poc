import "./index.css";
import { clsx } from "clsx";

import { ReactNode, MouseEvent } from "react";

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
