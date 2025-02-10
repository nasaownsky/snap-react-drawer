const path = require("path");

module.exports = {
  devtool: false,
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "snap-react-drawer",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[local]_[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".react.js"],
  },
  externals: { react: "react", "react-dom": "react-dom" },
};
