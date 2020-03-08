const { override, fixBabelImports } = require("customize-cra");

const modifyBabelFn = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  })
);

module.exports = function override(config, env) {
  if (env === "production") {
    config.output.publicPath = "/ant-design-mobile-form/build";
  }
  return modifyBabelFn(config, env);
};
