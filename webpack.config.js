const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",

    entry: {
      home: "./src/pages/home.js",
      about: "./src/pages/about.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "js/[name].[contenthash:8].js" : "js/[name].js",
      assetModuleFilename: "assets/[name].[hash:8][ext]",

      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html",
        title: "Home",
        chunks: ["home"],
      }),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "about.html",
        title: "About",
        chunks: ["about"],
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? "css/[name].[contenthash:8].css" : "css/[name].css",
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 0,
      },
    },
    devServer: { port: 3000, open: true },
  };
};
