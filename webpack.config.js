const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            //所有.js檔都會用Babel編譯
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },//用css loader來處理css檔案
         
            //用sass loader來處理sass或scss檔案
            {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          //使用src裡面的index.html作為模板
          filename: 'index.html',
          //處理完後的檔案名稱
        }),
    ]
};