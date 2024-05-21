import { ThemedButton } from "@repo/shared/ui/button";

function App() {
  return (
    <>
      <h1>Theme Importer POC</h1>
      <div className="card">
        <p>
          The value <code>VITE_THEME</code> determines the color the button below!
        </p>
        <p className="read-the-docs">
          <a href="https://github.com/davips96/theme-importer-poc" target="_blank">Github Repo</a>
        </p>
      </div>
      <ThemedButton onClick={() => {}}>Hello</ThemedButton>
    </>
  );
}

export default App;
