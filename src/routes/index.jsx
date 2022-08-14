import { BrowserRouter } from "react-router-dom";

import DevRouter from "./DevRouter";
import PreviewRouter from "./PreviewRouter";
import ProdRouter from "./ProdRouter";

import { IS_DEV, IS_PREVIEW, IS_PROD } from "src/config/env/index";

export default function Routes() {
  return (
    <BrowserRouter>
      {IS_DEV && <DevRouter />}
      {IS_PREVIEW && <PreviewRouter />}
      {IS_PROD && <ProdRouter />}
    </BrowserRouter>
  );
}
