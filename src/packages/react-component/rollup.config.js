import path from "path";
import fs from "fs";
import * as url from "url";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
// import replace from "@rollup/plugin-replace";
import postcssPresetEnv from "postcss-preset-env";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import svg from "rollup-plugin-svg";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);
const appSrc = resolveApp("src");

const getInput = () => {
  const entry = {};
  const componentsPath = path.join(appSrc, `components/`);
  const list = fs.readdirSync(componentsPath);
  list.forEach((folder) => {
    const indexFile = path.join(componentsPath, `${folder}/index.js`);
    entry[`${folder}`] = indexFile;
  });
  return entry;
};

const componentConfig = {
  input: getInput(),
  output: {
    dir: "build",
    entryFileNames: "[name].js",
    format: "es",
  },
  plugins: [
    // alias({
    //   entries: {
    //     constants: path.resolve(appSrc, "constants"),
    //     components: path.resolve(appSrc, "components"),
    //     svgIcon: path.resolve(appSrc, "svgIcon"),
    //     hook: path.resolve(appSrc, "hook"),
    //     utils: path.resolve(appSrc, "utils"),
    //     propTypes: path.resolve(appSrc, "propTypes"),
    //     styles: path.resolve(appSrc, "styles"),
    //     "react-json-tree": path.resolve(
    //       APP_BASE_PATH_NODE_MODULES,
    //       "react-json-tree/src/index.js"
    //     ),
    //   },
    // }),
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("production"),
    //   preventAssignment: true,
    // }),
    peerDepsExternal(),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    }),
    commonJS(),
    json(),
    svg(),
    babel({
      configFile: resolveApp("babel.config.js"),
    }),
    postcss({
      autoModules: true,
      plugins: [postcssPresetEnv],
    }),
  ],
};

export default componentConfig;
