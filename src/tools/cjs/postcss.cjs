const presetEnvOptions = {
  autoprefixer: {
    flexbox: "no-2009",
  },
  features: {
    "custom-media-queries": { preserve: true },
    "custom-properties": true,
    "gap-properties": true,
    "nesting-rules": true,
  },
  stage: 1,
};

const getFinalConfig = (env) => ({
  plugins: [
    "postcss-import",
    ["postcss-preset-env", { ...presetEnvOptions, env }],
    "postcss-normalize",
    ["cssnano", { preset: "advanced" }],
  ],
  sourceMap: true,
});

module.exports = { getFinalConfig, presetEnvOptions };