// const { override, addLessLoader } = require('customize-cra');
const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { 
        '@primary-color': '#f5a623',
        }
    }
  })
);