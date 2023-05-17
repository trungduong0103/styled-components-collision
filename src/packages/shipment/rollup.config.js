// import path from "path";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import alias from "@rollup/plugin-alias";
// import postcssPresetEnv from "postcss-preset-env";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
// import replace from "@rollup/plugin-replace";
// import globalImport from "postcss-global-import";
// import postcssUrl from "postcss-url";

const config = {
  input: "src/index.js",
  output: {
    dir: "build",
    entryFileNames: "[name].js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    // replace({
    //   "process.env.SC_ATTR": JSON.stringify("shipment-data-styled"),
    // }),
    // alias({
    //   entries: {
    //     ppShared: `${APP_BASE_PATH_NODE_MODULES}/pp_shared_v2/src`,
    //     ppUserAccountService: path.resolve(
    //       APP_SRC_PATH,
    //       "services/ppUserAccountService.js"
    //     ),
    //     "ppShared-scss": path.resolve(
    //       APP_BASE_PATH_NODE_MODULES,
    //       "@pperform/pp-styles/src"
    //     ),
    //     "ppShared-img": path.resolve(
    //       APP_BASE_PATH_NODE_MODULES,
    //       "pp_shared_v2/assets/ppShared-img"
    //     ),
    //     "pp-app-variables": path.resolve(
    //       APP_BASE_PATH_NODE_MODULES,
    //       "@pperform/pp-styles/src/pp-app-variables.scss"
    //     ),
    //     fetchers: path.resolve(APP_SRC_PATH, "fetchers"),
    //     utils: path.resolve(APP_SRC_PATH, "utils"),
    //     constants: path.resolve(APP_SRC_PATH, "constants"),
    //     public: path.resolve(APP_SRC_PATH, "public"),
    //     "public-img": path.resolve(APP_SRC_PATH, "public/images"),
    //     client: APP_SRC_PATH,
    //     configs: path.resolve(APP_SRC_PATH, "configs"),
    //     ppPrivateFetcher: path.resolve(
    //       APP_SRC_PATH,
    //       "fetchers/ppPrivateFetcher.js"
    //     ),
    //     ppPublicFetcher: path.resolve(
    //       APP_SRC_PATH,
    //       "fetchers/ppPublicFetcher.js"
    //     ),
    //     appStateManager: path.resolve(APP_SRC_PATH, "appStateManager.js"),
    //     ppAppEndpointsConfig: path.resolve(
    //       APP_SRC_PATH,
    //       "configs/app.endpoint.config.js"
    //     ),
    //     "configurable.constants": path.resolve(
    //       APP_SRC_PATH,
    //       "constants/configurable.constants.js"
    //     ),
    //     "popper.js": path.resolve(
    //       APP_BASE_PATH_NODE_MODULES,
    //       "popper.js/dist/umd/popper.js"
    //     ),
    //   },
    // }),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    }),
    commonJS(),
    json(),
    image(),
    babel(),
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
      // plugins: [postcssUrl({ url: "inline" }), postcssPresetEnv, globalImport],
      // extensions: [".css", ".scss", ".sass"],
    }),
    peerDepsExternal(),
  ],
};

export default config;
