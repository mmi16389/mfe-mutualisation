const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    writeToDisk: true,
  },
  chainWebpack: config => {
    // clear the existing entry point
    /*  config
      .entry('app')
        .clear()
      */
  
    // add your custom entry point
    config
      .entry('shared')
        .add('./src/shared.ts')
  }
};
