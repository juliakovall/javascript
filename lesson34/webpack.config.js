const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/main.js",

    output: {
      filename: isProd ? "js/[name].[contenthash].js" : "js/[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "assets/[name].[hash][ext][query]",
    },

    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 3000,
      open: true,
      hot: true,
    },

    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: "asset/resource",
          generator: {
            filename: "img/[name].[hash][ext]",
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash][ext]",
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? "css/style.[contenthash].css" : "css/style.css",
      }),
    ],

    optimization: {
      minimize: isProd,
      minimizer: ["...", new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
