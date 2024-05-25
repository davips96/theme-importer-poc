import { Route, Routes } from "react-router";
// import NotFound from "./containers/NotFound.tsx";

function NotFound() {
  return (
    <div>
      <h2>Aww shucks...</h2>
      <div>We were unable to find what you're looking for.</div>

      <div>Error 404</div>
    </div>
  );
}

export default function Links() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
