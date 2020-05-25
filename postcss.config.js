module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      browsers: "last 2 versions"
    },
    autoprefixer: {}
  }
};
