// import path from "path";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
// import postcssPresetEnv from "postcss-preset-env";

const config = {
  input: "src/index.ts",
  output: {
    dir: "build",
    entryFileNames: "[name].js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.SC_ATTR": JSON.stringify("return-data-styled"),
      preventAssignment: true,
    }),
    peerDepsExternal(),
    commonjs(),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
    json(),
    image(),
    postcss({
      modules: true,
      autoModules: true,
      // use: [
      //   [
      //     "sass",
      //     {
      //       includePaths: [
      //         "node_modules",
      //         APP_BASE_PATH_NODE_MODULES,
      //         path.resolve(
      //           APP_BASE_PATH_NODE_MODULES,
      //           "@pperform/pp-styles/src"
      //         ),
      //         path.resolve(APP_BASE_PATH_NODE_MODULES, "pp_shared_v2/src"),
      //       ],
      //     },
      //   ],
      // ],
      // plugins: [postcssPresetEnv],
      // extensions: [".scss"],
    }),
  ],
};

export default config;
