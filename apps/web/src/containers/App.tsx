import { ThemedButton } from "@repo/shared/ui/button";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

export function loader(args: LoaderFunctionArgs) {
  console.log(args);

  return { title: "Theme Importer POC" };
}

export default function App() {
  const loaderData = useLoaderData()<typeof loader>;

  return (
    <>
      <h1>{loaderData.title}</h1>
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
