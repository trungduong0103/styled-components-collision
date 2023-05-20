const babelConfig = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: false,
      },
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};

export default babelConfig;
