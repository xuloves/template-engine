const path = require('path')

module.exports = {
    mode: "development",
    entry: './src/index.js', //已多次提及的唯一入口文件
    output: {
        filename: "bundle.js"
    },
    devServer: {
        //静态文件根目录
        contentBase: path.join(__dirname, 'www'), //本地服务器所加载的页面所在的目录
        //虚拟路径
        publicPath: '/xuni/',
        //不压缩
        compress: false,
        port: 8080
    }
}