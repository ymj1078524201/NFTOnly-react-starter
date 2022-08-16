import { Routes, Route } from "react-router-dom";

import Demo from "src/pages/Demo/index";
import Playground from "src/pages/Playground";
import NFTContainer from "src/pages/NFTContainer";

export default function DevRouter() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/playground" element={<Playground />} />
      <Route path='/NFTOnly' element = {<NFTContainer/>} />
    </Routes>
  );
}
