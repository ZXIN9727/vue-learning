const path = require("path")
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', filename: './index.html'
})

module.exports = {
    mode: 'production', entry: path.join(__dirname, './src/index1.js'), output: {
        path: path.join(__dirname, './dist/'), filename: 'bundle.js'
    }, plugins: [htmlPlugin], devServer: {
        open: true, port: 80, host: '127.0.0.1'
    }, module: {
        rules: [{
            test: /\.css$/, use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.jpeg|jpg|gif|png$/, use: 'url-loader?limit=1024'
        }, {
            test: /\.js/, use: 'babel-loader', exclude: /node_modules/
        }]
    }
}