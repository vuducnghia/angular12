const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
    }
  },
  entry: './src/main.ts', //Entry nói cho Webpack nơi để bắt đầu và theo dõi các phụ thuộc để biết được cái gì cần bundle. 
  output: { //Đây là nơi chỉ cho Webpack cần lưu trữ khi hoàn thành quá trình bundle
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  plugins: [ //Plusgins được sử dụng phổ biến nhất là để thực hiện bước cập nhật, biên tập các modules đã được bundle:
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      { 
        test: /\.html$/, // cài lệnh này trc npm install html-loader --save-dev  để nén html vào webpack
        loader: 'html-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
