import { Route, Routes } from "react-router";
// import NotFound from "./containers/NotFound.tsx";

function NotFound() {
  return <div>Page not found</div>;
}

export default function Links() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
