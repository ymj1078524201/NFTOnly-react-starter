const mode = process.env.REACT_APP_MODE;

const devConfig = require("./dev.env");
const prodConfig = require("./prod.env");
const previewConfig = require("./preview.env");

const IS_DEV = mode === "dev";
const IS_PREVIEW = mode === "preview";
const IS_PROD = mode === "prod";

const config = IS_DEV
  ? devConfig
  : IS_PREVIEW
  ? previewConfig
  : IS_PROD
  ? prodConfig
  : {};

const modes = { IS_DEV, IS_PREVIEW, IS_PROD };

module.exports = Object.assign(config, modes);
