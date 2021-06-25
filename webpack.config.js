const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "source-map",
  output: {
    filename: "js/bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./dist"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_moudles/,
        use: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        // type: "asset/resource", file-loader的效果
        // type: "asset/inline", url-loader
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "海购网",
      template: "./index.html"
    }),
    new VueLoaderPlugin()
  ]
}

