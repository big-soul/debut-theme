const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: {
    styles: "./customs/styles/index.js",
    scripts: "./customs/scripts/index.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "moship-[name].js",
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "moship-[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
    // new BrowserSyncPlugin({
    //   host: "localhost",
    //   port: 3000,
    //   reloadDelay: 3500,
    //   proxy: "https://meltedland.com.co?preview_theme_id=80585818166",
    //   files: "**/*",
    //   https: {
    //     key: "/Users/santiagofernandez/certificates/localhost-key.pem",
    //     cert: "/Users/santiagofernandez/certificates/localhost.pem",
    //   },
    //   snippetOptions: {
    //     rule: {
    //       match: /<\/body>/i,
    //       fn: function (snippet, match) {
    //         return snippet + match;
    //       },
    //     },
    //   },
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {},
  },
};
