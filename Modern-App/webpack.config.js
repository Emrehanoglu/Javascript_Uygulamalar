const HtmlWebpackPlugin = require("html-webpack-plugin") //yüklediğim paketi çağırdım
const path = require('path')

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'], //komutlarmı yazacağım, giriş dosyam,
    output: {
        path: path.resolve(__dirname,'dist'), //webpack dosyasının bulunduğu klasörü ifade eder,
        filename : 'js/bundle.js' //oluşacak dosyanın adı, bundle işlemi paketleme işlemi demek, bizde burada paketleme yaptığımız için bundle.js dedik
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
           {
            test: /\.m?js$/,
            exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
}