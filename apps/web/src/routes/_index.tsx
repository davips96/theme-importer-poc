import { ThemedButton } from "@repo/shared/ui/button";
import { type MetaFunction, type LoaderFunctionArgs, useLoaderData } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Theme Importer POC" },
    { name: "description", content: "Theme Importer POC" },
  ];
};

export function loader (_args: LoaderFunctionArgs) {
  return "Theme Importer POC";
};

export default function App() {
  const title = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <p>
          The value <code>VITE_THEME</code> determines the color the button
          below!
        </p>
        <p className="read-the-docs">
          <a
            href="https://github.com/davips96/theme-importer-poc"
            target="_blank"
          >
            Github Repo
          </a>
        </p>
      </div>
      <ThemedButton onClick={() => {}}>Hello</ThemedButton>
    </>
  );
}
