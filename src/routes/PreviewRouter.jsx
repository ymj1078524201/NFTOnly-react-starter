import { Routes, Route } from "react-router-dom";

import Demo from "src/pages/Demo/index";
import Playground from "src/pages/Playground";

export default function PreviewRouter() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}
