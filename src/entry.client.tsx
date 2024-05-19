import { HydratedRouter } from "react-router";
import { hydrateRoot } from "react-dom/client";
import { startTransition } from "react";

startTransition(() => {
  hydrateRoot(document, <HydratedRouter />);
});
